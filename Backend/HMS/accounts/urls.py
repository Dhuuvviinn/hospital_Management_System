
from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("login/", views.login, name="login"),
    path('reset-admin-password/', views.reset_admin_password, name='reset_admin_password'),
    path('forget-password/', views.ForgetPassword, name='forget_password'),
    path('logout/', views.logout, name='logout'),
    path('reset-password/', views.resetPasswordInDB, name='reset_password_for_user'),    
    path('me/',views.me,name="me"),
    path('admin-create-staff/',views.adminCreateStaff,name="admin_create_staff"),
    path('get-all-doctors/',views.get_all_docter,name="get_all_doctors"),
    path('update-doctor-status/', views.update_doctor_status, name='update_doctor_status')
]
