from email.mime import message
from django.core.cache import cache
from django.shortcuts import render,HttpResponse
from .serialization import SignInSerializer, LogInSerializer,ResetPasswordFirstStepSerializer,ResetPasswordForUser,ResetPasswordInDBSerializer,AdminCreateStaffSerializer,DoctorStatusChangeSerializer
from rest_framework.response import Response
from rest_framework import status,permissions
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,permission_classes
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from .task import send_reset_password_email
from django.shortcuts import get_object_or_404
import secrets
# Create your views here.
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def signup(request):
    print("Received signup request with data:", request.data)
    signInserializer = SignInSerializer(data = request.data)
    
    if signInserializer.is_valid():
        signInserializer.save()
        return Response({'message': "Account created successfully!"},status=status.HTTP_201_CREATED)   
    return Response(signInserializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login(request):
    LogInserializer = LogInSerializer(data = request.data)  
    print("Received login request with data:", request.data)
    if LogInserializer.is_valid():
        user = LogInserializer.validated_data.get("user")
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        if LogInserializer.validated_data["role"] == "staff":
            print("Authenticated staff:", "staff")
            response = Response({'message': "login Successful",'user': {
                "access_token": access_token,
                "refresh_token": refresh_token,
                'id': LogInserializer.validated_data['id'],
                'role': LogInserializer.validated_data['role'],
                'full_name': LogInserializer.validated_data['full_name'],
                'department': LogInserializer.validated_data['department'],
                'experience': LogInserializer.validated_data['experience'],
                'bio': LogInserializer.validated_data['bio'],
                'doctor_status': LogInserializer.validated_data['doctor_status'],
                'must_change_password': LogInserializer.validated_data['must_change_password'],
            }}, status=status.HTTP_200_OK)
        else:
             response = Response({'message': "login Successful",'user': {
                "access_token": access_token,
                "refresh_token": refresh_token,
                'id': LogInserializer.validated_data['id'],
                'full_name': LogInserializer.validated_data['full_name'],
                'email': LogInserializer.validated_data['email'],
                'role': LogInserializer.validated_data['role'],
            }}, status=status.HTTP_200_OK)
        response.set_cookie(key="access_token",value=access_token,httponly=True,secure=False,samesite='lax',max_age=15 * 60)
        response.set_cookie(key="refresh_token",value=refresh_token,httponly=True,secure=False,samesite='lax',max_age=7 * 24 * 60 * 60)
        return response
    return Response(LogInserializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def reset_admin_password(request):
    Reset_admin_password_serializer = ResetPasswordFirstStepSerializer(data=request.data)
    
    if Reset_admin_password_serializer.is_valid():
        return Response(Reset_admin_password_serializer.data, status=status.HTTP_200_OK)
    return HttpResponse("Login created by admin")

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def ForgetPassword(request):
    UserData = ResetPasswordForUser(data = request.data)
    
    if UserData.is_valid():
        email = UserData.validated_data['email']
        print("Received password reset request for email:", type(email), email)
            
        token = secrets.token_urlsafe(20)
        cache_key = f"reset_password_token_{token}"
        cache.set(cache_key, email, timeout=15 * 60)
        print(cache_key, cache.get(cache_key))
        reset_link = f"http://localhost:5173/reset-password/{token}"
        send_reset_password_email.delay(email, reset_link)
        return Response(
            {"message": f"Password reset link sent successfully {email}"},
            status=status.HTTP_200_OK
        )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    user = request.user
    print("Authenticated user view me:", user)
    if user.role == "staff":
        user = User.objects.filter(email = user.email).values('id','email','full_name','role','department','experience','bio','doctor_status','must_change_password').first()
        return Response({'message': "login Successful",'user': {
                "access_token": request.COOKIES.get("access_token"),
                "refresh_token": request.COOKIES.get("refresh_token"),
                'id': user['id'],
                'role': user['role'],
                'full_name': user['full_name'],
                'department': user['department'],
                'experience': user['experience'],
                'bio': user['bio'],
                'doctor_status': user['doctor_status'],
                'must_change_password': user['must_change_password'],
            }}, status=status.HTTP_200_OK)
   
    return Response(
        {'message': "login Successful",
              'user': { "access_token": request.COOKIES.get("access_token"),
                "refresh_token": request.COOKIES.get("refresh_token"),'id': user.id,"username" : user.email.split('@')[0],'email': user.email , 'role': user.role}}, 
            status=status.HTTP_200_OK)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout(request):
    response = Response({'message': "Logout successful"}, status=status.HTTP_200_OK)
    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")
    return response


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def resetPasswordInDB(request):
    print("1",request.data)
    resetPasswordInDBSerializer = ResetPasswordInDBSerializer(data=request.data)
    if resetPasswordInDBSerializer.is_valid():
        print("2",resetPasswordInDBSerializer.validated_data)
        return Response(resetPasswordInDBSerializer.validated_data, status=status.HTTP_200_OK)
    print("2", resetPasswordInDBSerializer.errors)
    return Response(resetPasswordInDBSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def adminCreateStaff(request):
    print("Received request to create staff user with data:", request.data)
    print("Received request FILES:", request.FILES)

    
    serializer = AdminCreateStaffSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': "Staff user created successfully!"}, status=status.HTTP_201_CREATED)
    print("Validation errors:", serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_docter(request):
    doctors = User.objects.filter(role="staff").values('id','full_name','department','experience','bio','doctor_status',"image")
    print("Retrieved doctors:", doctors)
    return Response({'doctors': list(doctors)}, status=status.HTTP_200_OK)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def update_doctor_status(request):
    print("Received request to update doctor status with data:", request.data)
    doctor = get_object_or_404(User, id= request.data.get("id"))
    print("Doctor found for status update:", doctor)
    doctorStatusserializer = DoctorStatusChangeSerializer(doctor, data=request.data, partial=True)
    print("Serializer initialized with data:", doctorStatusserializer)
    if doctorStatusserializer.is_valid():
        doctorStatusserializer.save()
        return Response({"message": "Doctor status updated successfully"}, status=status.HTTP_200_OK)
    return Response(doctorStatusserializer.errors, status=status.HTTP_400_BAD_REQUEST)