'use strict';
define([
	'jquery',
	'backbone',
	'masonry',
	'isotope',
	'app/thumb-view',
	'infinitescroll',
], function($, Backbone, Masonry, Isotope, ThumbView) {

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
					this.onImagesReady();
				}.bind(this));
			}.bind(this), 0)
		},

		onImagesReady: function() {
			var msnry = new Masonry(this.el);
		}
	});

	return ListView;
});