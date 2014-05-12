'use strict';
define([
	'datas',
	'signals',
	'app/router',
	'app/baseView',
	'app/mainView',
	'app/sideNavView',
	'app/homeView',
	'app/listView',
	'app/workView',
	'app/topView',
	'jquery',
	'lib/swipe',
	'analytics'
], function(datas, signals, router, baseView, mainView, sideNavView, homeView, listView, workView, topView, $, analytics) {

	var App = {

		events: {
			works_ready: new signals.Signal()
		},

		init: function() {

			this.el = document.getElementById('container');

			router.init();
			router.events.statechange.add(this.onChangeState.bind(this));

			this.worksArray = [];
			this.worksObject = {};
			datas.works.forEach(function(work) {
				if(!work.inactive) {
					this.worksArray.push(work);
					this.worksObject[work.id] = work;
				}
			}, this);

			this.initMainView();
			
			this.initTopView();

			this.initSideNav();

			this.initHomeView();

			this.initWorks();

			var current_work = this.getSectionFromId(global.page);

			if(current_work && current_work != this.home_view) {
				this.events.works_ready.add(function() {
					this.main_view.goTo(global.page, true);
				}, this);
			}

			addEvent(window, 'resize', this.onResize.bind(this));
			
		},

		initMainView: function() {
			this.main_view = Object.create(mainView);
			this.main_view.init({
				tpl: 'main',
				el: '#content',
				parent: this.el
			});
			this.main_view.start();

			this.main_view.events.change_section.add(function(page, index) {
				log('change_section');
				this.onGo(page);
			}, this);

			this.main_view.events.go.add(this.onGo.bind(this));
		},

		initTopView: function() {
			this.top_view = Object.create(topView);
			this.top_view.init({
				tpl: 'top',
				tpl_options: {
					title: datas.me.title,
					name: datas.me.name,
					to_home: datas.home.id
				},
				parent: document.getElementsByTagName('body')[0],
				el: 'a'
			});
			this.top_view.events.goto.add(this.onViewGoTo, this);
			this.top_view.start();
		},

		initSideNav: function() {
			this.side_nav = Object.create(sideNavView);
			var navs = [
					{
						id: 'home',
						name: 'Home'
					}
				];
			this.side_nav.init({
				tpl: 'nav',
				tpl_options: {works: this.worksArray, navs: navs},
				el: 'nav',
				parent: document.getElementsByTagName('body')[0],
				pages: navs.concat(this.worksArray)

			});
			// this.side_nav.events.click.add(function(work) {s
			// 	this.main_view.goTo(work.id);
			// }, this);
			this.side_nav.events.goto.add(this.onViewGoTo, this);
			this.side_nav.start();
		},

		initHomeView: function() {
			this.home_view = Object.create(homeView);
			this.home_view.init({
				tpl: 'home',
				tpl_options: {
					title: datas.me.title,
					name: datas.me.name,
					email: datas.me.email,
					to_portfolio: this.worksArray[0].id
				},
				el: '#home',
				parent: this.main_view.el,
				data: datas.home
			});
			this.home_view.events.at_bound.add(this.atBound, this);
			this.home_view.events.goto.add(this.onViewGoTo, this);
			this.home_view.start();
			this.main_view.addSection(this.home_view);
		},

		initWorks: function() {
			this.works_views = [];

			this.worksArray.forEach(this.createWork, this);

			// If all templates are displayed at the same time, it crushes on iphone 4s
			var cb = function(index) {
					if(index >= this.worksArray.length) {
						this.events.works_ready.dispatch();
						return;
					}
					this.works_views[index].start();
					setTimeout(cb.bind(this, index+1), 1);
				}.bind(this);
			cb(0);
		},

		createWork: function(work, index) {
			var view = Object.create(workView);

			view.init({
				tpl: 'work',
				tpl_options: {work: work, entities: datas.entities},
				el: 'section',
				parent: this.main_view.el,
				data: work,
				index: index
			});

			view.events.image_show.add(function(id) {
				// log('App:image_show');
				this.main_view.goTo(id);
			}, this);

			view.events.image_shown.add(function(id) {
				// log('App:image_show');
				this.main_view.disableScroll();
			}, this);

			view.events.image_hidden.add(function(id) {
				// log('App:image_hidden '+id);
				this.main_view.enableScroll();
			}, this);

			view.events.at_bound.add(this.atBound, this);

			// view.start();
			this.works_views.push(view);
			this.main_view.addSection(view);
		},

		loadWork: function(work) {
			log('loadWork '+work.getId());
			var index = work.getIndex(),
				prev = null;
			for(var i = index; i > 0; i--) {
				if(this.works_views[i].isTempled()) {
					prev = this.works_views[i];
				}
			}
			if(prev)
				this.startWork(work, 'after', prev.el);
			else
				this.startWork(work);
			if(this.works_views[index-1] && !this.works_views[index-1].isTempled())
				this.startWork(this.works_views[index-1], 'before', work.el);
			if(this.works_views[index+1] && !this.works_views[index+1].isTempled())
				this.startWork(this.works_views[index+1], 'after', work.el);
		},

		startWork: function(work, where, relative) {
			if(work.isTempled()) return;
			work.start(where, relative);
			work.events.goto.add(this.onViewGoTo, this);
			this.main_view.update();
		},

		onViewGoTo: function(href) {
			log('onViewGoTo '+href);
			var section = this.getSectionFromId(href);
			if(section != this.home_view) {
				this.loadWork(section);
			}
			this.main_view.goTo(href);
		},

		onGo: function(page, noPushState) {
			// log('App:onGo '+page.options.data.id);
			// log(page.options.data.id);
			if(page.options.data.id != "home")
				this.top_view.show();
			else
				this.top_view.hide();

			var index = this.main_view.getPageIndex(page);
			this.side_nav.select(index);

			var url = "/" + page.options.data.id,
				title = page.options.data.name,
				data = {
					page: page.options.data.id,
					index: index
				};
			
			if(!noPushState)
				router.pushState(url, title, data);
		},

		setState: function() {

		},

		onChangeState: function(state) {
			log('App:onChangeState');
			this.main_view.goTo(state.index, false, true);
		},

		onResize: function() {
			this.main_view.refresh();
		},

		atBound: function(id, delta) {
			var index = this.main_view.getPageIndexFromId(id),
				next = delta < 0 ? index + 1 : index - 1;
			this.main_view.goTo(next);
		},

		getSectionFromId: function(id) {
			if(id == datas.home.id)
				return this.home_view;
			for(var i = 0; i < this.works_views.length; i++) {
				var work = this.works_views[i];
				if(work.getId() == id)
					return work;
			}
			return null;
		},

		getSectionFromIndex: function(index) {
			return this.workArray()
		}
	};

	return App;
});