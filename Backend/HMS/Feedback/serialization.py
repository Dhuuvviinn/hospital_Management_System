from rest_framework import serializers
from .models import Feedback
from accounts.models import User
class UserFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ["user_id", "name", "email", "doctor_name", "message", "rating"]

    def create(self, validated_data):
        feedback = Feedback.objects.create(
            user_id = validated_data.get("user_id"),
            name=validated_data.get("name"),
            email=validated_data.get("email"),
            doctor_name=validated_data.get("doctor_name"),
            message=validated_data.get("message"),
            rating=validated_data.get("rating"),
        )
        
        return feedback
    
    
class GetFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ["id", "user_id", "name", "email", "doctor_name", "message", "rating", "created_at"]