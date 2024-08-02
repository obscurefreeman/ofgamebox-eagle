async function updateTheme() {
	const THEME_SUPPORT = {
		AUTO: eagle.app.isDarkColors() ? 'gray' : 'light',
		LIGHT: 'light',
		LIGHTGRAY: 'lightgray',
		GRAY: 'gray',
		DARK: 'dark',
		BLUE: 'blue',
		PURPLE: 'purple',
	};

	const theme = eagle.app.theme.toUpperCase();
	const themeName = THEME_SUPPORT[theme] ?? 'dark';
	const htmlEl = document.querySelector('html');

	htmlEl.classList.add('no-transition');
	htmlEl.setAttribute('theme', themeName);
	htmlEl.setAttribute('platform', eagle.app.platform);
	htmlEl.classList.remove('no-transition');
}

eagle.onPluginCreate(async (plugin) => {
	console.log('eagle.onPluginCreate');

	updateTheme();

	console.log('id:', plugin.manifest.id);
	console.log('version:', plugin.manifest.version);
	console.log('name:', plugin.manifest.name);
	console.log('logo:', plugin.manifest.logo);
	console.log('path:', plugin.path);

	// update app name on header
	document.getElementById('appName').innerHTML = i18next.t('manifest.app.name')
	document.getElementById('heading').innerHTML = i18next.t('app.title');
	
	// 卧槽为什么这段代码放在card.js里就可以，放在这里就不行？
	// document.getElementById('contentA').innerHTML = i18next.t('app.contentA');
	// document.getElementById('contentB').innerHTML = i18next.t('app.contentB');
	// document.getElementById('contentC').innerHTML = i18next.t('app.contentC');

	// let aaa = i18next.t('app.contenta');
    // let bbb = i18next.t('app.contentb');
	// let ccc = i18next.t('app.contentc');

    // document.querySelector('#message').innerHTML = `
	// 	<p> ${aaa}</p>
	// 	<p>${bbb}</p>
	// 	<p>${ccc}</p>
    // `;




	// hijack all outsource links to open in default browser
	document.querySelectorAll(`a[href^="http"]`).forEach((element) => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			eagle.shell.openExternal(event.target.href);
		});
	});

	document.querySelector('.btn-close').addEventListener('click', () => {
		window.close();
	});
});

eagle.onThemeChanged(() => {
	updateTheme();
});

eagle.onPluginRun(() => {
	console.log('eagle.onPluginRun');
});

eagle.onPluginShow(() => {
	console.log('eagle.onPluginShow');
});

eagle.onPluginHide(() => {
	console.log('eagle.onPluginHide');
});

eagle.onPluginBeforeExit((event) => {
	console.log('eagle.onPluginBeforeExit');
});