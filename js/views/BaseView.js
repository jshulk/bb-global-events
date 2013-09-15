define(["backbone"], function(Backbone){
	
	var baseView = Backbone.View.extend({}),
	 	vents = _.extend({}, Backbone.Events);
	

	_.extend(baseView.prototype, {

			eventBus : vents,
			
			debug: function(msg){
				console.log(msg);
			}
			
	});

	return baseView;
});