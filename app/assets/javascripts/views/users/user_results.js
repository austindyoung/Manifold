Manifold.Views.UserResults = Backbone.View.extend({
  events: {
    'click .user': 'createMembershipAndNotification'
  },

  template: JST['requests/search_results'],

  initialize: function (options) {
    this.users = options.users;
    this.model = options.model;
  },

  render: function () {
    var renderedContent = this.template({
      users: this.users,
      organization: this.organization
    });
    this.$el.html(renderedContent);

    return this;
  },

  createMembershipAndNotification: function (event) {
    var selected_user_id = $(event.target).data().id;
    this.model = new Manifold.Models.OrganizationMembership({
      member_id: selected_user_id,
      organization_id: this.model.id
    });
    this.model.save()
    this.remove();
  }

});
