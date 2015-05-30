__author__ = 'GQiu'


from rest_framework import serializers

from todoAPI import models


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = ('id','title', 'is_done')