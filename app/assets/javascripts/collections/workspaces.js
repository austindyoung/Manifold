Manifold.Collections.Workspaces = Backbone.Collection.extend({
  url: "/api/workspaces",
  model: Manifold.Models.Workspace,

  getOrFetch: function (id) {
    var workspace = this.get(id);

    if (!workspace) {
      workspace = new Manifold.Models.Workspace({ id: id });
      workspace.fetch({
        success: function () {
          this.add(workspace);
        }.bind(this)
      });
    } else {
      workspace.fetch();
    }

    return workspace;
  }
});
