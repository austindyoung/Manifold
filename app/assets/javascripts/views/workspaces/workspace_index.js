Manifold.Views.WorkspacesIndex = Backbone.CompositeView.extend({
  template: JST['workspaces/index'],

  className: 'workspaces-index',

  events: {
    "click .create-workspace": "renderWorkspaceModal",
    "click .workspace-heading": "navToWorkspace",
    "click .ws-title": "navToWorkspace"
  },

  navToWorkspace: function (event) {
    var id = $(event.target).data().id;
    Backbone.history.navigate("#/workspaces/" + id, {trigger: true});
  },

  initialize: function () {
    $('body').css('background-color', 'rgb(240,240,240) ')
    this.renderWorkspaceForm();
    this.listenTo(this.collection, 'add', this.addWorkspace);
    this.renderWorkspaces();
  },

  renderWorkspaceModal: function () {
    var workspace = new Manifold.Models.Workspace({
      user_id: Manifold.CURRENT_USER.id
    });
    var view = new Manifold.Views.WorkspaceModal({
      collection: this.collection,
      model: workspace
    });
    $('body').append(view.render().$el);
  },

  addWorkspace: function (workspace) {
    // debugger
    var view = new Manifold.Views.WorkspaceIndexItem({
      model: workspace
    });
    this.addSubview('#workspaces', view);
  },

  renderWorkspaces: function () {
    this.collection.each(this.addWorkspace.bind(this));
  },

  renderWorkspaceForm: function () {
    var workspace = new Manifold.Models.Workspace({
      user_id: Manifold.CURRENT_USER.id
    });
    var view = new Manifold.Views.WorkspaceForm({
      collection: this.collection,
      model: workspace
    });
    this.addSubview('#workspace-form', view);
  },

  render: function () {
    var content = this.template({
      workspaces: this.collection
    });
    // debugger;
    this.$el.html(content);
    this.attachSubviews();
    this.$('#projects');
    // remove sortable
    return this;
  }
});
