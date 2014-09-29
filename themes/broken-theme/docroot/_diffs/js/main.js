AUI().ready(
	'event',
	'io',
	'liferay-hudcrumbs',
	'liferay-navigation-interaction',
	'liferay-sign-in-modal',
	'node',
	'panel',
	function(A) {
		var navigation = A.one('#navigation');
		var poweredByLink = A.one('.powered-by > a');
		var signIn = A.one('li.sign-in a');
		var siteBreadcrumbs = A.one('#breadcrumbs');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}

		var eventHandler = function(event) {
			event.preventDefault();
			alert(event.currentTarget.attr('title'));
		}

		var openLiferayWebsite = function (event) {
			event.preventDefault();

			var bodyNode = A.one(document.body);
			var dialogLiferayWebsite = A.Node.create('<div class="dialogLiferayWebsite"><iframe src="http://www.liferay.com" width="100%" height="100%"></iframe></div>');

			bodyNode.append(dialogLiferayWebsite);

			panel = new A.Panel(
				{
					centered: true,
					height: 400,
					modal: true,
					render: true,
					srcNode: '.dialogLiferayWebsite',
					visible: false,
					width: 700,
					zIndex: 99999,
				}
			);

			panel.on(
				'visibleChange',
				function () {
					if (panel.get('visible')) {
						panel.destroy();
					}
				}
			);

			panel.show();
		}

		var breadcrumbClickFunc = function (event) {
			event.preventDefault();

			var bodyNode = A.one(document.body);
			var dialogPanelContent = A.Node.create('<div class="dialogPanelContent"></div>');
			var getRequestConfig, ioRequest, panel;
			var url = 'http://localhost:8080/web/guest/home';

			bodyNode.append(dialogPanelContent);

			panel = new A.Panel(
				{
					centered: true,
					height: 400,
					modal: true,
					render: true,
					srcNode: '.dialogPanelContent',
					visible: false,
					width: 500,
					zIndex: 99999,
				}
			);

			panel.on(
				'visibleChange',
				function () {
					if (panel.get('visible')) {
						panel.destroy();
					}
				}
			);

			getRequestConfig = {
				method: 'GET',
				headers: {
					'Content-Type': 'text/html',
				},
				on: {
					success: function (transactionId, response, arguments) {
						var tempContent = A.Node.create('<div class="tempContent"></div>');

						tempContent.setHTML(response.responseText);

						var signInForm = tempContent.one('.sign-in-form').ancestor('.portlet');

						dialogPanelContent.append(signInForm);
						panel.show();
					},
					failure: function (transactionId, response, arguments) {
						dialogPanelContent.setHTML('Error occured');
						panel.show();
					}
				}
			}

			ioRequest = A.io(url, getRequestConfig);
		};

		A.getBody().delegate('click', eventHandler, 'a.logo');
		poweredByLink.on('click', openLiferayWebsite);

		if ( ! Liferay.ThemeDisplay.isSignedIn()) {
			if(siteBreadcrumbs) {
				siteBreadcrumbs.delegate('click', breadcrumbClickFunc, '> .breadcrumb > li > a');
			}
		}
	}
);