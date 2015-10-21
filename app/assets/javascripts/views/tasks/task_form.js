Manifold.Views.TaskForm = Backbone.View.extend({
  events: {
    'click input[type=submit]': 'removeModal',
    'click .m-background': 'removeModal'
  },
  removeModal: function () {
    this.remove();
  },

  template: JST['tasks/form'],

  initialize: function(options) {
    // this.test = 1;
    // this.prev_name_size = 0;
    // this.cursorPosition = 0;
    this.members = options.members;
  },

  render: function () {
    var renderedContent = this.template({
      task: new Manifold.Models.Task()
    });
    this.$el.html(renderedContent);
    var view = this;

    var filterCondition =  function (model, regex) {
      return model.attributes.fname.toLowerCase().match(regex) || model.attributes.mname.toLowerCase().match(regex) || model.attributes.lname.toLowerCase().match(regex);
    }

    var display = function (model) {
        // debugger
      return (model.attributes.fname + " " + model.attributes.mname + " " + model.attributes.lname).replace(/  /, " ")
    }

    var extra = {creator_id: parseInt(Manifold.CURRENT_USER.id)};

    var identifier = function (model) {
      return model.attributes.fname + " " + model.attributes.mname + " " + model.attributes.lname + " " + model.attributes.email;
    }


    this.$el.stager(this.members, this, {
      show: true,
      placeholder: "assignee",
      filterCondition: filterCondition,
      identifier: identifier,
      display: display,
      extra: extra,
      type: Manifold.Models.Assignment,
      collectionName: "assignees",
      modelType: Manifold.Models.User,
      primaryKey: "task_id",
      foreignKey: "asignee_id"
      // submit: submit
    });
    return view;
  },

  submit: function (event) {
    var success = function () {
      for (var i = 0; i < assignee_ids.length; i++) {
        // debugger
      var assignee_id = assignee_ids[i].id;
      if (assignee_id) {
        var task_id = this.model.id;
        var assignment = new Manifold.Models.Assignment({
          task_id: task_id,
          asignee_id: assignee_id
          // oops
        });
        assignment.save();
        var successUser = function (model) {
          count = count + 1;
          this.attrs.assignees.push(model.attributes);
          if (count === numAssignees) {
            this.model.attributes = this.attrs;
            this.collection.add(this.model);
            this.render();
          }
        }.bind(this);

        var user = new Manifold.Models.User({id: assignee_id})

        user.fetch({
          wait: true,
          success: successUser
        });
      }
    }
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

    // also save membership model between creator and project
    // this.task = new Manifold.Models.Task(attrs);
    // attrs.project_id = this.model.attributes.project_id;
    // delete this.model.attributes.id;
    delete this.model.attributes.id
    this.model.save(attrs, {
      wait: true,
      success: success,
      error: errors.bind(this)
    });
  }

});

// var submit = function (el, last) {
//   var last = last
//   var assignee_id = el.id
//   if (assignee_id) {
//     var task_id = view.model.id;
//     var assignment = new Manifold.Models.Assignment({
//       task_id: task_id,
//       asignee_id: assignee_id
//       // oops
//     });
//     assignment.save();
//     var successUser = function (model) {
//       view.attrs.assignees.push(model.attributes);
//       if (last) {
//         view.model.attributes = view.attrs;
//         view.collection.add(view.model);
//         // view.render();
//       }
//     };
//
//     var successuserLast = function (model) {
//       view.model.attributes = view.attrs;
//       view.collection.add(view.model);
//       view.render();
//     }
//
//     var user = new Manifold.Models.User({id: assignee_id})
//     user.fetch({
//       wait: true,
//       success: successUser
//     });
//   }
// }
