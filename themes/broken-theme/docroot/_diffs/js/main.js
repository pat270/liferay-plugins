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
			A.Node.create('<div id="poweredByModal"></div>').appendTo('#wrapper');
			var content = '<iframe src="' + poweredBy.get('href') + '" </iframe>';

			poweredBy.on('click', function(event) {
				event.preventDefault();

				var poweredByModal = new A.Modal({
					bodyContent: content,
					centered: true,
					height: 768,
					id: 'poweredByModalWindow',
					render: '#poweredByModal',
					width: 1024
				});
			});
		}

		var signInPortlet = A.one('.portlet-login');

		if (siteBreadcrumbs && signIn && !(signInPortlet)) {
			A.Node.create('<div id="breadcrumbSignIn"></div>').appendTo('#wrapper');

			siteBreadcrumbs.delegate('click', function (event) {
				event.preventDefault();

				var successHandler = function () {
					var response = A.Node.create(this.get('responseData'));
					var content = response.one('.portlet-login .portlet-content').getHTML();

					new A.Modal({
						bodyContent: content,
						centered: true,
						height: 400,
						id: 'breadcrumbSignInWindow',
						render: '#breadcrumbSignIn',
						width: 600
					});
				};

				A.io.request(
					'http://localhost:8080/c/portal/login',
					{
						on: {
							success: successHandler
						}
					}
				);
			}, 'a');
		}
	}
);