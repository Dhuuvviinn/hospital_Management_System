from django.shortcuts import render,HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from Feedback.serialization import UserFeedbackSerializer,GetFeedbackSerializer
from accounts.models import User
from .models import Feedback
from rest_framework.response import Response
# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def UserFeedback(request):
    user = request.user
    userIdChecker = User.objects.filter(id=user.id).values("full_name","email")[0]
    data = request.data.copy()  
    data["name"] = userIdChecker["full_name"]
    data["email"] = userIdChecker["email"]
    print("Data received in view:", data)
    userFeedbackSerializer = UserFeedbackSerializer(data=data)
    if userFeedbackSerializer.is_valid():   
        userFeedbackSerializer.save()
        print("Feedback saved successfully.",userFeedbackSerializer.data)
        return Response({"message": "Feedback submitted successfully."}, status=201)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetAllFeedback(request):
    feedbacks = Feedback.objects.all().order_by('-created_at')
    serializer = GetFeedbackSerializer(feedbacks, many=True)
    return Response(serializer.data, status=200)