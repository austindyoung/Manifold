Manifold.Views.MembershipRequestsIndexItem = Backbone.View.extend({

    template: JST['requests/index_item'],

    initialize: function () {
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
      var content = this.template({
        request: this.model
      });
      this.$el.html(content);
      return this;
    },
})
