var jasonmodAPI = {};
(function () {	
	
	/* Platforms */
	jasonmodAPI.addPlatform = function () {
		var icon = './mods/jason-modAPI/images/codeco.png';
		GDT.addPlatform(
			{
				id: 'Codeovision',
				name: 'Codecovision',
				company: 'Codeco',
				startAmount: 0.300,
				unitsSold: 0.600,
				licencePrize: 5000,
				published: '1/1/1',
				platformRetireDate: '2/6/2',
				developmentCosts: 16500,
				genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '12111996-00-00-001-JASONMODIF',
						date: '2/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Codeco annouced that due to slowing sales, the Codecovision will soo be pulled from the market.".localize().format(General.getETADescription('2/1/2', '3/1/3')),
								image: icon
							});
						}
					}
								
					
				]
							
				
			});
		var icon = './mods/jason-modAPI/images/dippin.png';	
		GDT.addPlatform(
						{
				id: 'Dippin',
				name: 'Dippin',
				company: 'Grapple',
				startAmount: 0.010,
				unitsSold: 0.040,
				licencePrize: 40000,
				published: '12/9/1',
				platformRetireDate: '13/6/1',
				developmentCosts: 10000,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '12768996-00-00-020-JASOFNMODIF',
						date: '12/9/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple, developer of serveral successful home computers, has announced the intend to release a console, the Dippin. The console featured a controller with a trackball.".localize().format(General.getETADescription('12/8/1', '12/8/2')),
								image: icon
							});
						}
					}
				]
			});
			
			
			
				var icon = './mods/jason-modAPI/images/arcade.png';	
		GDT.addPlatform(
						{
				id: 'Arcade',
				name: 'Arcade',
				company: 'Arcade',
				startAmount: 0.300,
				unitsSold: 0.600,
				marketKeyPoints: [{date: "1/1/1",amount: 0.300}, {date: "2/1/1",amount: 0.400}, {date: "6/1/1",amount: 0.600}],
				licencePrize: 5000,
				published: '1/1/1',
				platformRetireDate: '30/1/1',
				developmentCosts: 5000,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
			
			});
			
					var icon = './mods/jason-modAPI/images/64bb.png';	
		GDT.addPlatform(
						{
				id: '64bb',
				name: '64bb',
				company: 'Ninvento',
				startAmount: 0.015,
				unitsSold: 0.015,
				licencePrize: 5000,
				published: '15/12/1',
				platformRetireDate: '16/08/1',
				developmentCosts: 10000,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
			
			});
	};
	
					var icon = './mods/jason-modAPI/images/barty.png';	
		GDT.addPlatform(
						{
				id: 'Town Barty',
				name: 'Town Barty',
				company: 'Fuditsu',
				startAmount: 0.015,
				unitsSold: 0.015,
				licencePrize: 5000,
				published: '10/2/1',
				platformRetireDate: '12/2/1',
				developmentCosts: 10000,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
			
			});
	
				var icon = './mods/jason-modAPI/images/odd.png';	
		GDT.addPlatform(
						{
				id: 'Odyessity',
				name: 'Odyessity',
				company: 'Madadox',
				startAmount: 0.005,
				unitsSold: 0.005,
				licencePrize: 5000,
				published: '1/1/1',
				platformRetireDate: '300/1/1',
				developmentCosts: 100,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
			
			});
	
	
	
			var icon = './mods/jason-modAPI/images/cd-pi.png';	
		GDT.addPlatform(
						{
				id: 'CD-Pi',
				name: 'CD-Pi',
				company: 'Pillips',
				startAmount: 0.300,
				unitsSold: 1.00,
				licencePrize: 5000,
				published: '8/12/1',
				platformRetireDate: '13/1/1',
				developmentCosts: 10000,
				genreWeightings: [1, 0.9, 1, 1, 1, 0.8],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '35668996-00-00-020-JASOFNMODIF',
						date: '8/10/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Pillips has announced the CD-Pi. The home console will featured a CD Player, and included access to the internet.".localize().format(General.getETADescription('8/10/1', '8/11/1')),
								image: icon
							});
						}
					}
				]
				
				
			
			});
	
	/* Topics  */

	jasonmodAPI.addTopic = function () {
		GDT.addTopics([
		{
			id: "Educational",
	    	name: "Educational".localize("game topic"),
	    	genreWeightings: [1, 0.9, 0.8, 1, 1, 0.6],
	    	audienceWeightings: [0.6, 0.7, 1]
		}, {
	    	id: "Ocean",
	    	name: "Ocean".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Narwhal",
	    	name: "Narwhal".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Pillow Fight",
	    	name: "Pillow Fight".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}
		
	 
	    ]);
	};
	      
	/*  */		       
})();