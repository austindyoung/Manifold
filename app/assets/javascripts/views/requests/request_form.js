Manifold.Views.RequestForm = Backbone.CompositeView.extend({

template: JST['add_forms/find_org_member'],

events: {
  'submit form': 'renderSelectUserModal',
  'input input[type=text]': 'attachResults',
  'click .user-result': 'createRequest',
  'click .m-background': 'removeForm'
},

initialize: function (options) {
  this.organization = options.organization;
  this.organization.fetch();
  this.members = this.organization.members();
},

removeForm: function () {
  this.remove();
},

render: function () {
  var renderedContent = this.template();
  this.$el.html(renderedContent);

  return this;
},

renderSelectUserModal: function (event) {
  event.preventDefault();
    var fragment = $(event.target).serializeJSON().fragment;
    this.remove();
    var resultsArray = this.members.filter(fragment);
    modal = new Manifold.Views.MakeRequest({
      organization_id: this.organization.id,
      resultsArray: resultsArray
    });
    $('body').append(modal.$el);
    modal.render();
},

createRequest: function (event) {
  var selected_user_id = $(event.target).data().id;
  this.model = new Manifold.Models.MembershipRequest({
    requestee_id: selected_user_id,
    organization_id: this.organization.id,
    requester_id: parseInt(Manifold.CURRENT_USER.id)
  });
  this.model.save()
  this.remove();
  alert("a request was sent")
},

attachResults: function (event) {
  $('#results').empty();
  event.preventDefault();
  var fragment = $(event.target).serializeJSON().fragment;

  var resultsArray = this.members.filter(fragment);
  modal = new Manifold.Views.SelectUserForm({
    model: this.model,
    resultsArray: resultsArray
  });
  $('#results').append(modal.render().$el);
}


});
