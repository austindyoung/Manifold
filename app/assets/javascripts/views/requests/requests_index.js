Manifold.Views.MembershipRequestsIndex = Backbone.CompositeView.extend({
  template: JST['requests/index'],
  events: {
    "click .user": "navToUser",
    "click .accept": "createMembership",
    "click .reject": "deleteRequest"
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addRequest);
    this.listenTo(this.collection, 'sync', this.render);
    this.renderRequests();
  },

  addRequest: function (request) {
    var view = new Manifold.Views.MembershipRequestsIndexItem({
      model: request
    });
    this.addSubview('#requests', view);
  },

  renderRequests: function () {
    this.collection.each(this.addRequest.bind(this));
  },

  navToUser: function () {

  },

  createMembership: function (event) {
    event.preventDefault();
    var $target = $(event.target)
    var attrs = {
      organization_id: $target.data().organizationId,
      member_id: $target.data().requestId
    }
    var membership = new Manifold.Models.OrganizationMembership(attrs);
    membership.save();
    $target.parent().remove();
  },

  deleteRequest: function (event) {
    event.preventDefault();
    var $target = $(event.target);
    $target.parent().remove();
    // this.collection.findWhere({id: })
  },

  render: function () {
    var content = this.template({
      requests: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
