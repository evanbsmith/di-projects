Meteor.publishComposite("projects", function(filters) {
  return {
    find: function() {
      return Projects.find(
		  {
			 // end_year: {$gt: filters.end_year},
			  region: {$in: filters.regions}
		  }
      );
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});