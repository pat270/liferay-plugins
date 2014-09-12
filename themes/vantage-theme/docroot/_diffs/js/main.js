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

YUI().use('anim', 'node', 'event-hover', function (Y) {
	var banner = Y.one('#heading');
	var mainContent = Y.one('#main-content');
	var navbar = Y.one('#navigation');
	var scrollTopButton = Y.Node.create('<a id="vantageScrollTopButton"><span class="icon-chevron-up"></span></a>');
	var wrapper = Y.one('#wrapper');

	var updateNavbar = function () {
		if (banner && navbar && mainContent) {
			var stickPoint = banner.getY() + banner.get('offsetHeight');

			if (window.scrollY > stickPoint) {
				navbar.addClass('sticky');
				navbar.setStyle('width', wrapper.get('offsetWidth'));
				mainContent.setStyle('margin-top', navbar.get('offsetHeight'));
			}
			else {
				navbar.removeClass('sticky');
				navbar.setStyle('width', '100%');
				mainContent.setStyle('margin-top', 0);
			}
		}
	};

	var setScrollTopButton = function() {
		if (scrollTopButton) {
			Y.one('body').append(scrollTopButton);

			scrollTopButton.on(
				'click',
				function() {
					var scrollToTop = new Y.Anim(
						{
							duration: 0.5,
							node: 'win',
							easing: 'easeBoth',
							to: {
								scroll: [0, 0]
							}
						}
					);

					scrollToTop.run();
				}
			);
		}
	};

	var updateScrollTopButton = function () {
		if (navbar) {
			if (navbar.hasClass('sticky')) {
				scrollTopButton.addClass('scrollTopButtonAppear');
			}
			else {
				scrollTopButton.removeClass('scrollTopButtonAppear');
			}
		}
	};

	var updateMainCarousel = function () {
		var carousel = Y.one('.component.carousel .mainCarousel');

		if (carousel) {
			var bodyWidth = Y.one('body').get('offsetWidth');

			carousel.setStyles(
				{
					width: '100%',
					height: ((parseInt(bodyWidth) * .35) + 'px')
				}
			);
		}
	};

	var setVantageCarousel = function () {
		var carousel = Y.one('#vantageCarousel');
		var currentXScroll = 0;
		var thumbnailWidth = 257;
		var maxXscroll = 6 * thumbnailWidth;
		var scrollRightButton = Y.one('#scrollRightButton');
		var scrollLeftButton = Y.one('#scrollLeftButton');

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
	};

	var onHover = function (event) {
		event.currentTarget.addClass('open');
	};

	var offHover = function (event) {
		event.currentTarget.removeClass('open');
	};

	var setNavbarDelegate = function (event) {
		var ul = Y.one('#navigation > ul');

		if(ul) {
			ul.delegate('hover', onHover, offHover, '> li');
		}
	};

	updateNavbar();
	setScrollTopButton();
	updateScrollTopButton();
	updateMainCarousel();
	setVantageCarousel();
	setNavbarDelegate();

	Y.on('resize', function onResizeEvent (event) {
		updateMainCarousel();
		updateNavbar();
		updateScrollTopButton();
	});

	Y.on('scroll', function() {
		updateNavbar();
		updateScrollTopButton();
	});
});