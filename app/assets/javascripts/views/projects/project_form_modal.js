Manifold.Views.ProjectFormModal = Backbone.View.extend({
  events: {
    'click input[type=submit]': 'removeModal',
    'click .m-background': 'removeModal'
  },

  removeModal: function () {
    this.remove();
  },

  template: JST['projects/form_modal'],

  initialize: function(options) {
    // debugger
    this.organization = options.organization;
    // this.model = options.model;
    // this.collection = options.collection;
    // this.parentDiv = options.parentDiv;
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      project: this.model
    });
    this.$el.html(renderedContent);
    var filterCondition =  function (model, regex) {
      return model.attributes.fname.toLowerCase().match(regex) || model.attributes.mname.toLowerCase().match(regex) || model.attributes.lname.toLowerCase().match(regex);
    }

    var display = function (model) {
      return (model.attributes.fname + " " + model.attributes.mname + " " + model.attributes.lname).replace(/  /, " ")
    }

    var extra = {};

    var identifier = function (model) {
      return model.attributes.fname + " " + model.attributes.mname + " " + model.attributes.lname + " " + model.attributes.email;
    }

    this.$el.stager(this.organization.members(), this, {
      show: true,
      display: display,
      identifier: identifier,
      placeholder: "member",
      filterCondition: filterCondition,
      extra: {},
      type: Manifold.Models.TeamMembership,
      collectionName: "team_members",
      modelType: Manifold.Models.User,
      primaryKey: "project_id",
      foreignKey: "member_id"
    });

    return this;
  },

  // submit: function (event) {
  //   event.preventDefault();
  //   // var id = this.parentDiv.id
  //   var attrs = $(event.target).serializeJSON();
  //   // attrs.organization_id = id
  //
  //   var success = function () {
  //     this.collection.add(this.model);
  //     this.model = new Manifold.Models.Project({
  //       organization_id: this.model.get("organization_id"),
  //       owner_id: this.model.get("owner_id")
  //     });
  //     this.render();
  //     // Backbone.history.navigate(
  //     //   '#/organizations/' + this.model.get("organization_id"),
  //     //   { trigger: true }
  //     // );
  //   }.bind(this);
  //
  //   function errors(model, response) {
  //     $('.errors').empty();
  //     response.responseJSON.forEach(function (el) {
  //       var $li = $('<li></li>');
  //       $li.text(el);
  //       $('.errors').append($li);
  //     }.bind(this));
  //   }
  //   // also save membership model between creator and project
  //   this.model.save(attrs, {
  //     wait: true,
  //     success: success,
  //     error: errors.bind(this)
  //   });
  //   this.remove();
  // }
});
