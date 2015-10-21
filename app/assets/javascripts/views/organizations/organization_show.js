Manifold.Views.OrganizationShow = Backbone.CompositeView.extend({
    template: JST['organizations/show'],

    events: {
      "click .create-project": "renderProjectModal",
      "click .project-heading": "renderProject",
      "click .add-user-org": "renderUserSearchForm",
      "click .search-class": "toggleSearchClass",
      "input input[type=text]": "refineResults",
    },

    refineResults: function (event) {
        $('#content-sidebar').empty();
      if ($('.input-group-addon').text() == "project") {
        this.projectsArr = this.collection.filter($(event.target).val());
        if (this.projectsArr.length === 0) {
          this.projectsArr = this.collection.models;
        }
        this.renderProjects();
      } else {
        var users = new Manifold.Collections.Users();
        var fragment = $('.main-search').val();

        users.fetch({
          data: {search: fragment},
          success: function (collection) {
            this.renderUsers(collection);
          }.bind(this)
        });
    }
  },

    toggleSearchClass: function () {
      $('#content-sidebar').empty();
      if ($(".search-class").text() === "user") {
        $(".search-class").text("project");
        $('#projects-index').text("Projects");
        this.renderProjects();
      } else {
        $(".search-class").text("user");
        $('#projects-index').text("Users");
      };
    },

    renderProject: function (event) {
      $('.project-heading').removeClass('active');
      $(event.target).addClass('active');
      $('#projectt').empty();
      event.preventDefault();
      var $target = $(event.target);
      var project_id = $target.data().projectId;
      var project = this.collection.findWhere({id: project_id});
      var projectView = new Manifold.Views.ProjectShow({
        model: project,
        workspace: this.model,
        collection: this.workspaces,
        users: this.users,
        in_org: true
      });
      this.addSubview("#projectt", projectView)
    },

    initialize: function (options) {
      $('body').css('background-color', 'rgb(240,240,240) ')
      // this.collection = this.model.projects();
      this.collection = options.collection;
      this.projectsArr = this.collection.models.slice(0);
      this.workspaces = options.workspaces;

      // this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.collection, 'add', this.addProject);
      this.listenTo(this.collection, 'remove', this.render);
      this.users = options.users;
    },

    navToProject: function (event) {
      event.preventDefault();
      var $target = $(event.target);
      var project_id = $target.data().projectId;
      var url = "#/projects/" + project_id;
      Backbone.history.navigate(url, {trigger: true});
    },

    render: function () {
      this.renderProjects();
      var content = this.template({
        organization: this.model
      });
      this.$el.html(content);
      this.attachSubviews();

      return this;
    },

    renderUserSearchForm: function () {
      modal = new Manifold.Views.UserToOrganizationForm({
        model: this.model,
        users: this.users
      });
      $('body').append(modal.$el);
      modal.render();
    },

    addProject: function (project) {
      var view = new Manifold.Views.ProjectIndexItem({
        model: project,
        in_org: true
      });
      this.addSubview('#content-sidebar', view);
    },

    addUser: function (user) {
      var view = new Manifold.Views.UserSearchResult({
        //
        model: user
      });
      this.addSubview('#content-sidebar', view);
    },

    renderProjects: function () {
      this.projectsArr.forEach(this.addProject.bind(this));
    },

    renderUsers: function (users) {
      users.forEach(this.addUser.bind(this));
    },

    renderProjectModal: function () {
      console.log("modal");
      var project = new Manifold.Models.Project({
        organization_id: this.model.id,
        owner_id: parseInt(Manifold.CURRENT_USER.id)
      });
      var modal = new Manifold.Views.ProjectFormModal({
        collection: this.model.projects(),
        model: project,
        organization: this.model
        // model: this.model
      });
      $('body').append(modal.$el);
      modal.render();
    }
});
