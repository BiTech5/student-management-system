from django.contrib import admin
from .models import Student, SemesterModel,FacultyModel,AttendanceModel

# Register your models here.
admin.site.register(Student)
admin.site.register(SemesterModel)
admin.site.register(FacultyModel)
admin.site.register(AttendanceModel)
