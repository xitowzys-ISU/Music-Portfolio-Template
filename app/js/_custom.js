document.addEventListener("DOMContentLoaded", function () {
	var menu = new Mmenu("#my-menu", {
		extensions: ["theme-black", "effect-menu-slide", "pagedim-black", "position-right"],
		navbar: {
			title: '<img src="img/_src/logo-mmenu.svg" alt="RAIDEMOT">'
		},
	});

	var apiMmenu = menu.API;
	var hamburger = document.getElementsByClassName('hamburger')[0];

	apiMmenu.bind("open:start",
		() => {
			hamburger.classList.add("is-active");
		}
	);

	apiMmenu.bind("close:before",
		() => {
			hamburger.classList.remove("is-active");
		}
	);
});