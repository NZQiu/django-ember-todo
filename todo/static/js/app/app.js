window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.DjangoRESTAdapter.extend({
    namespace: "api"
});
