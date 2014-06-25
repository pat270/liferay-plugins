AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function(A) {
		var portletSearchInput = A.one('.portlet-search input[type="text"]');

		if (portletSearchInput) {
			portletSearchInput.set('value', 'Search ...');

			portletSearchInput.on(
				'focus',
				function(event) {
					var currentTarget = event.currentTarget;
					var value = currentTarget.get('value');

					if (value === 'Search ...' || value === '') {
						currentTarget.set('value', '');
					}
				}
			);

			portletSearchInput.on (
				'blur',
				function(event) {
					var currentTarget = event.currentTarget;
					var value = currentTarget.get('value');

					if (value === '') {
						portletSearchInput.set('value', 'Search ...');
					}
				}
			);
		}
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