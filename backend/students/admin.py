from django.contrib import admin
from .models import Student, SemesterModel,FacultyModel,AttendanceModel,User, TeacherProfile
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class CustomUserModel(UserAdmin):
    model: type = User
    list_display: tuple = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'role')
    fieldsets: tuple = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('role', 'phone_number', 'address')}),
    )
admin.site.register(Student)
admin.site.register(SemesterModel)
admin.site.register(FacultyModel)
admin.site.register(AttendanceModel)
admin.site.register(User,CustomUserModel)
admin.site.register(TeacherProfile)