Template.registerHelper('formatMonthYear', function(date){
	return moment(date).format("MMM YY");
});