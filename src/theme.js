(function() {
	/* global window, document, $ */
	var default_theme = "classic.css";
	var theme_storage_key = "jspaint theme";
	var current_theme;
	try {
		current_theme = localStorage[theme_storage_key] || default_theme;
	} catch (error) {
		current_theme = default_theme;
	}

	var theme_link = document.createElement("link");
	theme_link.rel = "stylesheet";
	theme_link.type = "text/css";
	theme_link.href = href_for(current_theme);
	theme_link.id = "theme-link";
	document.head.appendChild(theme_link);

	window.set_theme = set_theme;
	window.get_theme = get_theme;

	/**
	 * @return {string}
	 */
	function get_theme() {
		return current_theme;
	}

	/**
	 * @param {string} theme
	 * @return {Promise}
	 */
	function set_theme(theme) {
		current_theme = theme;

		try {
			localStorage[theme_storage_key] = theme;
		} catch(error) {}

		theme_link.href = href_for(theme);
		// TODO: (how?)
		// $(window).triggerHandler("theme-load");
	}

	/**
	 * @param {string} theme
	 * @return {string}
	 */
	function href_for(theme) {
		return "styles/themes/" + theme;
	}
})();
