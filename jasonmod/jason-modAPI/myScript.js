(function () {
	var ready = function () {
	
	jasonmodAPI.addPlatform();
	
	};

	requireLoad([,'mods/jason-modAPI/master/source.js',
		], ready);
})();