(function(Todo, $, undefined){
    Todos.TodosController = Ember.ArrayController.extend({
      actions: {
        createTodo: function() {
          // Get the todo title set by the "New Todo" text field
          var title = this.get('newTitle');
          if (!title.trim()) { return; }

          // Create the new Todo model
          var todo = this.store.createRecord('todo', {
            title: title,
            is_done: false
          });

          // Clear the "New Todo" text field
          this.set('newTitle', '');

          // Save the new model
          todo.save();
        },
        clearDone: function() {
          var done = this.filterBy('is_done', true);
          done.invoke('deleteRecord');
          done.invoke('save');
        }
      },

      remaining: function() {
        return this.filterBy('is_done', false).get('length');
      }.property('@each.is_done'),

      inflection: function() {
        return this.get('remaining') === 1 ? 'item' : 'items';
      }.property('remaining'),

      hasDone: function() {
        return this.get('done') > 0;
      }.property('done'),

      done: function() {
        return this.filterBy('is_done', true).get('length');
      }.property('@each.is_done'),

      allAreDone: function(key, value) {
        if (value === undefined) {
          return !!this.get('length') && this.isEvery('is_done', true);
        } else {
          this.setEach('is_done', value);
          this.invoke('save');
          return value;
        }
      }.property('@each.is_done')
    });

})(window.Todos, jQuery);
