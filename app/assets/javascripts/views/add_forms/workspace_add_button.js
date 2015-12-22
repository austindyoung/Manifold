Manifold.Views.WorkspaceAddButton = Backbone.View.extend({

    template: JST['workspaces/add_button'],

    className: 'workspace-heading',


    render: function () {
      var content = this.template();
      this.$el.html(content);
      return this;
    },

  });
