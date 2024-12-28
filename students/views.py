from django.shortcuts import render
from django.http import HttpResponse ,HttpRequest
# Create your views here.

from .models import Student

def index(request: HttpRequest) -> HttpResponse:
    students_data = Student.objects.all()  # Fetch all student records from the database
    return render(request, 'home.html', {'students': students_data})