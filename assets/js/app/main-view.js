'use strict';
define([
	'backbone',
	'ist!templates/main'
], function(Backbone, main_tpl) {

	var MainView = Backbone.View.extend({

		el: '#container',
		content: null,
		template: main_tpl.render(),

		initialize: function() {
			this.el.appendChild(this.template);

			this.content = this.$el.find('#content');
		}
	});

	return MainView;
});