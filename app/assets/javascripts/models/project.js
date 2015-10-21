Manifold.Models.Project = Backbone.Model.extend({
  urlRoot: "/api/projects",

  tasks: function () {
    if (!this._tasks) {
      this._tasks = new Manifold.Collections.Tasks([], { project: this });
    }

    return this._tasks;
  },

  team_members: function () {
    if (!this._team_members) {
      this._team_members = new Manifold.Collections.Users([], { project: this });
    }
    return this._team_members;
  },

  parse: function (response) {
    if (response.tasks) {
      this.tasks().set(response.tasks, { parse: true });
      delete response.tasks;
    };

    if (response.team_members) {
      this.team_members().set(response.team_members, { parse: true });
      delete response.team_members;
    }

    return response;
  }
});
