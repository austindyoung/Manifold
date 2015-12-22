Manifold.Views.ProjectIndexItemInWorkspace = Backbone.CompositeView.extend({

  className: "project-heading",

    events: {
      'sortreceive': 'receiveTask',
      'sortremove': 'removeTask',
      'sortstop': 'saveTasks'
    },

    template: JST['projects/show_in_workspace'],

    initialize: function () {
      this.collection = this.model.tasks();
      // this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.collection, 'add', this.addTask);
      this.listenTo(this.collection, 'add resize', this.setHeight);
    },

    render: function () {
      var content = this.template({
        project: this.model
      });
      this.$el.html(content);

      this.$el.data("project-id", this.model.id);
      return this;
    },

  });
