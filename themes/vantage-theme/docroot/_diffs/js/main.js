AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
	    }

);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}

);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}

);

YUI().use('anim', 'node', 'event-hover', function (X) {

	var wrapper = X.one('#wrapper');
	var banner = X.one('#heading');
	var mainContent = X.one('#main-content');
	var navbar = X.one('#navigation');
	var scrollTopButton = X.Node.create('<a id="vantageScrollTopButton">^</a>');

	var updateNavbar = function () {
		if (banner && navbar && mainContent) {
			var stickPoint = banner.getY() + parseInt(banner.getComputedStyle('height'));

			if (window.scrollY > stickPoint) {
				navbar.addClass('sticky');
				navbar.setStyle('width', wrapper.getComputedStyle('width'));
				mainContent.setStyle('margin-top', navbar.getComputedStyle('height'));
			}
			else {
				navbar.removeClass('sticky');
				navbar.setStyle('width', '100%');
				mainContent.setStyle('margin-top', 0);
			}
		}
	}

	var setUpScrollTopButton = function () {
		if (scrollTopButton) {
			X.one('body').append(scrollTopButton);
			scrollTopButton.on('click', function () {
				var scrollToTop = new X.Anim({
				  duration: 0.5,
				  node: 'win',
				  easing: 'easeBoth',
				  to: {
				    scroll: [0, 0]
				  }
				});

				scrollToTop.run();
			});
		}
	}

	var updateScrollTopButton = function () {
		if (navbar) {
			if (navbar.hasClass('sticky')) {
				scrollTopButton.addClass('scrollTopButtonAppear');
			}
			else {
				scrollTopButton.removeClass('scrollTopButtonAppear');
			}
		}
	}

	var formatMainCarousel = function () {
		var carousel = X.one('.component.carousel .mainCarousel');

		if (carousel) {
			var bodyWidth = X.one('body').getComputedStyle('width');

			carousel.setStyles({
				width: '100%',
				height: ((parseInt(bodyWidth) * .35) + 'px')
			});
		}
	}

	var formatVantageCarousel = function () {
		var carousel = X.one('#vantageCarousel');
		var currentXScroll = 0;
		var thumbnailWidth = 257;
		var maxXscroll = 6 * thumbnailWidth;
		var scrollRightButton = X.one('#scrollRightButton');
		var scrollLeftButton = X.one('#scrollLeftButton');

		if (carousel && scrollRightButton && scrollLeftButton) {
			scrollRightButton.on('click', function (event) {
				currentXScroll += thumbnailWidth;
				if (currentXScroll > maxXscroll) {
					currentXScroll = maxXscroll;
				}

				carousel.setStyle('left', -1 * currentXScroll);
			});
			scrollLeftButton.on('click', function (event) {
				currentXScroll -= thumbnailWidth;
				if (currentXScroll < 0) {
					currentXScroll = 0;
				}

				carousel.setStyle('left', -1 * currentXScroll);
			});
		}
	}

	var onHover = function (event) {
		event.currentTarget.addClass('open');
	}

	var offHover = function (event) {
		event.currentTarget.removeClass('open');
	}

	var setNavbarDelegate = function (event) {
		var ul = X.one('#navigation > ul');
		
		if(ul) {
			ul.delegate('hover', onHover, offHover, '> li');
		}
	}

	updateNavbar();
	setUpScrollTopButton();
	updateScrollTopButton();
	formatMainCarousel();
	formatVantageCarousel();
	setNavbarDelegate();

	X.on('resize', function onResizeEvent (event) {
    	formatMainCarousel();
    	updateNavbar();
    	updateScrollTopButton();
	});

	X.on('scroll', function() {
		updateNavbar();
		updateScrollTopButton();
	})
});