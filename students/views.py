from django.shortcuts import render, redirect
from django.http import HttpResponse ,HttpRequest
# Create your views here.

from .models import Student

def index(request: HttpRequest) -> HttpResponse:
    students_data = Student.objects.all()  # Fetch all student records from the database
    return render(request, 'home.html', {'students': students_data})

def add_student(request:HttpRequest)->HttpResponse:
    if request.method=="POST":
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        roll_number = request.POST.get('roll_number')
        gender = request.POST.get('gender')
        date_of_birth = request.POST.get('date_of_birth')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        address = request.POST.get('address')
        grade_level = request.POST.get('grade_level')
        parent_name = request.POST.get('parent_name')
        parent_phone = request.POST.get('parent_phone')
        blood_group = request.POST.get('blood_group')
        photo = request.FILES.get('photo')

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
    return render(request,'add_student.html')


def view_detail(request:HttpRequest,id:int)->HttpResponse:
    student = Student.objects.get(id=id)  
    return render(request, 'view_detail.html', {'student': student})