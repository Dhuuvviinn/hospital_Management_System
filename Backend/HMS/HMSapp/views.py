from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from accounts.task import send_appointment_notification_email
from HMSapp.serialization import AppointmentTODoctorSerializer,AppointmentSerializer,DoctorAcceptRejectAppointmentSerializer,BookAppointmentWithoutSelectDoctor
from rest_framework.response import Response
from rest_framework import status
from HMSapp.models import Appointment
from accounts.models import User
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def Appointment_TO_Doctor(request):
    print(request.data)
    Appointment_TO_Doctorserializer = AppointmentTODoctorSerializer(data=request.data)
    if Appointment_TO_Doctorserializer.is_valid():
        appointment = Appointment_TO_Doctorserializer.save()
        return Response({'message': "Appointment created successfully!", 'appointment_id': appointment.id}, status=201)
    print(Appointment_TO_Doctorserializer.errors)
    return Response({'message': "Invalid data provided."}, status=400)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_Appointments(request):
    user = request.user
    if user.role == "staff":  
        appointments = Appointment.objects.filter(doctor_id=user.id)
    elif user.role == "patient":
        appointments = Appointment.objects.filter(patient_id=user.id)
    else:
        appointments = Appointment.objects.all()  

    serializer = AppointmentSerializer(appointments, many=True)
    return Response({
        "message": "Appointments retrieved successfully",
        "data": serializer.data
    }, status=200)
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def doctor_accept_reject_appointment(request):
    print("Received data for doctor accept/reject appointment:", request.data)
    appointment = get_object_or_404(Appointment, id=request.data.get("id"))
    doctor_accept_reject_appointment_serializer = DoctorAcceptRejectAppointmentSerializer(appointment, data=request.data, partial=True)

    if doctor_accept_reject_appointment_serializer.is_valid():
        doctor_accept_reject_appointment_serializer.save()
        patient_email = User.objects.get(id=doctor_accept_reject_appointment_serializer.instance.patient_id).email
        doctor_email = User.objects.get(id=doctor_accept_reject_appointment_serializer.instance.doctor_id).email
        details = {
                "appointment_date": doctor_accept_reject_appointment_serializer.instance.appointment_date.strftime("%d %B %Y"),
                "appointment_time": doctor_accept_reject_appointment_serializer.instance.appointment_time.strftime("%I:%M %p"),
                "doctor_email": doctor_email,
                "patient_email": patient_email,
                "status": doctor_accept_reject_appointment_serializer.instance.status
            }
        if doctor_accept_reject_appointment_serializer.instance.status == "confirmed":
            print("Appointment status is confirmed. Preparing to send notification email to patient and doctor.")
           
            send_appointment_notification_email.delay(patient_email, details)
            
            return Response({
                "message": "Appointment status updated successfully and notification email sent to patient and doctor."
            }, status=status.HTTP_200_OK)
        else:
            appointment.delete()
            send_appointment_notification_email.delay(patient_email, details)
            
            return Response({
                "message": "Appointment status updated successfully and notification email sent to patient and doctor."
            }, status=status.HTTP_200_OK)
            
    else:
        return Response(doctor_accept_reject_appointment_serializer.errors, status=400)
    


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def book_appointment_without_selecting_doctor(request):
    print("Received data for booking appointment without selecting doctor:", request.data)
    book_appointment_without_selecting_doctor = BookAppointmentWithoutSelectDoctor(data=request.data)
    
    if book_appointment_without_selecting_doctor.is_valid():
        appointment = book_appointment_without_selecting_doctor.save()
        return Response({'message': "Appointment created successfully!"}, status=201)
    print("Errors in booking appointment without selecting doctor:", book_appointment_without_selecting_doctor.errors)
    return Response({'message': "Invalid data provided.", 'errors': book_appointment_without_selecting_doctor.errors}, status=400)

