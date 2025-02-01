from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from .models import Student, FacultyModel, SemesterModel, TeacherProfile
from typing import Union, Optional
from django.db.models import Q
from django.contrib import auth
from django.contrib.auth.models import User
import datetime
from django.contrib.auth.decorators import login_required
@login_required(login_url='/login')
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
@login_required(login_url='/login')
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
@login_required(login_url='/login')
def view_detail(request: HttpRequest, id: int) -> HttpResponse:
    student: Student = Student.objects.get(id=id)  
    return render(request, 'view_detail.html', {'student': student})
@login_required(login_url='/login')
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
@login_required(login_url='/login')
def delete_data(request: HttpRequest, id: int) -> HttpResponse:
    student: Student = Student.objects.get(id=id)
    student.delete()
    return redirect('index')
@login_required(login_url='/login')
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
        user=auth.authenticate(request,username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('index')
        print(f"{username=},{password=}")
    return render(request,'login.html')


def register(request:HttpRequest)->HttpResponse:
    if request.method=="POST":
        name:str=request.POST.get('name')
        username:str=request.POST.get('username')
        password:str=request.POST.get('password')
        email:str=request.POST.get('email')
        role:str=request.POST.get('role')
        phone_number:str=request.POST.get('phone_number')
        address:str=request.POST.get('address')
        user=User.objects.create_user(name=name,username=username,password=password,email=email)
        user.save()
        return redirect('login')
    return render(request,'register.html')

def logout(request:HttpRequest)->HttpResponse:
    auth.logout(request)
    return redirect('login')
@login_required(login_url='/login')
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

@login_required(login_url='/login')
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

@login_required(login_url='/login')
def teacher_profile_list(request):
    profiles = TeacherProfile.objects.all()
    return render(request, 'teacher_profile_list.html', {'profiles': profiles})

@login_required(login_url='/login')
def teacher_profile_detail(request, pk):
    profile = TeacherProfile.objects.get(pk=pk)
    return render(request, 'teacher_profile_detail.html', {'profile': profile})

@login_required
def teacher_profile_create(request):
    semesters:str=SemesterModel.objects.all()
    facu:str=FacultyModel.objects.all()
    if request.method == "POST":
        name:str=request.POST.get('name')
        username:str=request.POST.get('username')
        password:str=request.POST.get('password')
        designation:str=request.POST.get('designation')
        qualification:str=request.POST.get('qualification')
        faculty:str=request.POST.get('faculty')
        semester:str=request.POST.get('semester')
        faculty_instance:str = FacultyModel.objects.get(faculty=faculty)
        photo: Optional[Union[bytes, str]] = request.FILES.get('photo')
        new_teacher:list[str:str] = TeacherProfile(
            name=name,
            user=User.objects.create_user(name=name,username=username,password=password),
            designation=designation,
            qualification=qualification,
            faculty=faculty_instance,
            photo=photo
        )
        new_teacher.save()

    return render(request, 'teacher_add_form.html',{'semesters':semesters,'faculties':facu})
