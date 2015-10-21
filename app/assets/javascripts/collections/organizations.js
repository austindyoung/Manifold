Manifold.Collections.Organizations = Backbone.Collection.extend({
  url: "/api/organizations",
  model: Manifold.Models.Organization,

  getOrFetch: function (id) {
    var organization = this.get(id);

    if (!organization) {
      organization = new Manifold.Models.Organization({ id: id });
      organization.fetch({
        success: function () {
          this.add(organization);
        }.bind(this)
      });
    } else {
      organization.fetch();
    }

    return organization;
  },

  filter: function (prefix) {
    var regex = "^" + prefix
    return this.select(function (model) {
      return model.attributes.title.match(regex);
    });
  },

  select: function (condition) {
    var selected = [];
    this.models.forEach(function (model) {
      if (condition(model)) {
        selected.push(model);
      }
    });
    return selected;
  }
});

// Manifold.Collections.organizations = new Manifold.Collections.Organizations
// _.extend(Backbone.Collection.prototype, {
//   getOrFetch: function () { ... }
// })
