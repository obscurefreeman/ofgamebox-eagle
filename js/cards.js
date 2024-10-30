const userLang = navigator.language || navigator.userLanguage; // 获取用户的语言偏好
const lang = userLang.split('-')[0]; // 提取语言代码，例如'en'或'zh'

// 支持的语言列表
const supportedLangs = ['en', 'zh'];

// 如果用户语言不在支持的语言列表中，则设置为默认的英文
if (!supportedLangs.includes(lang)) {
  lang = 'en';
}
i18next.init({
	lng: lang,
		resources: {
			en: {
				translation:{
					"app": {
						"title": "Freeman's Minigame Collection",
						"contentA": "Check out all these mini-games! They're from my regular collection of open-source code sites." ,
						"contentB": "You can view them in full screen by middle-clicking the game, opening it in a new window, and pressing F11." ,
						"contentC": "Looking for additional features, a prettier interface, and a wider selection of mini-games? Visit the Github page!" ,
						"contentD": "Feeling tired? It's mini-game time!" ,
						"contentE": "All games are collected from Github, Codepen and js13kGames, thanks to these open source projects!",
						"tags": "Tags",
							"tag": {
								"puzzle": "Puzzle",
								"fps": "FPS",
								"shooter": "Shooter",
								"rpg": "RPG",
								"simulation": "Simulation",
								"strategy": "Strategy",
								"sports": "Sports",
								"adventure": "Adventure",
								"racing": "Racing",
								"platformer": "Platform",
								"stealth": "Stealth",
								"survival": "Survival",
								"horror": "Horror",
								"action": "Action",
								"mmo": "MMO",
								"party": "Party",
								"battle": "Battle",
								"rhythm": "Rhythm",
								"visual_novel": "Visual Novel",
								"anime": "Anime",
								"fantasy": "Fantasy",
								"scifi": "Sci-fi",
								"leisure":"Leisure",
								"mystery": "Mystery",
								"martial": "Martial",
								"historical": "Historical",
								"military": "Military"
							}
					}
				}
			},
			zh: {
				translation:{
					"app": {
						"title": "弗里曼迷你游戏集",
						"contentA": "看，这里有很多小游戏！它们是我平常在开源代码网站上收集的。",
						"contentB": "使用通过鼠标中键点击游戏，在新窗口中打开，然后按下F11键全屏体验。",
						"contentC": "想要更多功能，更漂亮的界面，和更多小游戏？来 Github 贡献代码吧！",
						"contentD": "感觉累了吗？来玩些小游戏吧！",
						"contentE": "所有游戏均搜集于 Github，Codepen 和 js13kGames ，感谢这些开源项目！",
						"tags": "标签",
						"tag": {
							"puzzle": "解密",
							"fps": "FPS",
							"shooter": "射击",
							"rpg": "角色扮演",
							"simulation": "模拟",
							"strategy": "策略",
							"sports": "体育",
							"adventure": "冒险",
							"racing": "竞速",
							"platformer": "平台",
							"stealth": "潜行",
							"survival": "生存",
							"horror": "恐怖",
							"action": "动作",
							"mmo": "多人在线",
							"party": "派对",
							"battle": "战斗",
							"rhythm": "节奏",
							"visual_novel": "视觉小说",
							"anime": "动漫",
							"fantasy": "奇幻",
							"scifi": "科幻",
							"leisure":"休闲",
							"mystery": "悬疑",
							"martial": "武术",
							"historical": "历史",
							"military": "军事"
						}
					}
				}
			}
		}
	}, function(err, t) {
		if (err) return console.error(err);


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
	// document.getElementById('contentB').innerHTML = i18next.t('app.contentB');
	// document.getElementById('contentC').innerHTML = i18next.t('app.contentC');
	document.getElementById('contentD').innerHTML = i18next.t('app.contentD');
	document.getElementById('contentE').innerHTML = i18next.t('app.contentE');
});