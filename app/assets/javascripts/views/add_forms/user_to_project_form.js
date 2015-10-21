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
    // var success = function () {
    //   this.collection.add(this.model);
    //   this.model = new Manifold.Models.Project({
    //     organization_id: this.model.get("organization_id")
    //   });
    //   this.render();
    // }.bind(this);
    //
    // function errors(model, response) {
    //   $('.errors').empty();
    //   response.responseJSON.forEach(function (el) {
    //     var $li = $('<li></li>');
    //     $li.text(el);
    //     $('.errors').append($li);
    //   }.bind(this));
    // }
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

  // addUser: function (event) {
  //   console.log("trying to add");
  //   event.preventDefault();
  //   var email = $(event.target).serializeJSON().email;
  //   var user = this.users.findWhere({email: email});
  //   this.model = new Manifold.Models.TeamMembership({
  //     member_id: user.id,
  //     project_id: this.model.id
  //   });
  //   // var success = function () {
  //   //   this.collection.add(this.model);
  //   //   this.model = new Manifold.Models.Project({
  //   //     organization_id: this.model.get("organization_id")
  //   //   });
  //   //   this.render();
  //   // }.bind(this);
  //   //
  //   // function errors(model, response) {
  //   //   $('.errors').empty();
  //   //   response.responseJSON.forEach(function (el) {
  //   //     var $li = $('<li></li>');
  //   //     $li.text(el);
  //   //     $('.errors').append($li);
  //   //   }.bind(this));
  //   // }
  //   this.model.save()
  //   this.remove();
  // }

  // submit: function (event) {
  //   event.preventDefault();
  //   var attrs = $(event.target).serializeJSON();
  //
  //   var success = function () {
  //     this.collection.add(this.model);
  //     this.model = new Manifold.Models.Workspace({ user_id: Manifold.CURRENT_USER.id })
  //     this.render();
  //     //navigate
  //   }.bind(this);
  //
  //   function errors(model, response) {
  //     $('.errors').empty();
  //     response.responseJSON.forEach(function (el) {
  //       var $li = $('<li></li>');
  //       $li.text(el);
  //       $('.errors').append($li);
  //     }.bind(this));
  //   }
  //
  //   this.model.save(attrs, {
  //     wait: true,
  //     success: success,
  //     error: errors.bind(this)
  //   });

});
