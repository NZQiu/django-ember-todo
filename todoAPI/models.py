__author__ = 'GQiu'

from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=30)
    is_done = models.BooleanField(default='False')

    def __unicode__(self):
        return u'title={%s};is_done={%s}' % (self.title, self.is_done)

    class Meta:
        ordering = ['title']