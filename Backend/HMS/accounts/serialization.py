from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
class SignInSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'full_name', 'password', 'role', 'is_staff', 'is_active')
    
    def create(self, validated_data):
        
        email = validated_data.get("email")
        full_name = validated_data.get("full_name")
        password = validated_data.get("password")
        role = validated_data.get("role", "patient")    
        user = User.objects.create_user(email=email, full_name=full_name, password=password, role=role)
        return user
    
class LogInSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
    
    def validate(self, data):
        email = data.get("email")
        password = data.get("password")
        user = authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError("Invalid email or password")
        return data
