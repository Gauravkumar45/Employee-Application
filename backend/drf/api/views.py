from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeViewset(ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()