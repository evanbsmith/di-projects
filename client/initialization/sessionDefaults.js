Meteor.startup(function(){
	console.log('start your engines!');
	Session.setDefault('filters',{
		end_year: 2010,
		regions: []
	});
	Session.set('projectsView','projectsViewCards');
});