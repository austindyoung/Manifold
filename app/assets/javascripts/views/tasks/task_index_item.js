Manifold.Views.TasksIndexItem = Backbone.View.extend({
    template: JST['tasks/index_item'],
    className: "index-item task-item",
    // "index-item"

    initialize: function () {
      // this.collection = this.model.tasks();
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
      var content = this.template({
        task: this.model
      });
      this.$el.html(content);
      this.$el.data("id", this.model.id);
      this.$el.data("desc", this.model.attributes.description);
      this.$el.data("heading", this.model.attributes.title);
      this.$el.data("due_date", this.model.attributes.due_date);
      var assigneesJSON = JSON.stringify(this.model.attributes.assignees);
      this.$el.data("assignees", assigneesJSON);
  // debugger;
      // this.$el.data("heading", this.model.attributes.assignees);
      // other data
      return this;
    }

});
