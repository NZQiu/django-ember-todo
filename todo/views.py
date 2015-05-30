from django.views.generic import TemplateView


class TodoView(TemplateView):
    template_name = 'index.html'

todo_view = TodoView.as_view()

