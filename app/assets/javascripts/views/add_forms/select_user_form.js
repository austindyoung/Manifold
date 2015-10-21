Manifold.Views.SelectUserForm = Backbone.View.extend({
  events: {
    // 'click .user': 'addUser'
  },

  className: "dropdown-menu",

  tagName: "ul",

  template: JST['add_forms/select_user_form'],

  initialize: function (options) {
    this.resultsArray = options.resultsArray;
    this.model = options.model;
  },

  render: function () {
    var renderedContent = this.template({
      resultsArray: this.resultsArray
    });
    this.$el.html(renderedContent);

    return this;
  }

  // addUser: function (event) {
  //   var selected_user_id = $(event.target).data().id;
  //   this.model = new Manifold.Models.TeamMembership({
  //     member_id: selected_user_id,
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
