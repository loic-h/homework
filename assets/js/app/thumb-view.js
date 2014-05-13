'use strict';
define([
	'backbone',
	'app/router',
	'ist!templates/thumb'
], function(Backbone, router, article_template) {

	var ThumbView = Backbone.View.extend({

		tagName: "li",

		events: {
			"click": "onClick"
		},

		options: {},

		initialize: function(options) {
			this.options = options;
			this.$el.append(article_template.render(this.model.attributes));
		},

		onClick: function() {
			var id = this.model.get('id');
			if(typeof id !== "string") {
				id = id.toString();
			}
			router.navigate(id);
		}
	});

	return ThumbView;
});