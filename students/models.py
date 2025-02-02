from django.db import models
# Create your models here.
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser

#model for user
class User(AbstractUser):
    ROLES: tuple = (
        ('student', 'Student'),
        ('teacher', 'Teacher'),
        ('admin', 'Admin'),
    )
    role: str = models.CharField(max_length=10, choices=ROLES, default='student')
    phone_number: str = models.CharField(max_length=15, blank=True)
    address: str = models.TextField(blank=True)

    class Meta:
        ordering: list = ['last_name', 'first_name']

    def __str__(self) -> str:
        return f"{self.get_full_name()} ({self.role.capitalize()})"
#creating model for faculty
class FacultyModel(models.Model):
    faculty:str=models.CharField(max_length=100)
    def __str__(self)->str:
        return self.faculty

#model for semester
class SemesterModel(models.Model):
    # sem_choice:int=[(i,{f" {i} Semester"}) for i in range(1,9)]
    numb = models.CharField(max_length=10,  unique=True)

    faculty:str=models.ForeignKey(FacultyModel,on_delete=models.CASCADE,related_name='semester', default=1)

    def __str__(self):
        return self.numb
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
    
    faculty: str = models.ForeignKey(FacultyModel,on_delete=models.SET_NULL,null=True,blank=True,related_name="students")
    semester: str = models.ForeignKey(SemesterModel,on_delete=models.SET_NULL,null=True,blank=True,related_name="students")
    photo= models.ImageField(upload_to='student_photos/', blank=True, null=True, editable=True)  
    
    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    class Meta:
        ordering = ['last_name', 'first_name']

# Teacher Profile
class TeacherProfile(models.Model):
    name: str = models.CharField(max_length=100,null=True)
    user: User = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher_profile')
    faculty: FacultyModel = models.ForeignKey(FacultyModel, on_delete=models.SET_NULL, null=True, blank=True)
    designation: str = models.CharField(max_length=100)
    subject:str=models.CharField(max_length=100,blank=True)
    qualifications: str = models.TextField(blank=True)
    joining_date: models.DateField = models.DateField(auto_now_add=True)
    photo: models.ImageField = models.ImageField(upload_to='teacher_photos/', blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.user.get_full_name()} ({self.designation})"

# Attendance Model
class AttendanceModel(models.Model):
    student: Student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='attendances')
    faculty: FacultyModel = models.ForeignKey(FacultyModel, on_delete=models.CASCADE)
    semester: SemesterModel = models.ForeignKey(SemesterModel, on_delete=models.CASCADE)
    date: models.DateField = models.DateField(default=now)
    is_present: bool = models.BooleanField(default=True)
    marked_by: User = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='marked_attendances')

    class Meta:
        unique_together = ('student', 'date')

    def __str__(self) -> str:
        return f"{self.student} - {self.date} ({'Present' if self.is_present else 'Absent'})"