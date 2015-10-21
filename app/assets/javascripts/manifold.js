window.Manifold = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var $sidebar = $('#sidebar');
    var $body = $('#body');
    var $navbarRequests = $('#requests-menu')
    var $searchResultsGroup = $('#search-results-group');
    var router = new Manifold.Routers.Router({
      $rootEl: $rootEl,
      $sidebar: $sidebar,
      $navbarRequests: $navbarRequests,
      $body: $body,
      $searchResultsGroup: $searchResultsGroup,
      organizations: new Manifold.Collections.Organizations(),
      workspaces: new Manifold.Collections.Workspaces(),
      users: new Manifold.Collections.Users(),
      projects: new Manifold.Collections.Projects(),
      requests: new Manifold.Collections.MembershipRequests(),
      notifications: new Manifold.Collections.OrganizationMembershipNotifications(),
      project_notifications: new Manifold.Collections.ProjectMembershipNotifications()
    });
    var nav = new Manifold.Views.NavBar({
      router: router
    });
    $("#navbar").html(nav.render().$el);
    // var navView = new Manifold.Views.Navbar({router: this.router});
    // $navbar.html(navView.render().$el);

    Backbone.history.start();
  }
};
