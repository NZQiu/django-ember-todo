__author__ = 'GQiu'

from django.conf.urls import patterns, url


urlpatterns = patterns(
    'todo.views',
    url(r'^$', 'todo_view', name='home'),
)
