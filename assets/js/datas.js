define({
	
	me: {
		name: "Loïc Hamet",
		title: "Front-end Development",
		email: "loic.hamet@gmail.com"
	},

	home: {
		id: 'home',
		name: "Home"
	},

	list: {
		id: 'portfolio',
		name: "Portfolio"
	},

	works: [
		{
			id: "viking",
			name: "Viking",
			url: "http://ecriresurlapelouse.com",
			when: "2014",
			for: "Marcel",
			who: "Viking is a mow product company. They released iMow, an automatic mowing machine.",
			what: "Front-end development done on a custom framework based on Backbone. Google Maps API development.",
			tags: ["HTML", "CSS", "Javascript", "jQuery", "Backbone", "Google Maps API v3"],
			images_dir: "viking",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "paul-lepreux",
			name: "Paul Lepreux",
			url: "http://www.paullepreux.com",
			when: "2013",
			for: "deValence",
			design: "deValence",
			who: "Paul Lepreux is a french photographer based in Paris and Specialized in luxury.",
			what: "Technical counsel and development of the whole application. The datas are managed via a homemade back-office.",
			tags: ["HTML", "CSS", "Javascript", "require.js", "PHP", "MySQL", "Back-office"],
			images_dir: "paul-lepreux",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "tunnel",
			name: "Tunnel",
			url: "http://canalplus.fr/truthterror",
			when: "2013",
			for: "Komilfo",
			who: "Tunnel is a TV show produced by Canal +.",
			what: "Technical counsel and development of the whole application.",
			tags: ["HTML", "CSS", "Javascript", "jQuery", "require.js"],
			images_dir: "tunnel",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
		},
		{
			id: "cartier",
			name: "Cartier Rouge",
			url: "http://rouge.cartier.com/",
			when: "2013",
			for: "Marcel",
			who: "Cartier Rouge is an online magazine promoting lines of Jewelry from Cartier.",
			what: "Declination of a few issues. Front-end development done on a custom framework based on Backbone.",
			tags: ["HTML", "CSS", "Javascript", "jQuery", "Backbone"],
			images_dir: "cartier",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "malcolm",
			name: "Malcolm",
			url: "http://huile2fer.com",
			when: "2011",
			design: "Loïc Hamet",
			who: "Malcolm is a french artist based in Toulouse, France.",
			what: "It is a very simple design website which highlight the pictures and include a blog-like news system. I developed the entire website. The datas are managed via a homemade back-office.",
			tags: ["HTML", "CSS", "Mootools", "PHP", "MySQL", "Back-office"],
			images_dir: "malcolm",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "hessmann-isnard",
			name: "Hessmann - Isnard",
			url: "http://hessmann-isnard.loic-h.com",
			when: "2011",
			design: "Loïc Hamet",
			who: "Marie-Véronique Hessmann-Isnard and Nicolas Isnard are french artists. Although a couple in the private life, they work separetly and wanted nonetheless communicate through the same platform.",
			what: "The idea was to separate the website in two parts, one for each person, from which you could rapidly navigate to the other. I developed the entire website. The datas are managed via a homemade back-office.",
			tags: ["HTML", "CSS", "Mootools", "PHP", "MySQL", "Back-office"],
			images_dir: "hessmann-isnard",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "ouigo",
			name: "Ouigo",
			url: "http://www.ouigo.com/",
			when: "2012",
			for: "Pixelis",
			who: "OuiGo is a low cost branch of the SNCF, the french railway company.",
			what: "Integration and Drupal modules development.",
			tags: ["HTML", "CSS", "jQuery", "Drupal", "PHP"],
			images_dir: "ouigo",
			images: ["01.jpg", "02.jpg", "03.jpg"],
		},
		{
			id: "cocacola-da",
			name: "CocaCola DA",
			url: "http://www.ouigo.com/",
			when: "2011",
			for: "Pixelis",
			who: "Coca-Cola DA is a branch of the Coca-Cola Company who sell vending machines.",
			what: "Integration and Drupal modules development.",
			tags: ["HTML", "CSS", "jQuery", "Drupal", "PHP"],
			images_dir: "cocacola-da",
			images: ["01.jpg", "02.jpg"],
		},
		{
			id: "back-office",
			name: "Back Office",
			when: "2011",
			design: "Loïc Hamet",
			what: "A homemade back-office for my clients. It is developed with PHP and MySQL. The structure is similar to a MVC and is designed for easy customization. It contains modules like multiple files download.",
			tags: ["HTML", "CSS", "Javascript", "jQuery", "Actionscript 3", "PHP", "MySQL"],
			images_dir: "back-office",
			images: ["01.jpg", "02.jpg", "03.jpg"],
		},
		{
			id: "aigle-des-neiges",
			name: "L'Aigle des Neiges",
			when: 2009,
			for: "EWA",
			design: "Julien Milliès",
			who: "L'Aigle des Neiges in Val d'Isère, France, is one of Temmos chain ski resort hotel.",
			what: "Server-side development and Javascript animations.",
			tags: ["PHP", "Mootools"],
			images_dir: "aigle-des-neiges",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "le-golf",
			name: "Le Golf",
			when: 2009,
			for: "EWA",
			design: "Julien Milliès",
			who: "Le Golf in Les Arcs 1800, France, is one of Temmos chain ski resort hotel.",
			what: "Server-side development and Javascript animations.",
			tags: ["PHP", "Mootools"],
			images_dir: "le-golf",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
		},
		{
			id: "les-bruyeres",
			name: "Hôtel Les Bruyères",
			when: 2009,
			for: "EWA",
			design: "Julien Milliès",
			who: "Les Bruyères in Les Ménuires, France, is one of Temmos chain ski resort hotel.",
			what: "Server-side development and Javascript animations.",
			tags: ["PHP", "Mootools"],
			images_dir: "les-bruyeres",
			images: ["01.jpg", "02.jpg", "03.jpg"],
		},
		{
			id: "marche-gare",
			name: "Marché Gare",
			url: "http://www.marchegare.fr",
			when: "2010",
			design: "Nathalie Lothier",
			who: "Le Marché Gare is a concert Hall in Lyon, France, who after the recast of its visual identity needed a new website.",
			what: "Integration and server-side developement. Due to the low budget, no back-office has been developed. The datas are managed by PHP arrays. Development of a Flash mp3 player.",
			tags: ["HTML", "CSS", "Mootools", "PHP", "Actionscript 3"],
			images_dir: "marche-gare",
			images: ["01.jpg", "02.jpg", "03.jpg"],
		},
		{
			id: "aees",
			name: "AEES",
			url: "http://www.aees.fr",
			when: "2009",
			for: "EWA",
			design: "Julien Milliès",
			who: "AEES is a french company specialized in security alimentation.",
			what: "Integration and plugin to a custom back-office based on Codeigniter. Development of the retail part and the paiement module.",
			tags: ["HTML", "CSS", "PHP", "Codeigniter", "Mootools"],
			images_dir: "aees",
			images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
			maxWidth: 1280
		},

	],

	entities: {
		"EWA": "http://www.enyware.com",
		"deValence": "http://deValence.net",
		"Loïc Hamet": "http://loic-h.com",
		"Nathalie Lothier": "http://nathalie.lothier.free.fr",
		"Pixelis": "http://www.pixelis.fr",
		"Julien Milliès": "http://www.julienmillies.com",
		"Komilfo": "http://www.komilfo-conseil.com",
		"Marcel": "http://www.marcelww.com"
	}

});