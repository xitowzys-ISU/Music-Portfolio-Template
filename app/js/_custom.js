document.addEventListener("DOMContentLoaded", function () {

	//$('#video-gallery').lightGallery(); 

	

    $('#video-gallery').lightGallery({
        selector: '.vv'
    });



	var window_size = window.matchMedia("(max-width: 768px)");

	if (window_size.matches) {
		var menu = new Mmenu("#my-menu", {
			extensions: ["theme-black", "effect-menu-slide", "pagedim-black", "position-right", "fullscreen"],
			navbar: {
				title: '<img id="logoPanelMmenu" src="img/_src/logo-mmenu.svg" alt="RAIDEMOT">'
			},
		});
	} else
	{
		var menu = new Mmenu("#my-menu", {
			extensions: ["theme-black", "effect-menu-slide", "pagedim-black", "position-right"],
			navbar: {
				title: '<img id="logoPanelMmenu" src="img/_src/logo-mmenu.svg" alt="RAIDEMOT">'
			},
		});
	}

	var apiMmenu = menu.API;
	var hamburger = document.getElementsByClassName('hamburger')[0];
	var logoPanelMmenu = document.getElementById('logoPanelMmenu');

	logoPanelMmenu.onclick = function(event) {
		event = event || window.event;
		apiMmenu.close();  
	};

	hamburger.onclick = function(event) {
		event = event || window.event;
		apiMmenu.close();  
	};

	apiMmenu.bind("open:finish",
		() => {
			hamburger.classList.add("is-active");
		}
	);

	apiMmenu.bind("close:finish",
		() => {
			hamburger.classList.remove("is-active");
		}
	);
});