__author__ = 'GQiu'

from rest_framework import viewsets
from todoAPI.models import Todo
from todoAPI import serializers


class TodoViewSet(viewsets.ModelViewSet):
    model = Todo
    queryset = Todo.objects.all()
    serializer_class = serializers.TodoSerializer