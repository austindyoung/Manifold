Manifold.Views.AllNotifications = Backbone.CompositeView.extend({
  template: JST['notifications/all'],
  // events: {
  //
  // },

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addRequest);
    // this.listenTo(this.requests, 'sync', this.render);
    // this.listenTo(this.notifications, 'sync', this.render);
    this.requests = options.requests;
    this.notifications = options.notifications;
    this.project_notifications = options.notifications;

    var requestsView = new Manifold.Views.MembershipRequestsIndex({
      collection: this.requests,
    })
    var membershipsView = new Manifold.Views.OrganizationMembershipNotificationsIndex({
      collection: this.notifications
    })
    var projectMembershipsView = new Manifold.Views.ProjectMembershipNotificationsIndex({
      collection: this.project_notifications
    })
    this.addSubview('#requests-side', requestsView);
    this.addSubview('#memberships-side', membershipsView);
    this.addSubview('#project-memberships-side', projectMembershipsView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
