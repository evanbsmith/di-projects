Template.appLayout.helpers({
	signedIn: function(){
		return Meteor.user() ? true : false;
	}
});

Template.appLayout.rendered = function(){

};