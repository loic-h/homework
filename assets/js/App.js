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

			var pathes = window.location.pathname.split('/');
			pathes.shift();

			if(pathes[0] != "") {
				log('go to article');
			}
			else {
				log('go to list');
				this.showList();
			}
		},

		fillArticles: function() {

			this.articles = new ArticleCollection(data);

		},

		showList: function() {

			this.current_view = new ListView({
				articles: this.articles
			});

			this.main_view.content.append(this.current_view.el);
		}

	};

	return App;
});