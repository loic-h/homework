"use strict";

define([
	"underscore",
	"backbone"
], function(_, Backbone) {
	
	var router = Backbone.Router.extend({
		routes: {
			"": "list",
			":article_id": "article"
		},

		initialize: function() {
			log('router initialize');
		},

		list: function() {
			log("router::list");
			this.trigger('go-list');
		},

		article: function(id) {
			log("router::article::"+id);
			this.trigger('go-article', id);
		}
	});

	_.extend(router, Backbone.Events);

	var r = new router();

	return r;
});