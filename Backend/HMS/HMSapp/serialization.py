
from rest_framework import serializers
from HMSapp.models import Appointment
from accounts.models import User
from django.contrib.auth import authenticate
import random
class AppointmentTODoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ("doctor","patient","appointment_date","appointment_time","status","reason","full_name","phone", "Department")
    
    def create(self, validated_data):
        doctor = validated_data.get("doctor")
        patient = validated_data.get("patient")
        full_name = validated_data.get("full_name")
        phone = validated_data.get("phone")
        appointment_date = validated_data.get("appointment_date")
        appointment_time = validated_data.get("appointment_time")
        Department = validated_data.get("Department")
        status = validated_data.get("status", "pending")
        reason = validated_data.get("reason")

        appointment = Appointment.objects.create(
            doctor=doctor,
            patient=patient,
            full_name=full_name,
            phone=phone,
            Department=Department,
            appointment_date=appointment_date,
            appointment_time=appointment_time,
            reason=reason,
            status=status
        )
        return appointment
    
class AppointmentSerializer(serializers.ModelSerializer):
    doctor_name = serializers.CharField(source="doctor_id.full_name", read_only=True)
    patient_name = serializers.CharField(source="patient_id.full_name", read_only=True)

    class Meta:
        model = Appointment
        fields = "__all__"
        
        
class DoctorAcceptRejectAppointmentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Appointment
        fields = ("status", "id",)
        
    def update(self, instance, validated_data):
        print("Updating appointment with validated data:", validated_data,instance.status)
        instance.status = validated_data.get("status")
        instance.save()
        return instance
    

class BookAppointmentWithoutSelectDoctor(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ("patient","appointment_date","appointment_time","reason","full_name","phone", "Department")
    
    def create(self, validated_data):
        patient = validated_data.get("patient")
        full_name = validated_data.get("full_name")
        phone = validated_data.get("phone")
        appointment_date = validated_data.get("appointment_date")
        appointment_time = validated_data.get("appointment_time")
        reason = validated_data.get("reason")
        Department = validated_data.get("Department")
        print("Received data for booking appointment without selecting doctor:", Department)
        doctors = list(User.objects.filter(department=Department))
        if not doctors:
            raise serializers.ValidationError("No doctors available in the selected department")
        print("Available doctors in the selected department:", doctors)
        doctor = random.choice(doctors)
        print("Randomly selected doctor for appointment:", doctor)
        
        appointment = Appointment.objects.create(
            doctor=doctor,
            patient=patient,
            full_name=full_name,
            Department=Department,
            phone=phone,
            appointment_date=appointment_date,
            appointment_time=appointment_time,
            reason=reason,
            status="pending"
        )
        return appointment
    
