# Generated by Django 5.0.6 on 2025-01-02 12:59

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0008_semestermodel_faculty'),
    ]

    operations = [
        migrations.CreateModel(
            name='AttendanceModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=django.utils.timezone.now)),
                ('is_present', models.BooleanField(default=True)),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.facultymodel')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.semestermodel')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendaces', to='students.student')),
            ],
        ),
    ]
