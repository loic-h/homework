'use strict';
define([
	'backbone',
	'app/router',
	'ist!templates/article'
], function(Backbone, router, article_template) {

	var ThumbView = Backbone.View.extend({

		tagName: "div",
		className: "article",

		events: {
			"click .back": "onBack"
		},

		options: {},

		initialize: function(options) {
			this.options = options;
			log(this.model);
			this.$el.append(article_template.render(this.model.attributes));
		},

		onBack: function(event) {
			event.preventDefault();
			router.navigate("", { trigger: true });
		}
	});

	return ThumbView;
});