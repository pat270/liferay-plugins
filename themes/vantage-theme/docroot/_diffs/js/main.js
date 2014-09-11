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

/*** sticky nav bar ***/
// note: in order to make this function work, we assume a lot of things.. such as the margin of
// the entire body wrapper having a margin of 0 and its position being static amongst other things.

YUI().use('node', 'event-hover', 'transition', function (X) {

	var	banner, bannerBox;
	var clientLeft, clientTop, docBody, docElem, scrollLeft, scrollTop;
	var	domElemIsDefined;
	var	mainContent;
	var navbar, navBox, navHeight, navLeftToDoc, navParentBox, navParentContainer,  
	navTopToDoc, navWidth;

    function getNavPositionValues() {
		navWidth = navParentContainer.getComputedStyle('width'); // nav physical width should be its parent's width
		navHeight = navbar.getComputedStyle('height');
	    navParentBox = (document.querySelector('#wrapper')).getBoundingClientRect();
	    bannerBox = (document.querySelector('.aui #banner .site-title')).getBoundingClientRect();

	    docBody = document.body;
	    docElem = document.documentElement;
	    scrollLeft = window.pageXOffset || docElem.scrollLeft || docBody.scrollLeft;
	    scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop;
	    clientLeft = docElem.clientLeft || docBody.clientLeft || 0;
	    clientTop = docElem.clientTop || docBody.clientTop || 0;
	    navLeftToDoc = Math.round(navParentBox.left + scrollLeft - clientLeft); // nav unfixed x position to document set to parent's x position
	    navTopToDoc = Math.round(bannerBox.top + banner.get('scrollHeight') + scrollTop - clientTop); // nav unfixed y position to document is the bottom of banner (navbar is immediately below banner)
	    
		return;
    }

	function positionNavBar() {
		scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop;

	    if (scrollTop > navTopToDoc) {
	    	// if nav bar isn't fixed, we set it to 'fixed'
	    	if (navbar.getComputedStyle('position') != 'fixed') {
	    		// stick nav bar to top of viewport
		    	navbar.setStyle('position', 'fixed');
		    	navbar.setStyle('left', navLeftToDoc + 'px');
		    	navbar.setStyle('top', '0');
		    	navbar.setStyle('width', navWidth);

		    	mainContent.setStyle('margin-top', navbar.getComputedStyle('height'));
	    	}
	    	// nav bar is already fixed.. just adjust its width and left position
	    	else {
	    		navbar.setStyle('left', navLeftToDoc + 'px');
	    		navbar.setStyle('width', navWidth);

	    		mainContent.setStyle('margin-top', navbar.getComputedStyle('height'));
	    	}
	    }
	    else {
	    	// if nav bar is fixed, we set it to 'unfixed'
	    	if (navbar.getComputedStyle('position') == 'fixed') {
	    		// un-stick nav bar back to its previous position
	    		navbar.setStyle('position', 'static');
		    	navbar.setStyle('left', '0');
		    	navbar.setStyle('top', '0');
		    	navbar.setStyle('width', navWidth);

		    	// un-compensate nav bar space that was used to push down all elements below nav bar
		    	mainContent.setStyle('margin-top', (parseInt(mainContent.getComputedStyle('margin-top')) - parseInt(navbar.getComputedStyle('height'))) + 'px');
	    	}
	    	else {
	    		navbar.setStyle('left', navLeftToDoc + 'px');
	    		navbar.setStyle('width', navWidth);
	    	}
	    }

	    return;
	}
		 
	navbar = X.one('#navigation');
	navParentContainer = X.one('#wrapper');
	banner = X.one('#banner .site-title'); // banner site-title element is immediately above navbar
	mainContent = X.one('#main-content'); // mainConten is the giant wrapper that wraps everything below navbar

	if (navbar && navParentContainer && banner && mainContent) {
		domElemIsDefined = true;
	}
	else {
		domElemIsDefined = false;
	}

	if (domElemIsDefined) {
		getNavPositionValues();
		positionNavBar();
	}

	X.all('.aui .nav-add-controls > li > a, .aui .nav-account-controls > li > a, .aui .navbar-static-top .container > a').on('click', function() {
		// the click event doesn't wait for dom elements to refresh.. so
		// wait for dom elements to refresh before getting dom element values

		X.on('domready', function domReadyEvent () {
			if (domElemIsDefined) {
				getNavPositionValues();
				positionNavBar();
			}
		});
	});

	formatMainCarousel();

	function formatMainCarousel() {

		var carousel = X.one('.component.carousel .mainCarousel');

		if (carousel) {
			var bodyWidth = X.one('body').getComputedStyle('width');

			carousel.setStyle('width', '100%');
			carousel.setStyle('height', (parseInt(bodyWidth) * .35) + 'px');
		}
	}

	X.on('resize', function onResizeEvent (event) {
    	formatMainCarousel();
	});

	var onHover = function (event) {
		event.currentTarget.addClass('open');
	}

	var offHover = function (event) {
		event.currentTarget.removeClass('open');
	}

	X.on('hover', onHover, '#navigation ul > li', offHover);

    X.on('resize', function onResizeEvent (event) {
    	if (domElemIsDefined) {
    		getNavPositionValues();
    		positionNavBar();
    	}
	});

    // for some reason, the static top bar's 'add' and 'edit' buttons doesn't register mouse clicks
    X.on('click', function onClickEvent (event) {
    	// really, the possibility of clicking on anything that could cause a rearrangment of elements
    	// should be accounted for (except this function doesn't cover the clicking of a scroll bar..
    	// how to do that)
    	
    	if (domElemIsDefined) {
    		getNavPositionValues();
    		positionNavBar();
    	}
    });

	X.on('scroll', function onScrollEvent (event) {
		if (domElemIsDefined) {
			positionNavBar();
		}
	});
});