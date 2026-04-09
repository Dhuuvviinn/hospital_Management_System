from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_reset_password_email(email, reset_link):
    subject = "Reset your HMS password"
    message = f"Click the link to reset your password: {reset_link}"
    from_email = "dhruvin123.saurabhifosys@gmail.com"
    send_mail(subject, message, from_email, [email], fail_silently=False)