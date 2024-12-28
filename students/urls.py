from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='index'),
    path('add_students/', add_student, name='add_students'), 
    path('detail/<int:id>/', view_detail, name='detail'),  

]