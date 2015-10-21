Manifold.Views.NavBar = Backbone.CompositeView.extend({
  template: JST['navbar/nav_bar'],

  initialize: function (options) {
    // todo: can't use return value of fetch
    this.router = options.router;
    this.organizations = new Manifold.Collections.Organizations();
  },

  className: "navbar navbar-default main",
  tagName: "nav",

  events: {
    // "click #workspaces" : "navToWorkspaces",
    // "click #organizations" : "navToOrganizations"
    "submit form": "search"

  },

  search: function (event) {
    event.preventDefault();
  
    var fragment = this.$("input.form-control").val();
    Backbone.history.navigate("#search?fragment=" + fragment, {trigger: true});

    // if (search !== "") {
    //   this.organizations.fetch({ data: { search: search }});
    //   this.renderResults();
    // }
    // this.render();
  },

  addResult: function (result) {
    var view = new Manifold.Views.OrganizationResultItem({
      model: result
    });
    this.addSubview("#search-results-list", view)
  },

  renderResults: function () {
    var view = new Manifold.Views.OrganizationResultsContainer();
    this.addSubview("#search-results-group", view);
    var view1 = new Manifold.Views.OrganizationResultItem({
      model: this.model
    });
    this.addSubview("#search-results-list", view1)
    this.organizations.each(this.addResult.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    this.$('#search-results-list')
    this.$el.find('#sign_out_auth_token')
            .val($('meta[name=csrf-token]').attr('content'));
    // remove sortable
    return this;
  }

});
