from django.contrib import admin
from .models import Student, Teacher, Course, Subject, Attendance, Grade
# Register your models here.
admin.site.register([Student, Teacher, Course, Subject, Attendance, Grade])