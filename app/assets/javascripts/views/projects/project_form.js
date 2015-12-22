Manifold.Views.ProjectForm = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  template: JST['projects/form'],

  render: function () {
    var renderedContent = this.template({
      project: this.model
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
      this.model = new Manifold.Models.Project({
        organization_id: this.model.get("organization_id")
      });
      this.render();
    }.bind(this);

    function errors(model, response) {
      $('.errors').empty();
      response.responseJSON.forEach(function (el) {
        var $li = $('<li></li>');
        $li.text(el);
        $('.errors').append($li);
      }.bind(this));
    }
    this.model.save(attrs, {
      wait: true,
      success: success,
      error: errors.bind(this)
    });
    this.remove();
  }
});
