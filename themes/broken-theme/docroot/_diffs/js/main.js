AUI().ready(
	'aui-modal',
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

		A.getBody().delegate('click', eventHandler, 'a.logo');

		var eventHandler = function(event) {
			event.preventDefault();
			alert(event.currentTarget.attr('title'));
		}

		var signIn = A.one('li.sign-in a');

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}

		A.one('#showModal').on(
			'click',
			function() {
				var popUpWindow=Liferay.Util.Window.getWindow(
				{
					dialog: {
						centered: true,
						constrain2view: true,
						cssClass: 'link-dialog',
						modal: true,
						resizable: true
					}
				}
				).plug(
				A.Plugin.DialogIframe,
				{
					autoLoad: true,
					iframeCssClass: 'dialog-iframe',
					uri:'http://www.liferay.com/'
				}).render();

				popUpWindow.show();
				popUpWindow.titleNode.html("Liferay.com");
			}
		);
	}
);