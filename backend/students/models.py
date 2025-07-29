from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True)

    class Meta:
        abstract = True


# studen model
class Student(Person):
    roll_number = models.CharField(max_length=20, unique=True)
    enrollment_date = models.DateField()
    course = models.ForeignKey('Course', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.roll_number})"

#teacher model
class Teacher(Person):
    employee_id = models.CharField(max_length=20, unique=True)
    hire_date = models.DateField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

#course model
class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    duration_months = models.IntegerField()

    def __str__(self):
        return self.name

#subject
class Subject(models.Model):
    name = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name

#for attendance
class Attendance(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=10, choices=[('Present', 'Present'), ('Absent', 'Absent')])

    def __str__(self):
        return f"{self.student.roll_number} - {self.date} - {self.status}"
    
#grade model
class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    marks = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.student.roll_number} - {self.subject.name} - {self.marks}"