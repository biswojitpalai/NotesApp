from rest_framework import serializers
from .views import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields='__all__'