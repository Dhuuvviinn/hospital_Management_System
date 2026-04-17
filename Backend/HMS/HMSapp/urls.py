
from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path("appointment-to-doctor/", views.Appointment_TO_Doctor, name="appointment_to_doctor"),
    path("get_all_Appointments/", views.get_all_Appointments, name="get_all_appointments"),
    path("doctor-accept-reject-appointment/", views.doctor_accept_reject_appointment, name="doctor_accept_reject_appointment"),
    path("book-appointment-without-selecting-doctor/", views.book_appointment_without_selecting_doctor, name="book_appointment_without_selecting_doctor")
]