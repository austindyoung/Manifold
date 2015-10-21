Manifold.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.organizations = options.organizations;
    this.workspaces = options.workspaces;
    this.users = options.users;
    this.projects = options.projects;
    this.$rootEl = options.$rootEl;
    this.navbar = options.nav;
    this.$sidebar = options.$sidebar;
    this.$navbarRequests = options.$navbarRequests;
    this.requests = options.requests;
    this.notifications = options.notifications;
    this.project_notifications = options.project_notifications;
  },

  routes: {
    '': 'workspacesIndex',
    'organizations': 'organizationsIndex',
    'projects': 'projectsIndex',
    'requests': 'requestsIndex',
    'workspaces/:id': 'workspacesShow',
    'projects/:id': 'projectShow',
    'workspaces/:id': 'workspaceShow',
    'organizations/:id': 'organizationShow',
    'search?fragment=:fragment': 'organizationSearch',
    'searchuser?fragment=:fragment': 'userSearch'
  },

  renderOrganizations: function () {
    this.organizations.fetch();
    var orgDropdownView = new Manifold.Views.OrganizationsIndex({
      collection: this.organizations
    })
    $('#organizations-dropdown').append(orgDropdownView.$el)
  },

  projectsIndex: function () {
    this.projects.fetch();
    var view = new Manifold.Views.ProjectsIndex({
      collection: this.projects
    });
    this._swapView(view);
    this.renderOrganizations();
  },

  projectShow: function (id) {
    var project = new Manifold.Models.Project({ id: id });

    // project.fetch();
    //
    // this.workspaces.fetch();
    // this.users.fetch();
    // var view = new Manifold.Views.ProjectShow({
    //   model: project,
    //   collection: this.workspaces,
    //   users: this.users
    // });

    project.fetch({
      success: function () {
        this.workspaces.fetch();
        this.users.fetch();
        var view = new Manifold.Views.ProjectShowInOrg({
          model: project,
          collection: this.workspaces,
          users: this.users
        });
        this._swapView(view);
        this.renderOrganizations();
      }.bind(this)
    });




    // this._swapView(view);
    // this.renderOrganizations();
  },

  workspaceShow: function (id) {
    // todo: fetch a new model
    var workspace = new Manifold.Models.Workspace({id: id});
    workspace.fetch();
    this.workspaces.fetch();
    this.users.fetch();
    // var workspace = new Manifold.Collections.Workspaces().getOrFetch(id);
    var view = new Manifold.Views.WorkspaceShow({
      model: workspace,
      workspaces: this.workspaces,
      users: this.users
    });

    this._swapView(view);
    this.renderOrganizations();
  },

  organizationsIndex: function () {
    this.organizations.fetch();
    var view = new Manifold.Views.OrganizationsIndex({
      collection: this.organizations
      // router: this.router
    });

    this._swapView(view);
    this.renderOrganizations();
  },

  organizationShow: function (id) {
    // todo: fetch a new model
    var organization = new Manifold.Models.Organization({id: id})
    organization.fetch({
      success: function (model) {
        this.workspaces.fetch();
        var view = new Manifold.Views.OrganizationShow({
          model: model,
          collection: model.projects(),
          users: this.users,
          workspaces: this.workspaces
        });
        this._swapView(view);
        this.renderOrganizations();
    }.bind(this)
  });
  },

  organizationSearch: function (fragment) {
    var orgs = new Manifold.Collections.Organizations();
    orgs.fetch({ data: { search: fragment }});
    var view = new Manifold.Views.OrganizationResults({
      organizations: orgs,
      navbar: this.navbar
    });
    this._swapView(view);
    this.renderOrganizations();

  },

  userSearch: function (fragment) {
    this.users.fetch({ data: { search: fragment }});
    var view = new Manifold.Views.UserResults({
      users: this.users,
    });
    $('#user-results').append(view.$el)
    view.render();
    this.renderOrganizations();
  },

  workspacesIndex: function () {
    this.workspaces.fetch();
    this.organizations.fetch();
    var view = new Manifold.Views.WorkspacesIndex({
      collection: this.workspaces
    });
    this._swapView(view);
    // var orgDropdownView = new Manifold.Views.OrganizationsIndex({
    //   collection: this.organizations
    // })
    // $('#organizations-dropdown').append(orgDropdownView.$el)
    this.renderOrganizations();
  },

  requestsIndex: function () {
    this.requests.fetch();
    this.notifications.fetch();
    this.project_notifications.fetch();
    // var view = new Manifold.Views.MembershipRequestsIndex({
    //   collection: this.requests
    // });
    var view = new Manifold.Views.AllNotifications({
      requests: this.requests,
      notifications: this.notifications,
      project_notifications: this.project_notifications
    });
    this._swapRequestsView(view);
    this.renderOrganizations();
  },

  _swapRequestsView: function (view) {
    this.currentRequestsView && this.currentRequestsView.remove();
    this.currentRequestsView = view;
    this.$rootEl.html(view.$el);
    view.render();
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
