Manifold.Views.ProjectIndexItemInWorkspace = Backbone.CompositeView.extend(
  // omitted
  {
  // _.extend({}, Manifold.Mixins.Orderable, {
  //   orderOptions: {
  //     modelElement: '.task-display',
  //     modelName: 'task',
  //     subviewContainer: '.project-tasks'
  //   },

  className: "project-heading",

    events: {
      'sortreceive': 'receiveTask',
      'sortremove': 'removeTask',
      'sortstop': 'saveTasks'
    },

    template: JST['projects/show_in_workspace'],

    // className: 'project-display',

    initialize: function () {
      this.collection = this.model.tasks();
      // this.listenTo(this.model, 'sync', this.render);
      this.listenTo(this.collection, 'add', this.addTask);
      this.listenTo(this.collection, 'add resize', this.setHeight);
    },

    // addTask: function (task) {
    //   var view = new Manifold.Views.TaskShow({
    //     model: task
    //   });
    //   this.addSubview('.project-tasks', view);
    // },

    // receiveTask: function(event, ui) {
    //   var $taskDisplay = ui.item,
    //       taskId = $taskDisplay.data('task-id'),
    //       newOrd = $taskDisplay.index();
    //   var taskClone = new Manifold.Models.Task({
    //     id: taskId,
    //     list_id: this.model.id,
    //     ord: newOrd
    //   });
    //   taskClone.save();
    //   this.collection.add(taskClone, {silent: true});
    //   this.saveTasks(event);
    // },

    // removeTask: function(event, ui) {
    //   var $taskDisplay = ui.item,
    //       taskId = $taskDisplay.data('task-id'),
    //       tasks = this.model.tasks(),
    //       taskToRemove = tasks.get(taskId),
    //       taskSubviews = this.subviews('.project-tasks');
    //   tasks.remove(taskToRemove);
    //
    //   var subviewToRemove = _.findWhere(taskSubviews, {model: taskToRemove});
    //   taskSubviews.splice(taskSubviews.indexOf(subviewToRemove), 1);
    // },

    render: function () {
      var content = this.template({
        project: this.model
      });
      this.$el.html(content);

      this.$el.data("project-id", this.model.id);
      // this.$el.data('project-id', this.model.id);
      //
      // this.renderTasks();
      // this.renderFooter();
      // setTimeout(this.setHeight.bind(this));
      // // this.setHeight();
      return this;
    },

    // renderTasks: function () {
    //   this.model.tasks().each(this.addTask.bind(this));
    //   this.$('.project-tasks').sortable({connectWith: '.project-tasks'});
    // },
    //
    // renderFooter: function () {
    //   var formView = new Manifold.Views.TaskForm({
    //     collection: this.model.tasks()
    //   });
    //   this.addSubview('.project-footer', formView);
    // },
    //
    // saveTasks: function(event) {
    //   event.stopPropagation(); // Prevent project sorting listener from firing.
    //   this.saveOrds();
    // },
    //
    // setHeight: function() {
    //   this.$('.project-tasks').css('');
    //   var listsHeight = this.$el.parent().height();
    //   var listHeight = this.$el.height();
    //   var headerHeight = this.$('.project-heading').height();
    //   var footerHeight = this.$('.project-footer').height();
    //   var tasksHeight = this.$('.project-tasks').height();
    //
    //   this.$('.project-tasks').css('max-height',
    //         listsHeight - headerHeight - footerHeight - 11);
    // }
  });
// )
