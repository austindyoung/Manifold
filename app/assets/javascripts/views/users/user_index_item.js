Manifold.Views.UserIndexItem = Backbone.CompositeView.extend({
    className: "btn btn-default member-heading user",
    events: {

      'sortreceive': 'receiveTask',
      'sortremove': 'removeTask',
      'sortstop': 'saveTasks'
    },

    log: function () {
      console.log("out");
    },

    template: JST['users/index_item'],

    // className: 'project-display',

    initialize: function () {
      this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
      var content = this.template({
        member: this.model
      });
      this.$el.html(content);
      var url = this.model.escape("img_url");
      var rightArg = "url(" + url + ")";
      this.$el.css('background', rightArg);
      // this.$el.data("attrs", this.model.attributes);
      this.$el.val(this.model.attributes);
      // debugger
      // var $nameDiv = $("<div></div>");
      // var attrs = this.model.attributes;
      // $nameDiv.addClass("thumbnail-name");
      // var name = attrs.fname + " " + attrs.mname + " " + attrs.lname;
      // $nameDiv.text(name);
      // this.$el.append($nameDiv)
      return this;
    },
  });
// )
