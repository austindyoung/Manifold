Manifold.Collections.OrganizationMembershipNotifications = Backbone.Collection.extend({
  url: "/api/organization_membership_notifications",
  model: Manifold.Models.OrganizationMembershipNotification,

  getOrFetch: function (id) {
    var organization_membership_notification = this.get(id);

    if (!organization_membership_notification) {
      organization_membership_notification = new Manifold.Models.OrganizationMembershipNotification({ id: id });
      organization_membership_notification.fetch({
        success: function () {
          this.add(organization_membership_notification);
        }.bind(this)
      });
    } else {
      organization_membership_notification.fetch();
    }

    return organization_membership_notification;
  }
});
