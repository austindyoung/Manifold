Manifold.Collections.ProjectMembershipNotifications = Backbone.Collection.extend({
  url: "/api/project_membership_notifications",
  model: Manifold.Models.projectMembershipNotification,

  getOrFetch: function (id) {
    var project_membership_notification = this.get(id);

    if (!project_membership_notification) {
      project_membership_notification = new Manifold.Models.ProjectMembershipNotification({ id: id });
      project_membership_notification.fetch({
        success: function () {
          this.add(project_membership_notification);
        }.bind(this)
      });
    } else {
      project_membership_notification.fetch();
    }

    return project_membership_notification;
  }
});
