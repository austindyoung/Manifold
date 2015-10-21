Manifold.Views.WorkspaceIndexItem = Backbone.CompositeView.extend({

    template: JST['workspaces/index_item'],

    className: 'workspace-heading',

    initialize: function () {
      // this.collection = this.model.tasks();
      this.listenTo(this.model, 'sync', this.render);
      // this.listenTo(this.collection, 'add', this.addTask);
      // this.listenTo(this.collection, 'add resize', this.setHeight);
    },

    render: function () {
      // debugger
      var content = this.template({
        workspace: this.model
      });
      this.$el.html(content);
      this.$el.data("id", this.model.id);
      this.attachSubviews();
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
      this.model.members().each(this.addMember.bind(this));
    }

  });
