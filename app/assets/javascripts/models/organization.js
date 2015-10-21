Manifold.Models.Organization = Backbone.Model.extend({
  urlRoot: "/api/organizations",

  projects: function () {

    if (!this._projects) {
      this._projects = new Manifold.Collections.Projects([], { organization: this });
    }
    return this._projects;
  },

  members: function () {

    if (!this._members) {
      this._members = new Manifold.Collections.Users([], { organization: this });
    }

    return this._members;
  },

  parse: function (response) {
    if (response.projects) {
      this.projects().set(response.projects, { parse: true });
      delete response.projects;
    };

    if (response.members) {
      this.members().set(response.members, { parse: true });
      delete response.members;
    }

    return response;
  }

  // parse: function (response) {
  //   if (response.projects) {
  //     this.projects().set(response.projects, { parse: true });
  //     delete response.projects;
  //   }
  //
  //   return response;
  // }
});
