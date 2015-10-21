Manifold.Views.WorkspaceModal = Backbone.CompositeView.extend({
  events: {
    'click input[type=submit]': 'removeModal',
    'click .m-background': 'removeModal'
  },

  attachResults: function (event) {
    $('#results').empty();
    event.preventDefault();
    var fragment = $(event.target).serializeJSON().fragment;

    var resultsArray = this.collection.filter(fragment);
    modal = new Manifold.Views.SelectProjectForm({
      model: this.model,
      resultsArray: resultsArray
    });
    $('#results').append(modal.render().$el);
  },

  removeModal: function () {
    this.remove();
  },

  template: JST['workspaces/modal'],

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
    var view = this;

    var display = function (model) {
      return model.attributes.title;
    };

    var filterCondition = function (model, regex) {
       return this.display(model).toLowerCase().match(regex);
    };



    // var submit = function (el, last) {
    //   var last = last
    //   var project_id = el.id
    //   if (project_id) {
    //     var workspace_id = view.model.id;
    //     var assignment = new Manifold.Models.WorkspaceProjectMembership({
    //       project_id: project_id,
    //       workspace_id: workspace_id
    //     });
    //     assignment.save();
    //   };
    // }.bind(this);

    var projects = new Manifold.Collections.Projects();

    projects.fetch({
      success: function (collection) {
        this.$el.stager(collection, this, {
          show: true,
          unique: true,
          display: display,
          identifier: display,
          placeholder: "project",
          filterCondition: filterCondition,
          extra: {},
          type: Manifold.Models.WorkspaceProjectMembership,
          collectionName: "projects",
          modelType: Manifold.Models.User,
          primaryKey: "workspace_id",
          foreignKey: "project_id"
        });
      }.bind(this)
    })
    // this.$el.stager(this.members, this, {
    //   autoFilter: autoFilter,
    //   autoDisplay: autoDisplay,
    //   extra: {},
    //   submit: submit
    // });
    return view;
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
    this.remove();
  }
});
