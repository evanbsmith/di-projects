Template.projectsViewSummary.helpers({
	numProjects: function(){
		// console.log('numProjects called');
// 		console.log(this.projects.fetch());
		return this.projects.count();
	},
	numProjectsInRegion: function(){
		// console.log('numProjectsInRegion called');
// 		console.log(this);
// 		console.log(Projects.find({
// 			region: this.value
// 		}));
		return Projects.find({region: this.value}).count();
	},
	regions: function(){
		// console.log('regions called');
// 		console.log(Tags.find({type:'region'}).fetch());
		return Tags.find({type:'region'});
	},
	getRegionData: function(){
		
		// var currentProjectDocs = Projects.find({},{fields: {project_name:1, region: 1}}).fetch();
// 		console.log('getRegionData called: ' + currentProjectDocs.length);
// 		//console.log(currentProjectDocs);
// 		var currentRegionCounts = _.countBy(currentProjectDocs,function(doc){ return doc.region});
// 		console.log('currentRegionCounts');
// 		console.log(currentRegionCounts);
	}
});

Template.projectsViewSummary.rendered = function(){
	console.log('projectsViewSummary rendered');
	var instanceData = this.data.projects;
	console.log(instanceData);
	

	// Chart.js test code
	// var regionChart = Tracker.autorun(function(){
// 		var currentProjectDocs = Projects.find({},{fields: {project_name:1, region: 1}, sort: {region:1}}).fetch();
// 		var regionList = Tags.find({type: "region", value: {$in:Session.get('filters').regions}},{fields:{value:1,short_label:1},sort:{value:1}}).fetch();
// 		var currentRegionCounts = _.countBy(currentProjectDocs,function(doc){ return doc.region});
//
//
// 		console.log('regionList');
// 		console.log(regionList);
//
// 		console.log('currentRegionCounts');
// 		console.log(currentRegionCounts);
// 		var regionChartData = {
// 			labels: _.pluck(regionList,'short_label'),
// 			datasets: [
// 				{
// 		            label: "My First dataset",
// 		            fillColor: "rgba(151,187,205,0.5)",
// 		            strokeColor: "rgba(151,187,205,0.8)",
// 		            highlightFill: "rgba(151,187,205,0.75)",
// 		            highlightStroke: "rgba(151,187,205,1)",
// 		            data: _.values(currentRegionCounts)
// 				}
// 			]
// 		};
// 		console.log(regionChartData);
//
//
//
//
// 		var context = $("#regionChart").get(0).getContext("2d");
// 		var regionChart = new Chart(context).Bar(regionChartData, {
// 			responsive: true,
// 			maintainAspectRatio: false
// 		});
// 	});
	
	// nvd3 test code

	var chartSvg = d3.select('#nvd3BarChart').append('svg');
	
	
    var addedChart = nv.addGraph(function() {
        
		var thisChart = nv.models.discreteBarChart()
	        .x(function(d) { return d.label })
	        .y(function(d) { return d.value })
	        // .height(300)
			.staggerLabels(false)
	        //.staggerLabels(historicalBarChart[0].values.length > 8)
	        .tooltips(true)
	        .showValues(true)
	        .duration(250)
	        ;
	
		console.log('chart test before called');
		console.log(thisChart);	
		
		var nvd3BarChart = Tracker.autorun(function(){
		
			var currentProjectDocs = Projects.find({},{fields: {project_name:1, region: 1}, sort: {region:1}}).fetch();
			var regionList = Tags.find({type: "region", value: {$in:Session.get('filters').regions}},{fields:{value:1,short_label:1},sort:{value:1}}).fetch();
			var currentRegionCounts = _.countBy(currentProjectDocs,function(doc){ return doc.region});
		
			console.log('regionList');
			console.log(regionList);
		
			console.log('currentRegionCounts');
			console.log(currentRegionCounts);
		
			var regionLabels = _.pluck(regionList,"short_label");
			var regionValues = _.values(currentRegionCounts);
		
			console.log('labels');
			console.log(regionLabels);
			console.log('values');
			console.log(regionValues);
		
			var chartValues = _.map(regionLabels,function(label, index, list){
				return {
					"label" : label,
					"value" : regionValues[index]
				}
			});
		
			var data = [
				{
					key: "Region Totals",
					values: chartValues
				}
			];
		
			console.log('data');
			console.log(data);

			var selectTest = d3.select('#nvd3BarChart svg')
			.datum(data);
			
			console.log('selectTest');
			console.log(selectTest);
			
	        selectTest.call(thisChart);

				// console.log('added chart test');
	// 			console.log(addedChart);
		});

        nv.utils.windowResize(thisChart.update);
        
		// console.log('chart')
// 			console.log(chart);
		return thisChart;
		
    });
	
	console.log('nv.addGraph return test');
	console.log(addedChart);
	
	
	
	
	
	
	
	
}



// 1. 

