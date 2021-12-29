from django.test import TestCase

# Create your tests here.

# from rest_framework.decorators import api_view
# from django.http import JsonResponse
# from django.shortcuts import render
# from .models import Employee
# from .serializers import EmployeeSerializer
# from rest_framework.response import Response

# @api_view(["GET"])
# def apioverview(request):
#         emp = {
#             'List':'/emplist/',
#             'Detail view':'/emp-detail/<str:pk>/',
#             'Create':'/emp-create/',
#             'Update':'/emp-update/',
#             'Delete':'/emp-delete/',
#         }

#         return Response(emp)

# @api_view(["GET"])
# def emplist(request):
#     emp = Employee.objects.all()
#     serializer = EmployeeSerializer(emp, many=True)
#     return Response(serializer.data)

# @api_view(["GET"])
# def empdetail(request,pk):
#     emp = Employee.objects.get(id=pk)
#     serializer = EmployeeSerializer(emp, many=False)
#     return Response(serializer.data)
    
# @api_view(["POST"])
# def empcreate(request):
#     employee_serializer = EmployeeSerializer(data=request.data)
#     if employee_serializer.is_valid():
#         employee_serializer.save()
#         return Response("Employee Item Successfully Create!")
#     return Response(employee_serializer.data)

# @api_view(["PUT"])
# def empupdate(request,pk):
#     emp = Employee.objects.get(id=pk)
#     employee_serializer = EmployeeSerializer(instance=emp, data=request.data)
#     if employee_serializer.is_valid():
#         employee_serializer.save()
#         return Response("Employee Item Successfully Update!")
#     return Response(employee_serializer.data)

# @api_view(["DELETE"])
# def empdelete(request,pk):
#     emp = Employee.objects.get(id=pk)
#     emp.delete()
#     return Response("Employee Item Successfully Deleted!")