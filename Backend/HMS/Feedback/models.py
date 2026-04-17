from django.db import models
from accounts.models import User
# Create your models here.
class Feedback(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="feedback_user", null=True, blank=True)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    doctor_name = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    rating = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback from {self.name} ({self.email})"