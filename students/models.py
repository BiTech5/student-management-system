from django.db import models

# Create your models here.
class Student(models.Model):
    first_name: str = models.CharField(max_length=100)
    last_name: str = models.CharField(max_length=100)
    roll_number: str = models.CharField(max_length=20, unique=True)
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    ]
    gender: str = models.CharField(max_length=1, choices=GENDER_CHOICES)
    date_of_birth: models.DateField = models.DateField()
    email: str = models.EmailField(unique=True)
    phone_number: str = models.CharField(max_length=15)
    address: str = models.TextField()
    enrollment_date: models.DateField = models.DateField(auto_now_add=True)
    is_active: bool = models.BooleanField(default=True)
    grade_level: int = models.IntegerField()
    parent_name: str = models.CharField(max_length=100)
    parent_phone: str = models.CharField(max_length=15)
    blood_group: str = models.CharField(max_length=5)
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    class Meta:
        ordering = ['last_name', 'first_name']
