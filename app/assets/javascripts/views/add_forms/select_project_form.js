Manifold.Views.SelectProjectForm = Backbone.View.extend({
  events: {
  },

  className: "dropdown-menu",

  tagName: "ul",

  template: JST['add_forms/select_project_form'],

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
});
