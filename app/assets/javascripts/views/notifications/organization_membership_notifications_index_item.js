Manifold.Views.OrganizationMembershipNotificationsIndexItem = Backbone.View.extend({

    template: JST['notifications/index_item'],

    initialize: function () {
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
      var content = this.template({
        notification: this.model
      });
      this.$el.html(content);
      return this;
    },
})
