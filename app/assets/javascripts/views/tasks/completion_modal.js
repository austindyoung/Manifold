Manifold.Views.CompletionModal = Backbone.View.extend({
  events: {
    'click .m-background': 'removeModal',
    'click #yes': 'deleteTask',
    'click #no': 'removeModal'
  },

  removeModal: function () {
    this.remove();
  },

  template: JST['tasks/completion_modal'],

  initialize: function(options) {
    this.$task = options.$task;
    // this.model = options.model;
    // this.collection = options.collection;
    // this.parentDiv = options.parentDiv;
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  deleteTask: function () {
    this.model.destroy();
    this.remove();
    this.$task.remove();
  }
});
