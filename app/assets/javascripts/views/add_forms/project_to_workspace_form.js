Manifold.Views.ProjectToWorkspaceForm = Backbone.View.extend({
  events: {
    // 'click .workspace-item': 'addToWorkspace'
  },

  // className: "dropdown-menu workspaces-menu",
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
      //
    });
    this.$el.html(renderedContent);
    // var headerItem = $("<li> + to ws</li>");
    // headerItem.addClass("list-header");
    // headerItem.addClass("header-item");
    // this.$el.prepend(headerItem);
    return this;
  },
  //
  // addToWorkspace: function (event) {
  //   console.log("added");
  //
  //   event.preventDefault();
  //   var workspace_id = $(event.target).data().id;
  //   var project_id = this.model.id;
  //   this.model = new Manifold.Models.WorkspaceProjectMembership({
  //     workspace_id: workspace_id,
  //     project_id: project_id
  //   });
  //   var project = new Manifold.Models.Project({id: project_id});
  //   project.fetch();
  //   // var success = function () {
  //   //   this.collection.add(this.model);
  //   //   this.model = new Manifold.Models.Project({
  //   //     organization_id: this.model.get("organization_id")
  //   //   });
  //   //   this.render();
  //   // }.bind(this);
  //   //
  //   // function errors(model, response) {
  //   //   $('.errors').empty();
  //   //   response.responseJSON.forEach(function (el) {
  //   //     var $li = $('<li></li>');
  //   //     $li.text(el);
  //   //     $('.errors').append($li);
  //   //   }.bind(this));
  //   // }
  //   this.model.save()
  //   this.remove();
  // }

  // submit: function (event) {
  //   event.preventDefault();
  //   var attrs = $(event.target).serializeJSON();
  //
  //   var success = function () {
  //     this.collection.add(this.model);
  //     this.model = new Manifold.Models.Workspace({ user_id: Manifold.CURRENT_USER.id })
  //     this.render();
  //     //navigate
  //   }.bind(this);
  //
  //   function errors(model, response) {
  //     $('.errors').empty();
  //     response.responseJSON.forEach(function (el) {
  //       var $li = $('<li></li>');
  //       $li.text(el);
  //       $('.errors').append($li);
  //     }.bind(this));
  //   }
  //
  //   this.model.save(attrs, {
  //     wait: true,
  //     success: success,
  //     error: errors.bind(this)
  //   });

});
