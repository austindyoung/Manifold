Manifold.Views.MakeRequest = Backbone.View.extend({
  // events: {
  //   'click .user': 'createRequest'
  // },

  template: JST['add_forms/select_user_form'],

  initialize: function (options) {
    this.resultsArray = options.resultsArray;
    this.organization_id = options.organization_id;
  },

  render: function () {
    var renderedContent = this.template({
      resultsArray: this.resultsArray
    });
    this.$el.html(renderedContent);

    return this;
  },

  // createRequest: function (event) {
  //   var selected_user_id = $(event.target).data().id;
  //   this.model = new Manifold.Models.MembershipRequest({
  //     requestee_id: selected_user_id,
  //     organization_id: this.organization_id,
  //     requester_id: parseInt(Manifold.CURRENT_USER.id)
  //   });
  //   this.model.save()
  //   this.remove();
  // }
});
