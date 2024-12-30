from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from .models import Student
from typing import Union, Optional
from django.db.models import Q
def index(request: HttpRequest) -> HttpResponse:
    students_data: list[Student] = Student.objects.all()  # Fetch all student records from the database
    return render(request, 'home.html', {'students': students_data})

def add_student(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        first_name: str = request.POST.get('first_name', '')
        last_name: str = request.POST.get('last_name', '')
        roll_number: int = int(request.POST.get('roll_number', 0))
        gender: str = request.POST.get('gender', '')
        date_of_birth: str = request.POST.get('date_of_birth', '')
        email: str = request.POST.get('email', '')
        phone_number: str = request.POST.get('phone_number', '')
        address: str = request.POST.get('address', '')
        grade_level: int = int(request.POST.get('grade_level', 0))
        parent_name: str = request.POST.get('parent_name', '')
        parent_phone: str = request.POST.get('parent_phone', '')
        blood_group: str = request.POST.get('blood_group', '')
        photo: Optional[Union[bytes, str]] = request.FILES.get('photo')

        # Create a new Student instance and save it to the database
        new_student = Student(
            first_name=first_name,
            last_name=last_name,
            roll_number=roll_number,
            gender=gender,
            date_of_birth=date_of_birth,
            email=email,
            phone_number=phone_number,
            address=address,
            grade_level=grade_level,
            parent_name=parent_name,
            parent_phone=parent_phone,
            blood_group=blood_group,
            photo=photo
        )
        new_student.save()
        return redirect('index')
    return render(request, 'add_student.html')

def view_detail(request: HttpRequest, id: int) -> HttpResponse:
    student: Student = Student.objects.get(id=id)  
    return render(request, 'view_detail.html', {'student': student})

def edit_student(request: HttpRequest, id: int) -> HttpResponse:
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
    
    return render(request, 'edit.html', {'student': student, 'dob': dob})

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