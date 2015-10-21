Manifold.Views.OrganizationMembershipNotificationsIndex = Backbone.CompositeView.extend({
  template: JST['notifications/index'],
  events: {
    "click .user": "navToUser",
    "click .delete": "deleteNotification",
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addNotification);
    this.listenTo(this.collection, 'sync', this.render);
    this.renderNotifications();
  },

  addNotification: function (notification) {
    var view = new Manifold.Views.OrganizationMembershipNotificationsIndexItem({
      model: notification
    });
    this.addSubview('#organization-membership-notifications', view);
  },

  renderNotifications: function () {
    this.collection.each(this.addNotification.bind(this));
  },

  navToUser: function () {

  },

  deleteNotification: function (event) {
    event.preventDefault();
    var $target = $(event.target);
    $target.parent().remove();
  },

  render: function () {
    var content = this.template({
      notifications: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
