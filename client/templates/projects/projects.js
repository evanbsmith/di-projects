Template.projects.helpers({
	regions: function(){
		return Tags.find({type:"region"});
	},
	regionChecked: function(){
		var checkedRegions = Session.get('filters').regions;
		return _.contains(checkedRegions,this.value) ? 'checked' : '';
	},
	getProjectsView: function(){
		console.log('getProjectsView called');
		return Session.get('projectsView');
	}
});

Template.projects.rendered = function(){
	console.log('projects rendered');
	console.log(this);
};

Template.projects.events({

});