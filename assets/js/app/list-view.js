'use strict';
define([
	'backbone',
	'app/thumb-view'
], function(Backbone, ThumbView) {

	var ListView = Backbone.View.extend({

		tagName: "ul",
		id: "list",

		options: {},

		initialize: function(options) {
			this.options = options;

			this.options.articles.each(function(article_model){
				var article_view = new ThumbView({
					model: article_model
				});
				this.$el.append(article_view.el);
			}, this);
			
		}
	});

	return ListView;
});