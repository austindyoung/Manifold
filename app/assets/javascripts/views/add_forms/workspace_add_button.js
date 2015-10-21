Manifold.Views.WorkspaceAddButton = Backbone.View.extend({

    template: JST['workspaces/add_button'],

    className: 'workspace-heading',

    initialize: function () {
      // this.collection = this.model.tasks()
      // this.listenTo(this.collection, 'add', this.addTask);
      // this.listenTo(this.collection, 'add resize', this.setHeight);
    },

    render: function () {
      var content = this.template();
      this.$el.html(content);
      return this;
    },

  });
