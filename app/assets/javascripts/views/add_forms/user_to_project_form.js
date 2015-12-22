Manifold.Views.UserToProjectForm = Backbone.View.extend({
  events: {
    'submit form': 'renderSelectUserModal',
    'input input[type=text]': 'attachResults',
    'click .user-result': 'addUser',
    'click .m-background': 'removeForm'
  },

  template: JST['add_forms/user_to_project'],

  initialize: function (options) {
    this.users = options.users;
  },

  removeForm: function () {
    this.remove();
  },

  addUser: function (event) {
    var selected_user_id = $(event.target).data().id;
    var project_id = this.model.id;
    this.model = new Manifold.Models.TeamMembership({
      member_id: selected_user_id,
      project_id: this.model.id
    });
    var notification = new Manifold.Models.ProjectMembershipNotification({
      user_id: selected_user_id,
      project_id: project_id,
      adder_id: parseInt(Manifold.CURRENT_USER.id)
    });
    notification.save();
    this.remove();
    this.model.save();
  },


  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);

    return this;
  },

  attachResults: function (event) {
    $('#results').empty();
    event.preventDefault();
    var fragment = $(event.target).serializeJSON().fragment;

    var resultsArray = this.users.filter(fragment);
    modal = new Manifold.Views.SelectUserForm({
      model: this.model,
      resultsArray: resultsArray
    });
    $('#results').append(modal.render().$el);
  },

  renderSelectUserModal: function (event) {
    event.preventDefault();
      var fragment = $(event.target).serializeJSON().fragment;
      this.remove();
      var resultsArray = this.users.filter(fragment);
      modal = new Manifold.Views.SelectUserForm({
        model: this.model,
        resultsArray: resultsArray
      });
      $('body').append(modal.$el);
      modal.render();
  },

});
