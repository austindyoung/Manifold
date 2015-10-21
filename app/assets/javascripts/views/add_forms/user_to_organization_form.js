Manifold.Views.UserToOrganizationForm = Backbone.View.extend({
  events: {
    'submit form': 'renderUserResults',
    'click .m-background': 'removeModal'
  },

  removeModal: function () {
    this.remove();
  },

  template: JST['add_forms/user_to_organization_form'],

  initialize: function (options) {
    this.model = options.model,
    this.users = options.users
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  renderUserResults: function (event) {
    event.preventDefault();
      var fragment = $(event.target).serializeJSON().fragment;
      this.remove();
      this.users.fetch();
      modal = new Manifold.Views.AddUserForm({
        model: this.model,
        users: this.users
      });
      $('body').append(modal.$el);
      modal.render();
  },

});
