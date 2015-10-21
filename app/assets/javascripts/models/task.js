Manifold.Models.Task = Backbone.Model.extend({
  urlRoot: "/api/tasks"

  // assignees: function () {
  //   if (!this._assignees) {
  //     this._assignees = new Manifold.Collections.Assignees([], { project: this });
  //   }
  //
  //   return this._assignees;
  // },
  //
  // parse: function (response) {
  //   if (response.assignees) {
  //     this.assignees().set(response.assignees, { parse: true });
  //     delete response.assignees;
  //   };
  //
  //   if (response.team_members) {
  //     this.team_members().set(response.team_members, { parse: true });
  //     delete response.team_members;
  //   }
  //
  //   return response;
  // }

});
