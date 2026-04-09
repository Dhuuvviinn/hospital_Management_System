from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self,email, full_name, password, role='patient',null=True,**extra_fields):
        print("Creating user with email:", email, full_name, password, role)
        if not email:
            raise ValueError("the Email field must be required")
        if not full_name:
            raise ValueError("the Full Name field must be required")
        if not password:
            raise ValueError("the Password field must be required")
        email = self.normalize_email(email)     
        extra_fields.setdefault('must_change_password', True)                          
        user = self.model(
            email=email,
            full_name=full_name,
            role=role,
            **extra_fields
        )
        user.set_password(password)
        print("user data add")
        
        user.save(using=self._db)
        return user
    def create_staff_user(self,email,full_name,password=None,role='staff',department=None,experience=None,bio=None,doctor_status=None,**extra_fields):
        extra_fields.setdefault('is_staff', True)
        if not email.endswith("@hms.com"):
            raise ValueError("Staff user must have an email address ending with @hms.com")
        return self.create_user(email, full_name, password, role, department=department, experience=experience, bio=bio, doctor_status=doctor_status, **extra_fields)
        
    def create_superuser(self,email,full_name,password=None,role='admin',**extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        if not email.endswith("@hms.com"):
            raise ValueError("Superuser must have an email address ending with @hms.com")
        return self.create_user(email, full_name, password, role, **extra_fields)
    
class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('doctor', 'Doctor'),
        ('patient', 'Patient'),
        ('staff', 'Staff'),
    )
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES,default='patient')
    must_change_password = models.BooleanField(default=True)    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    department = models.CharField(max_length=100, blank=True, null=True)
    experience = models.CharField(max_length=50, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    doctor_status = models.CharField(
        max_length=20,
        choices=[('active','Active'),('inactive','Inactive'),('on_leave','On Leave')],
        blank=True, null=True
    )
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name','role']
    
    def __str__(self):
        return f"{self.full_name} ({self.email}) - {self.role}"