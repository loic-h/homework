require.config({
	paths: {
		"domReady": "lib/require/plugins/domReady",
		"text": "lib/require/lib/text",
		"json": "lib/require/plugins/json",
		"async": "lib/require/plugins/async",
		"propertyParser" : 'lib/require/plugins/propertyParser',
		"jquery": "lib/jquery/jquery-2.0.3.min",
		"root": "../..",
		"ist": "lib/ist",
		"backbone": "lib/backbone-min",
		"underscore": "lib/underscore-min"
	},
	deps: [
		"lib/utils"
	],
	shim: {
		
	},
	urlArgs: "bust=" + (new Date()).getTime()
});

require([
	'domReady',
	'backbone',
	// 'App'
], function (domReady, App) {
	domReady(function() {
		log(_);
		log(Backbone);
		log($);

		// App.init();

	});
});