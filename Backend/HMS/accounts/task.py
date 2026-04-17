from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_reset_password_email(email, reset_link):
    subject = "Reset your HMS password"
    message = f"Click the link to reset your password: {reset_link}"
    from_email = "dhruvin123.saurabhifosys@gmail.com"
    send_mail(subject, message, from_email, [email], fail_silently=False)
    
@shared_task
def send_appointment_notification_email(email, details):
    subject = f"HMS - Appointment {details['status'].capitalize()}"

    if details['status'] == 'confirmed':
        message = f"""
        Dear Patient,

        Your appointment has been confirmed.

        Date    : {details['appointment_date']}
        Time    : {details['appointment_time']}
        Doctor  : {details['doctor_email']}

        Please arrive 10 minutes early with necessary documents.

        Regards,
        HMS Medical Team"""
    else:
        message = f"""
        Dear Patient,

        Your appointment has been cancelled.

        Date    : {details['appointment_date']}
        Time    : {details['appointment_time']}
        Doctor  : {details['doctor_email']}

        We are sorry for the inconvenience. Please book a new appointment.

        Regards,
        HMS Medical Team"""

    from_email = "dhruvin123.saurabhifosys@gmail.com"
    send_mail(subject, message, from_email, [email], fail_silently=False)
