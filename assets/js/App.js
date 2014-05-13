'use strict';
define([
	'json!data.js',
	'app/article-collection',
	'app/article-model',
	'app/main-view',
	'app/list-view',
	'app/router'
], function(data, ArticleCollection, ArticleModel, MainView, ListView, router) {
	
	var App = {

		articles: null,
		main_view: null,

		init: function() {

			this.fillArticles();

			this.main_view = new MainView({
				articles: this.articles
			});

			router.on('go-list', this.goList.bind(this));
			router.on('go-article', this.goArticle.bind(this));

			Backbone.history.start({pushState: true});
		},

		fillArticles: function() {

			this.articles = new ArticleCollection(data);

		},

		goList: function() {
log('goList');
			this.current_view = new ListView({
				articles: this.articles
			});

			this.main_view.content.append(this.current_view.el);
		},

		goArticle: function(id) {
			log(id);
		}

	};

	return App;
});