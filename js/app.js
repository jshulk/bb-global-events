define(["backbone", "views/MasterView"], function(Backbone, MasterView){
	
	return {
		
			initialize: function(){
				console.log('app initialized');
				var view = new MasterView();
			}
	}
});