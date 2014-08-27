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


	// original #breadcrumbs position in regards to document (not viewport)
	

	
);

/*
YUI().use('node', function(Y) {
	// help set site-name (in banner area) vertically centered
	var title = Y.one('#banner h1.site-title .site-name');
	var height = title.get('offsetHeight');
	var moveHeight = height * -0.5;
	moveHeight = moveHeight + "px";

	title.setStyle('marginTop', moveHeight);
})
*/

/*** sticky nav bar ***/
/*
YUI().use('node', function(X) {

	var navbarStaticTop = document.querySelector(".aui #breadcrumbs");
    var navBox = navbarStaticTop.getBoundingClientRect();
    var docBody = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop;
    var clientTop = docElem.clientTop || docBody.clientTop || 0;
    var navOriginalYDoc = Math.round(navBox.top + scrollTop - clientTop); // nav original y position to document

    var navComputedStyle = getComputedStyle(navbarStaticTop);

    var navHeight = navbarStaticTop.scrollHeight; // height of nav bar
    var navOriginalPosition = navComputedStyle.getPropertyValue("position");
    var navOriginalLeft = navComputedStyle.getPropertyValue("left");
    var navOriginalTop = navComputedStyle.getPropertyValue("top");

    var mainContent = document.querySelector(".aui #main-content");
    var mainContentOriginalMarginTop = getComputedStyle(mainContent).getPropertyValue("margin-top");

	X.on('scroll', function(e) {     

		scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop;

	    if (scrollTop > navOriginalYDoc)
	    {
	    	// snap nav bar to top of viewport
	    	if (navComputedStyle.getPropertyValue("position") != "fixed")
	    	{
		    	navbarStaticTop.style['position'] = "fixed";
		    	navbarStaticTop.style['left'] = "0";
		    	navbarStaticTop.style['top'] = "0";

		    	// compensate nav bar space by pushing down all elements by nav bar height
		    	if (mainContentOriginalMarginTop != "0")
		    	{
		    		mainContent.style.marginTop = (parseInt(navHeight) + parseInt(mainContentOriginalMarginTop.replace(/px/, ""))) + "px";
		    	}
		    	else 
		    	{
		    		mainContent.style.marginTop = navHeight + "px";
		    	}
	    	}
	    }
	    else
	    {
	    	if (navbarStaticTop.style['position'] == "fixed")
	    	{
	    		navbarStaticTop.style['position'] = navOriginalPosition;
		    	navbarStaticTop.style['left'] = navOriginalLeft;
		    	navbarStaticTop.style['top'] = navOriginalTop;

		    	if (mainContentOriginalMarginTop != '')
		    	{	
		    		mainContent.style.marginTop = mainContentOriginalMarginTop + "px";
		    	}
		    	else
		    	{
		    		mainContent.style.marginTop = '';
		    	}
	    	}
	    }
	});
})
*/
/*
YUI().use('node', function(X) {

	var navbarStaticTop = document.querySelector(".aui #breadcrumbs");
    var navBox = navbarStaticTop.getBoundingClientRect();
    var docBody = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop;
    var clientTop = docElem.clientTop || docBody.clientTop || 0;
    var navOriginalYDoc = Math.round(navBox.top + scrollTop - clientTop); // nav original y position to document

    var navComputedStyle = getComputedStyle(navbarStaticTop);

    var navHeight = navbarStaticTop.scrollHeight; // height of nav bar
    var navOriginalPosition = "static";
    var navOriginalLeft = "0";
    var navOriginalTop = "0";

    var mainContent = document.querySelector(".aui #main-content");
    var mainContentOriginalMarginTop = "0";

	X.on('scroll', function(e) {     

		scrollTop = window.pageYOffset || docElem.scrollTop || docBody.scrollTop;

	    if (scrollTop > navOriginalYDoc)
	    {
	    	// snap nav bar to top of viewport
	    	if (mainContent.style.position != "fixed")
	    	{
		    	navbarStaticTop.style['position'] = "fixed";
		    	navbarStaticTop.style['left'] = "0";
		    	navbarStaticTop.style['top'] = "0";

		    	navbarStaticTop.style.width = "100vw";
		    	mainContent.style.marginTop = navHeight + "px";
	    	}
	    }
	    else
	    {
	    	if (navbarStaticTop.style['position'] == "fixed")
	    	{
	    		navbarStaticTop.style['position'] = navOriginalPosition;
		    	navbarStaticTop.style['left'] = navOriginalLeft;
		    	navbarStaticTop.style['top'] = navOriginalTop;

		    	mainContent.style.marginTop = 0;
	    	}
	    }
	});
})
*/