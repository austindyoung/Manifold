Manifold.Collections.Projects = Backbone.Searchable.extend({
  url: "/api/projects",
  model: Manifold.Models.Project,
  filterCondition: function (model, regex) {
    // debugger
     return this.display(model).match(regex);
  },
  //
  // display: function (model) {
  //   return model.attributes.title.toLowerCase().replace(/  /, " ");
  // },

  // filter: function (prefix) {
  //   prefix = prefix.toLowerCase();
  //   var regex = "^" + prefix
  //   return this.select(function (model) {
  //     return model.attributes.title.toLowerCase().match(regex);
  //   });
  // },
  //
  // select: function (condition) {
  //   var selected = [];
  //   this.models.forEach(function (model) {
  //     if (condition(model)) {
  //       selected.push(model);
  //     }
  //   });
  //   return selected;
  // },


  getOrFetch: function (id) {
    var project = this.get(id);

    if (!project) {
      project = new Manifold.Models.Project({ id: id });
      project.fetch({
        success: function () {
          this.add(project);
        }.bind(this)
      });
    } else {
      project.fetch();
    }

    return project;
  }
});
