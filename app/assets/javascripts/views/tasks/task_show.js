// Manifold.Views.TaskShow = Backbone.View.extend({
//     template: JST['tasks/show'],
//
//     initialize: function () {
//       // this.collection = this.model.tasks();
//       this.listenTo(this.model, 'sync', this.render);
//     },
//
//     render: function () {
//       var content = this.template({
//         task: this.model
//       });
//       this.$el.html(content);
//       return this;
//     }
//
// });

Manifold.Views.TaskShow = Backbone.View.extend({
  events: {
    'submit form': 'edit'
  },

  template: JST['tasks/form_side'],

  initialize: function(options) {
    this.attrs = options
  },

  render: function () {
    // this.model = new Manifold.Models.Task({
    //   title: this.heading,
    //   description: this.desc
    // })
    // var renderedContent = this.template({
    //   task: this.model
    // });
    //
    var assigneesArray = JSON.parse(this.attrs.assignees);
    var renderedContent = this.template({task: this.attrs});
    this.$el.html(renderedContent);
    var self = this;
    assigneesArray.forEach(function (assignee) {
      var button = $('<button>');
      button.addClass("btn btn-default member-heading user assignee");
      var url = assignee.img_url;

      var rightArg = "url(" + url + ")";
      button.css('background', rightArg);
      $(".assignees").append(button);
    });

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
