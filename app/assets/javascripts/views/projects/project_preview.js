Manifold.Views.ProjectPreview = Backbone.CompositeView.extend({
  className: "project-preview",

    template: JST['projects/preview'],

    initialize: function () {
      this.collection = this.model.tasks();
      this.listenTo(this.collection, 'add', this.addTask);
      this.listenTo(this.collection, 'add resize', this.setHeight);
    },

    render: function () {
      var content = this.template({
        project: this.model
      });
      this.$el.html(content);
      this.$el.data("project-id", this.model.id);
      this.renderMembers();
      return this;
    },

    addMember: function (member) {
      var view = new Manifold.Views.UserIndexItem({
        model: member
      });
      this.addSubview('#members', view);
    },

    renderMembers: function () {
      this.model.team_members().each(this.addMember.bind(this));
    }
  });
