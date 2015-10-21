Manifold.Collections.MembershipRequests = Backbone.Collection.extend({
  url: "/api/membership_requests",
  model: Manifold.Models.MembershipRequest,

  getOrFetch: function (id) {
    var membership_request = this.get(id);

    if (!membership_request) {
      membership_request = new Manifold.Models.MembershipRequest({ id: id });
      membership_request.fetch({
        success: function () {
          this.add(membership_request);
        }.bind(this)
      });
    } else {
      membership_request.fetch();
    }

    return membership_request;
  }
});
