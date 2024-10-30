


eagle.onPluginCreate((plugin) => {
	const games = [
		{ name: "2048",  title: "2048", folder: 1, description: "2222222222222", rating: 4.5, tags: ["puzzle", "strategy"] },
		{ name: "back-attacker",  title: "Back Attacker", folder: 1, description: "2222222222222", rating: 4.5, tags: ["martial", "stealth"] },
		{ name: "cheap-ai-chess",  title: "Cheap AI Chess", folder: 1, description: "2222222222222", rating: 4, tags: ["puzzle", "strategy"] },
		{ name: "coloron-game",  title: "Coloron Game", folder: 1, description: "2222222222222", rating: 4, tags: ["adventure", "leisure"] },
		{ name: "edgesurf",  title: "Edge Surf", folder: 1, description: "2222222222222", rating: 3, tags: ["adventure", "sports"] },
		{ name: "envisionator",  title: "Envisionator", folder: 1, description: "2222222222222", rating: 3, tags: ["adventure", "strategy"] },
		{ name: "just_one_boss",  title: "Just One Boss", folder: 1, description: "2222222222222", rating: 4.8, tags: ["adventure", "battle"] },
		{ name: "picohot",  title: "Pico Hot", folder: 1, description: "2222222222222", rating: 4.7, tags: ["fps", "battle"] },
		{ name: "radiusraid",  title: "Radius Raid", folder: 1, description: "2222222222222", rating: 4.9, tags: ["action", "battle"] },
		{ name: "the-caretakera",  title: "The Caretakera", folder: 1, description: "2222222222222", rating: 4.5, tags: ["horror", "puzzle"] },
		{ name: "poom",  title: "Poom", folder: 1, description: "2222222222222", rating: 4.8, tags: ["action", "fps"] },
		{ name: "thecube",  title: "The Cube", folder: 1, description: "2222222222222", rating: 4, tags: ["puzzle", "leisure"] },
		{ name: "tilting-maze-game",  title: "Tilting Maze Game", folder: 1, description: "2222222222222", rating: 4, tags: ["leisure", "puzzle"] },
		{ name: "valorousrabbit",  title: "Valorous Rabbit", folder: 1, description: "2222222222222", rating: 3, tags: ["adventure", "racing"] },
		{ name: "verynormalshooter",  title: "Very Normal Shooter", folder: 1, description: "2222222222222", rating: 4.8, tags: ["shooter", "battle"] },
		{ name: "wolf3d-master",  title: "Wolfenstein 3D", folder: 1, description: "2222222222222", rating: 3, tags: ["shooter", "fps"] },
		{ name: "you-must-build-a-lighthouse",  title: "You Must Build a Lighthouse", folder: 1, description: "2222222222222", rating: 4.6, tags: ["leisure", "simulation"] },
		{ name: "choch",  title: "CHOCH", folder: 0, description: "2222222222222", rating: 4, tags: ["adventure", "scifi"] },
		{ name: "chroma",  title: "The Chroma Incident", folder: 0, description: "2222222222222", rating: 5, tags: ["shooter", "scifi"] },
		{ name: "chromedino",  title: "Chrome Dinosaur", folder: 0, description: "2222222222222", rating: 3, tags: ["leisure", "racing"] },
		{ name: "Evilglitch",  title: "Evil Glitch", folder: 0, description: "2222222222222", rating: 5, tags: ["shooter", "scifi"] },
		// { name: "itsrainingboxes",  title: "Its Raining Boxes", folder: 0, description: "2222222222222", rating: 4.5, tags: ["leisure", "survival"] },
		{ name: "Konekt",  title: "Konekt", folder: 0, description: "2222222222222", rating: 4.7, tags: ["leisure", "scifi"] },
		{ name: "minecraft",  title: "Minecraft", folder: 0, description: "2222222222222", rating: 4, tags: ["leisure", "adventure"] },
		{ name: "ninjavsevilcorp",  title: "Ninja vs Evilcorp", folder: 0, description: "2222222222222", rating: 4.5, tags: ["stealth", "simulation"] },
		{ name: "packabunchas",  title: "Packa Bunchas", folder: 0, description: "2222222222222", rating: 4, tags: ["leisure", "scifi"] },
		{ name: "periodictableofelements",  title: "Periodic Table of Elements", folder: 0, description: "2222222222222", rating: 3, tags: ["scifi", "leisure"] },
		{ name: "RetroHaunt",  title: "Retro Haunt", folder: 0, description: "2222222222222", rating: 3, tags: ["puzzle", "horror"] },
		{ name: "snakegame",  title: "Snake Game", folder: 0, description: "2222222222222", rating: 3, tags: ["leisure", "adventure"] },
		{ name: "spacehuggers",  title: "Space Huggers", folder: 0, description: "2222222222222", rating: 5, tags: ["shooter", "military"] },
		{ name: "Square",  title: "Square", folder: 0, description: "2222222222222", rating: 4.7, tags: ["puzzle", "leisure"] },
		{ name: "submersible-warship",  title: "Submersible Warship", folder: 0, description: "2222222222222", rating: 4.8, tags: ["battle", "shooter"] },
		{ name: "swagshot",  title: "Swagshot", folder: 0, description: "2222222222222", rating: 4.6, tags: ["fps", "shooter"] },
		{ name: "thelastspartan",  title: "The Last Spartan", folder: 0, description: "2222222222222", rating: 4.5, tags: ["battle", "action"] },
		{ name: "the-wandering-wraith",  title: "The Wandering Wraith", folder: 0, description: "2222222222222", rating: 4.5, tags: ["horror", "adventure"] },
		{ name: "towerblocks",  title: "Tower Blocks", folder: 0, description: "2222222222222", rating: 4.5, tags: ["simulation", "leisure"] },
	];

	const gameCardsContainer = document.getElementById("game-cards");

	// 按照rating降序排列
	games.sort((a, b) => b.rating - a.rating);
	games.forEach(game => {
		const card = document.createElement("a");
	
		let tagname = game.tags.map(tag => i18next.t('app.tag.' + tag)).join(' ');
	
		if (game.folder === 1) {
			card.href = `games/${game.name}/index.html`;
		} else {
			card.href = `games/${game.name}.html`;
		}
		card.innerHTML = `
			<div class="card">
				<div class="card-image">
					<img src="images/cover/${game.name}.jpg">
				</div>
				<div class="card-content">
					<h2>${game.title}</h2>
					<div class="tags">
						${game.tags.map(tag => `<code>${i18next.t('app.tag.' + tag)}</code>`).join(' ')}
					</div>
				</div>
			</div>
		`;
		gameCardsContainer.appendChild(card);
	});
	

	document.getElementById('heading').innerHTML = i18next.t('app.title');
	// document.getElementById('contentA').innerHTML = i18next.t('app.contentA');
	document.getElementById('contentB').innerHTML = i18next.t('app.contentB');
	// document.getElementById('contentC').innerHTML = i18next.t('app.contentC');
	document.getElementById('contentD').innerHTML = i18next.t('app.contentD');




});