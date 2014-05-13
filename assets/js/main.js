require.config({
	paths: {
		"domReady": "lib/require/plugins/domReady",
		"text": "lib/require/plugins/text",
		"json": "lib/require/plugins/json",
		"async": "lib/require/plugins/async",
		"propertyParser" : 'lib/require/plugins/propertyParser',
		"jquery": "lib/jquery/jquery-2.0.3.min",
		"root": "../..",
		"ist": "lib/ist",
		// "backbone": "lib/backbone-min",
		"backbone": "lib/backbone",
		"underscore": "lib/underscore-min",
		"masonry": "lib/masonry.pkgd",
		"isotope": "lib/isotope.pkgd.min"
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
	'App'
], function (domReady, App) {
	domReady(function() {
		
		App.init();

	});
});