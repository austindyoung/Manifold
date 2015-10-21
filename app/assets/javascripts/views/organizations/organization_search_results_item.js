Manifold.Views.OrganizationResultsItem = Backbone.View.extend({
  template: JST['organizations/search_results_item'],

  initialize: function (options) {
    this.organization = options.organization;
    this.listenTo(this.organization, "sync", this.render)
  },

  render: function () {
    var content = this.template({
      organization: this.organization
    });
    this.$el.html(content);
    return this;
  },
})
