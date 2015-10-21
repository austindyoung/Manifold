Manifold.Views.WorkspaceForm = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  template: JST['workspaces/form'],

  initialize: function(options) {
    // this.model = options.model;
    // this.collection = options.collection;
    // this.parentDiv = options.parentDiv;
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      workspace: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    // var id = this.parentDiv.id
    var attrs = $(event.target).serializeJSON();
    // attrs.organization_id = id

    var success = function () {
      this.collection.add(this.model);
      this.model = new Manifold.Models.Workspace({ user_id: Manifold.CURRENT_USER.id })
      this.render();
    //navigate
    }.bind(this);

    function errors(model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var $li = $('<li></li>');
        $li.text(el);
        $('.errors').append($li);
      }.bind(this));
    }
    // also save membership model between creator and project
    this.model.save(attrs, {
      wait: true,
      success: success,
      error: errors.bind(this)
    });
  }
});
