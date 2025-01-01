from django.db import models
# Create your models here.


#creating model for faculty
class FacultyModel(models.Model):
    faculty:str=models.CharField(max_length=100)
    def __str__(self)->str:
        return self.faculty


class SemesterModel(models.Model):
    # sem_choice:int=[(i,{f" {i} Semester"}) for i in range(1,9)]
    numb = models.CharField(max_length=10,  unique=True)

    # faculty:str=models.ForeignKey(FacultyModel,on_delete=models.CASCADE,related_name='semester')

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

