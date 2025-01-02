from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from .models import Student, FacultyModel, SemesterModel
from typing import Union, Optional
from django.db.models import Q
import datetime
def index(request: HttpRequest) -> HttpResponse:
    today = datetime.date.today()
    total_students = Student.objects.count()
    students_today = Student.objects.filter(
        enrollment_date__year=today.year,
        enrollment_date__month=today.month,
        enrollment_date__day=today.day
    ).count()
    total_teachers = 2 
    total_classes = 3   

    recent_students = Student.objects.filter(enrollment_date=today)

    context = {
        'total_students': total_students,
        'students_today': students_today,
        'total_teachers': total_teachers,
        'total_classes': total_classes,
        'recent_students': recent_students,
    }
    return render(request, 'home.html', context)

def add_student(request: HttpRequest) -> HttpResponse:
    semesters:str=SemesterModel.objects.all()
    facu:str=FacultyModel.objects.all()
    if request.method == "POST":
        first_name: str = request.POST.get('first_name', '')
        last_name: str = request.POST.get('last_name', '')
        roll_number: int = int(request.POST.get('roll_number', 0))
        gender: str = request.POST.get('gender', '')
        date_of_birth: str = request.POST.get('date_of_birth', '')
        email: str = request.POST.get('email', '')
        phone_number: str = request.POST.get('phone_number', '')
        address: str = request.POST.get('address', '')
        parent_name: str = request.POST.get('parent_name', '')
        parent_phone: str = request.POST.get('parent_phone', '')
        blood_group: str = request.POST.get('blood_group', '')
        photo: Optional[Union[bytes, str]] = request.FILES.get('photo')
        faculty:str=request.POST.get('faculty')
        semester:str=request.POST.get('semester')
        faculty_instance:str = FacultyModel.objects.get(faculty=faculty)
        semester_instance:str = SemesterModel.objects.get(numb=semester)
        new_student = Student(
            first_name=first_name,
            last_name=last_name,
            roll_number=roll_number,
            gender=gender,
            date_of_birth=date_of_birth,
            email=email,
            phone_number=phone_number,
            address=address,
            parent_name=parent_name,
            parent_phone=parent_phone,
            blood_group=blood_group,
            photo=photo,
            faculty=faculty_instance,
            semester=semester_instance
        )
        new_student.save()
        return redirect('index')
    return render(request, 'add_student.html',{'semesters':semesters,'faculties':facu})

def view_detail(request: HttpRequest, id: int) -> HttpResponse:
    student: Student = Student.objects.get(id=id)  
    return render(request, 'view_detail.html', {'student': student})

def edit_student(request: HttpRequest, id: int) -> HttpResponse:
    semesters:str=SemesterModel.objects.all()
    facu:str=FacultyModel.objects.all()
    student: Student = Student.objects.get(id=id)
    dob: str = student.date_of_birth.strftime("%Y-%m-%d")
    
    if request.method == "POST":
        student.first_name = request.POST.get('first_name', '')
        student.last_name = request.POST.get('last_name', '')
        student.roll_number = int(request.POST.get('roll_number', 0))
        student.gender = request.POST.get('gender', '')
        student.date_of_birth = request.POST.get('date_of_birth', '')
        student.email = request.POST.get('email', '')
        student.phone_number = request.POST.get('phone_number', '')
        student.address = request.POST.get('address', '')
        student.grade_level = int(request.POST.get('grade_level', 0))
        student.parent_name = request.POST.get('parent_name', '')
        student.parent_phone = request.POST.get('parent_phone', '')
        student.blood_group = request.POST.get('blood_group', '')
        
        if 'photo' in request.FILES:
            student.photo = request.FILES['photo']        
        student.save()
        return redirect('detail', id=student.id)
    
    return render(request, 'edit.html', {'student': student, 'dob': dob,'semesters':semesters,'faculties':facu})

def delete_data(request: HttpRequest, id: int) -> HttpResponse:
    student: Student = Student.objects.get(id=id)
    student.delete()
    return redirect('index')

def search(request:HttpRequest)->HttpResponse:
    if request.method=="POST":
        searched=request.POST['search']
        obj=Student.objects.filter(
            Q(first_name__icontains=searched)|
            Q(last_name__icontains=searched) |
            Q(email__icontains=searched) |
            Q(parent_name__icontains=searched)|
            Q(blood_group__icontains=searched)
        )
        return render(request,'search.html',{'students':obj})
    else:
        return render(request,'search.html')
    
def login(request:HttpRequest)->HttpResponse:
    if request.method=="POST":
        username:str=request.POST.get('username')
        password:str=request.POST.get('password')
        
    return render(request,'authentication/login.html')


def register(request:HttpRequest)->HttpResponse:
    return render(request,'authentication/register.html')

def logout(request:HttpRequest)->HttpResponse:
    return redirect('login')

def show_data(request: HttpRequest) -> HttpResponse:
    semesters = SemesterModel.objects.all()
    faculties = FacultyModel.objects.all()

    students = Student.objects.all()

    if request.method == "POST":
        faculty_name = request.POST.get('faculty')
        semester_number = request.POST.get('semester')

        if faculty_name:
            faculty_instance = FacultyModel.objects.get(faculty=faculty_name)
            students = students.filter(faculty=faculty_instance)

        if semester_number:
            semester_instance = SemesterModel.objects.get(numb=semester_number)
            students = students.filter(semester=semester_instance)

    return render(request, 'show_data.html', {'semesters': semesters, 'faculties': faculties, 'students': students})


def attendance(request:HttpRequest)->HttpResponse:
    semesters = SemesterModel.objects.all()
    faculties = FacultyModel.objects.all()
    students = Student.objects.all()
    if request.method == "POST":
        faculty_name = request.POST.get('faculty')
        semester_number = request.POST.get('semester')

        if faculty_name:
            faculty_instance = FacultyModel.objects.get(faculty=faculty_name)
            students = students.filter(faculty=faculty_instance)

        if semester_number:
            semester_instance = SemesterModel.objects.get(numb=semester_number)
            students = students.filter(semester=semester_instance)
    return render(request,'attendance.html',{'semesters': semesters, 'faculties': faculties, 'students': students})