from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    StudentViewSet, TeacherViewSet, CourseViewSet,
    SubjectViewSet, AttendanceViewSet, GradeViewSet
)

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'subjects', SubjectViewSet)
router.register(r'attendance', AttendanceViewSet)
router.register(r'grades', GradeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
