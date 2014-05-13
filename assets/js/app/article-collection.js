'use strict';
define([
	'backbone',
	'app/article-model'
], function(Backbone, ArticleModel) {

	var ArticleCollection = Backbone.Collection.extend({
		model: ArticleModel
	});

	return ArticleCollection;

})