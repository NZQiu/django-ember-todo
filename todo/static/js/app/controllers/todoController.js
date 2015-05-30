(function(Todos, $, undefined){

    Todos.TodoController = Ember.ObjectController.extend({
        actions: {
            editTodo: function() {
                this.set('isEditing', true);
            },
            acceptChanges: function() {
                this.set('isEditing', false);

                if (Ember.isEmpty(this.get('model.title'))) {
                    this.send('removeTodo');
                } else {
                    this.get('model').save();
                }
            },
            removeTodo: function () {
                var todo = this.get('model');
                todo.deleteRecord();
                todo.save();
            }
        },

        isEditing: false,

        isDone: function(key, value){
            var todo = this.get('model');

            if (value === undefined) {
                // property being used as a getter
                return todo.get('is_done');
            } else {
                // property being used as a setter
                todo.set('is_done', value);
                todo.save();
                return value;
            }
        }.property('model.is_done')
    });

})(window.Todos, jQuery);