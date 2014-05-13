'use strict';
define([
	'backbone',
	'masonry',
	'isotope',
	'app/thumb-view'
], function(Backbone, Masonry, Isotope, ThumbView) {

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
			setTimeout(function() { 
				preloadImages(this.el, function() {
					var msnry = new Masonry(this.el);
				}.bind(this));
			}.bind(this), 0)
		},

		render: function() {

		}
	});

	return ListView;
});