from django.urls import path
from . import views
urlpatterns = [
    path("submit-feedback/", views.UserFeedback, name="submit_feedback"),
    path("GetAllFeedback/", views.GetAllFeedback, name="get_all_feedback")
]