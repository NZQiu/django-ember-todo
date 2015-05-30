(function(Todos, $, undefined ) {

    Todos.Todo = DS.Model.extend({
      title: DS.attr('string'),
      is_done: DS.attr('boolean')
    });

}(window.Todos, jQuery));
