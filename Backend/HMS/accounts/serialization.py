from django.core.cache import cache

from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
class SignInSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'full_name', 'password', 'is_staff', 'is_active', 'must_change_password')
    
    def create(self, validated_data):
        print("Creating user with validated data:", validated_data)
        email = validated_data.get("email")
        full_name = validated_data.get("full_name")
        password = validated_data.get("password")
        role = validated_data.get("role", "patient")    
        must_change_password = validated_data.get("must_change_password")
        print("role:", role)
        if role == 'staff' and email.endswith("@hms.com"):
            user = User.objects.create_staff_user(email=email, full_name=full_name, password=password, role=role)
        elif role == 'admin' and email.endswith("@hms.com"):
            raise ValueError("already have admin user")
        elif role == "patient":
            user = User.objects.create_user(email=email, full_name=full_name, password=password)
        else:
            raise ValueError("Invalid role or email domain for staff/admin user")
        return user
    
class LogInSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")

        user = authenticate(username=email, password=password)
        print("Authenticated user:", user)

        if not user:
            raise serializers.ValidationError("Invalid email or password")

        data["user"] = user
        data["id"] = user.id
        data["email"] = user.email
        data["full_name"] = user.full_name
        data["role"] = user.role

        if user.role == "staff":
            data["department"] = user.department
            data["experience"] = user.experience
            data["bio"] = user.bio
            data["doctor_status"] = user.doctor_status
            data["must_change_password"] = user.must_change_password

        return data

class ResetPasswordFirstStepSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    def validate(self, data):
        print("Validating email for admin password reset:", data)
        user_data = User.objects.get(email = data.get("email"))
        
        if not user_data:   
            raise serializers.ValidationError("No user found with this email")
        user_data.set_password(data.get("password"))
        user_data.save()
        return user_data


class ResetPasswordForUser(serializers.Serializer):
    email = serializers.EmailField()
    def validate_email(self, value):
        userdata = User.objects.filter(email=value).values_list('email', flat=True).first()
        if not userdata:
            raise serializers.ValidationError("No user found with this email")
        print("Validating email for password reset:", userdata)
        return userdata
    

class ResetPasswordInDBSerializer(serializers.Serializer):
    token = serializers.CharField()
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate(self, data):
        token = data.get("token")
        print("Validating token and passwords for password reset:", data)

        password = data.get("password")
        confirm_password = data.get("confirm_password")

        if password != confirm_password:
            raise serializers.ValidationError("password and confirm password do not match")

        cache_key = f"reset_password_token_{token}"
        print("Looking up email in cache with key:", cache_key)
        print("Cache content for key:", cache_key,cache.get(cache_key))
        email = cache.get(cache_key)
        print("Email found in cache:", email)

        if not email:
            raise serializers.ValidationError("Invalid or expired token")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("User not found")
        user.set_password(password)
        user.save()
        
        return {"message": "Password reset successfully"}

class AdminCreateStaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'full_name', 'role', 'department', 'experience', 'bio', 'doctor_status',"image")
        
    def create(self, validated_data):
        print("Creating staff user with validated data:", validated_data)
        email = validated_data.get("email")
        full_name = validated_data.get("full_name")
        password = validated_data.get("password") or "defaultpassword123"
        role = validated_data.get("role", "staff")    
        department = validated_data.get("department")
        experience = validated_data.get("experience")
        bio = validated_data.get("bio")
        doctor_status = validated_data.get("doctor_status") 
        image = validated_data.get("image")
        print("Creating staff user with data:", email, full_name, role,password, department, experience, bio, doctor_status,image)
        if role != 'staff' or not email.endswith("@hms.com"):
            raise ValueError("Staff user must have role 'staff' and an email address ending with @hms.com") 
        user = User.objects.create_staff_user(email=email, full_name=full_name, password=password, role=role, department=department, experience=experience, bio=bio, doctor_status=doctor_status, image=image)
        return user
    
    
class DoctorStatusChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'doctor_status']
    def update(self, instance, validated_data):
        doctor_status = validated_data.get('doctor_status')
        print("Updating doctor status for user:", instance.id,instance.doctor_status)
        if doctor_status not in ['active', 'inactive', 'on_leave']:
            raise ValueError("Invalid doctor status")
        instance.doctor_status = doctor_status
        instance.save()
        return instance
