'use strict';
define([
	'backbone',
	'ist!templates/main'
], function(Backbone, main_tpl) {

	var MainView = Backbone.View.extend({

		el: '#container',
		content: null,

		initialize: function() {
			this.el.appendChild(main_tpl.render());

			this.content = this.$el.find('#content');
		}
	});

	return MainView;
});