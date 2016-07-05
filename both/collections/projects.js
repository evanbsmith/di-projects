Projects = new Mongo.Collection('projects');

Projects.helpers({

});

Projects.before.insert(function (userId, doc) {
  doc.createdAt = moment().format();
  doc.start_date = moment(doc.start_date).format();
  doc.end_date = moment(doc.end_date).format();
  console.log('projects before insert test');
  console.log(doc);
});

Projects.after.insert(function(userId, doc){
	doc.end_date_test = moment(doc.end_date);
});

if (Meteor.isServer) {
    Meteor.startup(function () {
        if(Projects.find().count() === 0){
            var projects = {};
			projects = JSON.parse(Assets.getText("di-projects.json"));
            for (project in projects) {
				var item = projects[project];
				var start_date_test = moment(item.start_date);
				var end_year = new Date(item.end_date).getFullYear();
				item.end_year = end_year;
				Projects.insert(item);
            }
        }
    });
}