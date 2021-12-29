from django.urls.conf import include,path
from rest_framework.routers import DefaultRouter
from .views import EmployeeViewset

router = DefaultRouter() 
router.register('/restapi',EmployeeViewset)

urlpatterns = [
    path('api/',include(router.urls)),
]
