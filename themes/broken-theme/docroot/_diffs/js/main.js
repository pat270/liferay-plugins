AUI().ready(
	'aui-modal',
	'aui-node',
	'liferay-hudcrumbs',
	'liferay-navigation-interaction',
	'liferay-sign-in-modal',
	function(A) {
		var navigation = A.one('#navigation');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		var siteBreadcrumbs = A.one('#breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}

		var eventHandler = function(event) {
			event.preventDefault();
			alert(event.currentTarget.attr('title'));
		};

		A.getBody().delegate('click', eventHandler, 'a.logo');

		var signIn = A.one('li.sign-in a');

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}

		var poweredBy = A.one('.powered-by a');

		if (poweredBy) {
			var content = '<iframe src="' + poweredBy.get('href') + '" </iframe>';
			var poweredByModal = new A.Modal({
				bodyContent: content,
				centered: true,
				height: 768,
				id: 'poweredByModalWindow',
				width: 1024
			});

			poweredBy.on('click', function(event) {
				event.preventDefault();

				if (!poweredByModal.get('rendered')) {
					poweredByModal.render('#wrapper');
				} else {
					poweredByModal.show();
				}

			});
		}

		if (siteBreadcrumbs && signIn) {
			var signInModal = new A.Modal({
				centered: true,
				height: 400,
				id: 'breadcrumbSignInWindow',
				width: 600,
			});

			var successHandler = function () {
				var response = A.Node.create(this.get('responseData'));
				var content = response.one('.portlet-login .portlet-content').getHTML();

				signInModal.set('bodyContent', content);
			};

			A.io.request(
				themeDisplay.getPortalURL() + '/c/portal/login',
				{
					on: {
						success: successHandler
					}
				}
			);

			siteBreadcrumbs.delegate('click', function (event) {
				event.preventDefault();

				if (!signInModal.get('rendered')) {
					signInModal.render('#wrapper');
				} else {
					signInModal.show();
				}

			}, 'a');
		}
	}
);