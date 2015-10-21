
Manifold.Views.TaskShowInOrg = Backbone.View.extend({
  events: {
    'submit form': 'edit'
  },

  template: JST['tasks/task_show_in_org'],

  initialize: function(options) {
    this.heading = options.heading;
    this.desc = options.desc;
    // this.model = options.model;
    // this.collection = options.collection;
    // this.parentDiv = options.parentDiv;
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.model = new Manifold.Models.Task({
      title: this.heading,
      description: this.desc
    })
    var renderedContent = this.template({
      task: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    // var id = this.parentDiv.id
    var attrs = $(event.target).serializeJSON();
    attrs.creator_id = parseInt(Manifold.CURRENT_USER.id);
    // attrs.organization_id = id

    var success = function () {
      this.collection.add(this.model);
      this.model = new Manifold.Models.Task({
        project_id: this.model.get("project_id")
      });
      this.render();
      // Backbone.history.navigate(
      //   '#/organizations/' + this.model.get("organization_id"),
      //   { trigger: true }
      // );
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
