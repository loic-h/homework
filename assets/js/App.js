'use strict';
define([
	'json!data.js',
	'app/router',
	'app/article-collection',
	'app/article-model',
	'app/main-view',
	'app/list-view',
	'app/article-view'
], function(data, router, ArticleCollection, ArticleModel, MainView, ListView, ArticleView) {
	
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
			log('App::goList');
			var view = new ListView({
				articles: this.articles
			});

			this.fillContent(view);
		},

		goArticle: function(id) {
			log("App::goArticle");

			if(typeof id !== "number")
				id = parseInt(id);
			log(id);
			var article = this.articles.findWhere({id: id});
			log(article);
			var view = new ArticleView({
				model: article
			});

			this.fillContent(view);
		},

		fillContent: function(view) {
			this.current_view = view;
			this.main_view.content.html(view.el);
		}

	};

	return App;
});