__author__ = 'GQiu'


from rest_framework import routers
from todoAPI.views import TodoViewSet


routers = routers.DefaultRouter()
routers.register(r'todos', TodoViewSet)


urlpatterns = routers.urls