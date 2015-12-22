Manifold.Views.ProjectToWorkspaceForm = Backbone.View.extend({
  events: {
  },
  className: "workspaces-menu dropdown-menu",

  tagName: "ul",

  template: JST['add_forms/project_to_workspace'],

  initialize: function (options) {
    this.workspace = options.workspace;
  },

  render: function () {
    var renderedContent = this.template({
      workspaces: this.collection,
      currentWorkspace: this.workspace,
      model: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },
 

});
