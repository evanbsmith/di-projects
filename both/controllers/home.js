HomeController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({})
  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Home');
  }
});

HomeController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});