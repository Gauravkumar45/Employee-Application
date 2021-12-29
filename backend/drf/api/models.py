from django.db import models

class Employee(models.Model):
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    emp_code = models.CharField(max_length=10)
    mobile = models.CharField(max_length=10)

    def __str__(self):
        return self.firstname