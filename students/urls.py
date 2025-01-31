from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='index'),
    path('add_students/', add_student, name='add_students'), 
    path('detail/<int:id>/', view_detail, name='detail'),
    path('edit_student/<int:id>/', edit_student, name='edit_student'), 
    path('delete/<int:id>',delete_data,name='delete_data') ,
    path('search',search,name='search'),
    path('login',login,name='login'),
    path('register',register,name='register'),
    path('logout',logout,name='logout'),
    path('show_data',show_data,name='show_data'),
    path('attendance',attendance,name='attendance'),

]
