ProjectsController = AppController.extend({
  waitOn: function() {
	return [this.subscribe('tags')];
  },
  subscriptions: function(){
	  this.subscribe('projects',Session.get('filters'));
  },
  data: {
    projects: Projects.find({})
  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Projects');
  }
});

ProjectsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});