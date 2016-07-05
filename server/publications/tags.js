Meteor.publishComposite("tags", function() {
  return {
    find: function() {
      return Tags.find({});
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