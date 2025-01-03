# Generated by Django 5.0.6 on 2025-01-01 14:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0005_remove_student_grade_level'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacultyModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='student',
            name='faculty',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='students', to='students.facultymodel'),
        ),
        migrations.CreateModel(
            name='SemesterModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numb', models.CharField(choices=[('1', '1 Semester'), ('2', '2 Semester'), ('3', '3 Semester'), ('4', '4 Semester'), ('5', '5 Semester'), ('6', '6 Semester'), ('7', '7 Semester'), ('8', '8 Semester')], max_length=10, unique=True)),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='semester', to='students.facultymodel')),
            ],
        ),
        migrations.AlterField(
            model_name='student',
            name='semester',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='students', to='students.semestermodel'),
        ),
    ]
