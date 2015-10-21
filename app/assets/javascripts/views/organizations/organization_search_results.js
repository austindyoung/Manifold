Manifold.Views.OrganizationResults = Backbone.CompositeView.extend({
  template: JST['organizations/search_results'],

  events: {
    "click .join": "renderRequestForm",
    "click .visit": "navToShow"
  },

  renderRequestForm: function (event) {
    event.preventDefault();
    var organization_id = $(event.target).data().id;
    var organization = new Manifold.Models.Organization({id: organization_id});
    var modal = new Manifold.Views.RequestForm({
      organization: organization
    });
    $('body').append(modal.$el);
    modal.render();
  },

  navToShow: function () {

  },

  initialize: function (options) {
    this.organizations = options.organizations;
    this.navbar = options.navbar;
    this.listenTo(this.organizations, 'sync', this.render);
  },

  addResult: function (organization) {
    var view = new Manifold.Views.OrganizationResultsItem({
      organization: organization
    });
    this.addSubview('#organization-results', view);
  },

  renderResults: function () {
    this.organizations.each(this.addResult.bind(this));
  },

  render: function () {
    var content = this.template({
      organizations: this.organizations
    });
    this.$el.html(content);
    this.attachSubviews();
    this.renderResults();
    this.$("#organization-results")
    // remove sortable
    return this;
  },
})
