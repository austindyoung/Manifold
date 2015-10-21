Manifold.Views.AddUserForm = Backbone.View.extend({
  events: {
    'click .user-result': 'addUser',
    //
    'click .m-background': 'removeModal'
  },

  removeModal: function () {
    console.log("check");
    this.remove();
  },

  template: JST['add_forms/select_user_for_membership'],

  initialize: function (options) {
    this.users = options.users;
    this.model = options.model;
  },

  render: function () {
    var renderedContent = this.template({
      users: this.users,
      organization: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  addUser: function (event) {
    var selected_user_id = $(event.target).data().id;
    var organization_id = this.model.id;
    this.model = new Manifold.Models.OrganizationMembership({
      member_id: selected_user_id,
      organization_id: organization_id
    });
    var notification = new Manifold.Models.OrganizationMembershipNotification({
      user_id: selected_user_id,
      adder_id: parseInt(Manifold.CURRENT_USER.id),
      organization_id: organization_id
    })
    alert("A request has been sent")
    this.model.save()
    notification.save();
    this.remove();
  }

});
