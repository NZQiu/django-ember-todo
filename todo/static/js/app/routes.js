(function(Todos, $, undefined ) {

    Todos.Router.map(function () {
        this.resource('todos', { path: '/' }, function () {
            this.route('active');
            this.route('done');
        });
    });

    if (window.history && window.history.pushState) {
        Todos.Router.reopen({
          location: 'history'
        });
    }

    Todos.TodosRoute = Ember.Route.extend({
        model: function() {
            return this.store.find('todo');
        }
    });

    Todos.TodosIndexRoute = Ember.Route.extend({
        model: function() {
            return this.modelFor('todos');
        }
    });

    Todos.TodosActiveRoute = Ember.Route.extend({
        model: function(){
            return this.store.filter('todo', function(todo) {
                return !todo.get('is_done');
            });
        },
        renderTemplate: function(controller) {
            this.render('todos/index', {controller: controller});
        }
    });

    Todos.TodosDoneRoute = Ember.Route.extend({
        model: function() {
            return this.store.filter('todo', function(todo) {
                return todo.get('is_done');
            });
        },
        renderTemplate: function(controller) {
            this.render('todos/index', {controller: controller});
        }
    });

}(window.Todos, jQuery));
