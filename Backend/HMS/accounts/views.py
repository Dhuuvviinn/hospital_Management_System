from django.shortcuts import render,HttpResponse
from .serialization import SignInSerializer, LogInSerializer
from rest_framework.response import Response
from rest_framework import status,permissions
from rest_framework.decorators import api_view,permission_classes
# Create your views here.
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def signup(request):
    print("Received signup request with data:", request.data)
    signInserializer = SignInSerializer(data = request.data)
    if signInserializer.is_valid():
        signInserializer.save()
        return Response(signInserializer.data,status=status.HTTP_201_CREATED)   
    return Response(signInserializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login(request):
    LogInSerializer = LogInSerializer(data = request.data)
    if LogInSerializer.is_valid():
        return Response(LogInSerializer.data,status=status.HTTP_200_OK)
    return Response(LogInSerializer.errors,status=status.HTTP_400_BAD_REQUEST)
