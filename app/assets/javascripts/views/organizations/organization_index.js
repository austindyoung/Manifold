Manifold.Views.OrganizationsIndex = Backbone.View.extend({
  template: JST['organizations/index_navbar'],

  events: {
    "click .create-org": "createOrganization"
  },

  tagName: "ul",

  className: 'organizations dropdown-menu',

  initialize: function () {
    $('body').css('background-color', 'rgb(240,240,240)')
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  createOrganization: function () {
    console.log("create");
  },

  render: function () {
    var content = this.template({
      organizations: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
