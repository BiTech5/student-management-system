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
