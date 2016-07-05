Tags = new Mongo.Collection('tags');

Tags.helpers({

});

Tags.before.insert(function (userId, doc) {
  doc.createdAt = moment().format();
  
});

if (Meteor.isServer) {
    Meteor.startup(function () {
        if(Tags.find().count() === 0){
            var regions = [
				{
            		value: "Africa",
					short_label: "Africa"
            	},{
            		value: "Asia",
					short_label: "Asia"
            	},{
            		value: "Europe and Eurasia",
					short_label: "E&E"
            	},{
            		value: "Latin America and the Caribbean",
					short_label: "LAC"
            	},{
            		value: "Middle East",
					short_label: "Middle East"
            	},{
            		value: "Worldwide",
					short_label: "Worldwide"
            	}
			];
			for(var i = 0; i < regions.length; i++){
				Tags.insert({
					type: "region",
					value: regions[i].value,
					short_label: regions[i].short_label
				});
			}
        }
    });
}