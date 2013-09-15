require.config({

	baseUrl: 'js',

	shim:{
		'underscore' : {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	},
	paths: {
		'jquery' : 'libs/jquery.min',
		'underscore' : 'libs/underscore',
		'backbone' : 'libs/backbone',
		'tpl' : 'libs/tpl'
	}

});

require(["app"], function(App){
	App.initialize();
});