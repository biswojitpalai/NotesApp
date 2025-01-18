from django.urls import path,include
from .models import *
from rest_framework import routers
from .views import *


router=routers.DefaultRouter()
router.register(r'todos',TodoViewSet,basename='todo')
urlpatterns = [
    path("",include(router.urls))
]