eagle.onPluginCreate(async (plugin) => {
	console.log('eagle.onPluginCreate');

	updateTheme();

	console.log('id:', plugin.manifest.id);
	console.log('version:', plugin.manifest.version);
	console.log('name:', plugin.manifest.name);
	console.log('logo:', plugin.manifest.logo);
	console.log('path:', plugin.path);

	document.querySelectorAll(`a[href^="http"]`).forEach((element) => {
		element.addEventListener('click', (event) => {
			event.preventDefault();
			eagle.shell.openExternal(event.target.href);
		});
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