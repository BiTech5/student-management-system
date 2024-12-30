from django.db import models

# Create your models here.
class Student(models.Model):
    first_name: str = models.CharField(max_length=100)
    last_name: str = models.CharField(max_length=100)
    roll_number: str = models.IntegerField()
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
    parent_name: str = models.CharField(max_length=100)
    parent_phone: str = models.CharField(max_length=15)
    blood_group: str = models.CharField(max_length=5)
    FACULTY_CHOICES:list[tuple[str:str]]  = [
        ('BBA-BI', 'Bachelor of Business Administration in Banking and Insurance'),
        ('BCSIT', 'Bachelor in Computer System and Information Technology'),
        ('BBA', 'Bachelor of Business Administration'),
    ]
    SEMESTER_CHOICES:list[tuple[str:str]] = [
        ('1', 'First Semester'),
        ('2', 'Second Semester'),
        ('3', 'Third Semester'),
        ('4', 'Fourth Semester'),
        ('5', 'Fifth Semester'),
        ('6', 'Sixth Semester'),
        ('7', 'Seventh Semester'),
        ('8', 'Eighth Semester'),
    ]
    faculty: str = models.CharField(max_length=10, choices=FACULTY_CHOICES, default='BBA')
    semester: str = models.CharField(max_length=1, choices=SEMESTER_CHOICES, default='1')
    photo= models.ImageField(upload_to='student_photos/', blank=True, null=True, editable=True)  
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    class Meta:
        ordering = ['last_name', 'first_name']

