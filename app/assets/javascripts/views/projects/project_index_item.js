Manifold.Views.ProjectIndexItem = Backbone.CompositeView.extend({
  className: "project-heading",

    events: {
      'sortreceive': 'receiveTask',
      'sortremove': 'removeTask',
      'sortstop': 'saveTasks'
    },

    template: JST['projects/index_item'],

    // className: 'project-display',

    initialize: function (options) {
      // debugger
      this.collection = this.model.tasks();
      this.team_members = this.model.team_members();
      // this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.collection, 'add', this.addTask);
      this.listenTo(this.collection, 'add resize', this.setHeight);
      this.in_org = options.in_org;
      var team_member_ids = this.team_members.models.map(function (member) {
        return member.id;
      });
      team_member_ids.forEach(function (id) {
        if (id == Manifold.CURRENT_USER.id) {
          this.member_of_project = true;
        };
      }.bind(this));
    },

    render: function () {
      var content = this.template({
        project: this.model
      });
      if (this.in_org && this.member_of_project) {
        this.$el.css("color", "blue");
      };
      this.$el.html(content);
      this.$el.data("project-id", this.model.id);
      return this;
    },
  });
