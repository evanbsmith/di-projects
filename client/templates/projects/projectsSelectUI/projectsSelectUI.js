Template.projectsSelectUI.helpers({
	regions: function(){
		return Tags.find({type:"region"});
	},
	regionChecked: function(){
		var checkedRegions = Session.get('filters').regions;
		return _.contains(checkedRegions,this.value) ? 'checked' : '';
	}
});

Template.projectsSelectUI.rendered = function(){

};

Template.projectsSelectUI.events({
	'change input.regionInput' : function(e){
		//console.log('changed!');
		var currentFilters = Session.get('filters');
		var regions = currentFilters.regions;
		// console.log('regions pre');
// 		console.log(currentFilters.regions);
// 		console.log(e);
		if(e.target.checked){
			console.log(e.target.value + " checked!");
			currentFilters.regions.push(e.target.value);
		}
		else {
			console.log(e.target.value + " unchecked!");
			currentFilters.regions = _.without(currentFilters.regions,e.target.value);
		}
		// console.log('regions post');
// 		console.log(currentFilters.regions);
		Session.set('filters',currentFilters);
	},
	'change input.viewInput' : function(e){
		var currentView = Session.get('projectsView');
		var newView = e.currentTarget.id;
		console.log('viewInput changed');
		console.log(e.currentTarget.id);
		if (currentView !== newView){
			Session.set('projectsView', newView);
		}
		
		// if(e.target.checked){
// 			console.log(e.target.value + " checked!");
// 			currentFilters.regions.push(e.target.value);
// 		}
// 		else {
// 			console.log(e.target.value + " unchecked!");
// 			currentFilters.regions = _.without(currentFilters.regions,e.target.value);
// 		}
		// console.log('regions post');
// 		console.log(currentFilters.regions);
		//Session.set('filters',currentFilters);
	}
});