// usage A.one(element).plug(A.Brighton.listToDropdown);
AUI.add(
	'listToDropdown',
	function(A) {
		A.namespace('Brighton').listToDropdown = A.Base.create(
			'listToDropdown',
			A.Plugin.Base, [],
			{
				_handle: null,

				initializer: function() {
					this._handle = this.get('host');
					instance = this._handle;

					// create drop down
					var dropdown = '';
					var selectedElement = '';

					instance.addClass('is-tablet');

					var linkAnchors = instance.all('li a');

					linkAnchors.each(
						function(item, index, collection) {
							var singleItem = '<li>' + item.attr('outerHTML') + '</li>';

							if (index == 0 || item.ancestor('li').hasClass('aui-tab-active')) {
								selectedElement = item.get('outerHTML');
							}

							dropdown = dropdown + singleItem;
						}
					);

					instance.insertBefore('<div class="brighton-dropdown-wrapper"><div class="config-nav-toggle">' + selectedElement + '</div><ul class="brighton-dropdown">' + dropdown + '</ul></div>', instance);

					// update instance
					instance = this._handle;

					var previousSibling = instance.get('previousSibling');

					var dropDown = previousSibling.one('ul.brighton-dropdown');
					var navToggle = previousSibling.one('.config-nav-toggle');

					dropDown.addClass('aui-helper-hidden');

					// delegate click to hide and show list
					navToggle.delegate(
						'click',
						function(event) {
							var instance = this;

							var menu = instance.ancestor();
							var list = menu.get('nextSibling');

							event.preventDefault();

							menu.toggleClass('open');
							list.toggleClass('aui-helper-hidden');

							// delegate click to hide list and change current tab
							list.delegate(
								'click',
								function(event) {
									var item = event.currentTarget;

									var list = item.ancestor('.brighton-dropdown');

									var dropdownBox = list.get('previousSibling');

									var text = item.get('innerHTML');

									//event.preventDefault();

									var dropBoxAnchor = dropdownBox.one('a');

									if (dropBoxAnchor) {
										dropBoxAnchor.set('innerHTML', text);
									}

									list.addClass('aui-helper-hidden');

									dropdownBox.removeClass('open');
								},
								'li a'
							);
						},
						'a'
					);
				},

				deconstructor: function() {
					var instance = this;

					instance.detach();

					instance._handle = null;
				},
			},
			{
				NS: 'bdd',
				ATTRS: {}
			}
		);
	},
	'',
	{
		requires: ['base', 'plugin', 'node', 'event']
	}
);

AUI().ready(
	'liferay-hudcrumbs',
	'liferay-navigation-interaction',
	'listToDropdown',
	function(A) {
		var navigation = A.one('#navigation');

		// Position drop down menu for desktop view
		var alignChildMenu = function() {
			var childMenu = A.all('#navigation .child-menu');

			childMenu.each(
				function(node, index) {
					var instance = this;

					var arraySize = A.all('#navigation .child-menu').size() - 1;
					var X = instance.ancestor('li').getX();

					toggleDeleteTab();

					if (index === 0) {
						instance.setStyle('left', X + 'px');
					}
					else if (index === arraySize) {
						var position = instance.ancestor('li').get('offsetWidth') + X;
						var position2 = position - instance.get('offsetWidth');

						instance.setStyle('left', position2 + 'px');
					}
					else {
						var position = instance.ancestor('li').get('offsetWidth')/2 + X;
						var position2 = instance.get('offsetWidth')/2;
						var position3 = position - position2;

						instance.setStyle('left', position3 + 'px');
					}
				}
			);
		};

		var disableNavEditControls = function() {
			if (navigation) {
				var ul = navigation.one('ul');

				if (ul) {
					ul.all('> li').each(
						function() {
							var instance = this;

							if (instance.hasClass('yui3-dd-drop')) {
								instance.removeClass('yui3-dd-drop');
							}
							if (instance.hasClass('yui3-dd-draggable')) {
								instance.removeClass('yui3-dd-draggable');
							}
							if (instance.hasClass('lfr-nav-updateable')) {
								instance.removeClass('lfr-nav-updateable');
							}
							if (instance.hasClass('lfr-nav-deletable')) {
								instance.removeClass('lfr-nav-deletable');
							}
						}
					);
				}
			}
		};

		var isMobile = (
			function() {
				var winWidth = A.getDoc().get('winWidth');

				if (winWidth > 0 && winWidth < 768) {
					return true;
				}
				else {
					return false;
				}
			}
		)();

		var isDesktop = (
			function() {
				var winWidth = A.getDoc().get('winWidth');

				if (winWidth > 1143) {
					return true;
				}
				else {
					return false;
				}
			}
		)();

		var tabletNav = function() {
			navigation.delegate(
				'click',
				function(event) {
					var instance = this;
					var winWidth = A.getDoc().get('winWidth');

					event.preventDefault();

					if (winWidth > 0 && winWidth <=1143) {
						var parentLi = instance.ancestor('li');

						var lastMenuItem = parentLi.one('a.has-dropdown.last');

						instance.toggleClass('open');

						parentLi.one('.menu-wrapper').toggleClass('menu-wrapper-toggle');

						if (lastMenuItem) {
							lastMenuItem.toggleClass('open');
						}
					}
				},
				'.tablet-link'
			);
		};

		// Work around for navigation element delete tab not being removed on mouseout
		var toggleDeleteTab = function () {
			navigation.delegate(
				'mouseleave',
				function (event) {
					var instance = this;
					var li = instance.ancestor('li')

					var el = li.one('span.delete-tab');

					if (el) {
						el.addClass('aui-helper-hidden');
					}
				},
				'.menu-wrapper'
			);

			navigation.delegate(
				'mouseenter',
				function (event) {
					var instance = this;
					var el = instance.ancestor('li').one('span.delete-tab');

					if (el && el.hasClass('aui-helper-hidden')) {
						el.removeClass('aui-helper-hidden');
					}
				},
				'ul li a.has-dropdown'
			);
		};

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);

			if (A.getDoc().get('winWidth') > 1143) {
				alignChildMenu();
			}

			tabletNav();

			A.on(
				'windowresize',
				function(e) {
					var winWidth = A.getDoc().get('winWidth');

					if (winWidth >= 1144) {
						alignChildMenu();
					}

					if (winWidth > 0 && winWidth <= 767) {
						A.all('.child-menu').each(
							function() {
								this.setStyle('left', '');
							}
						);
					}
				}
			);
		}

		var siteBreadcrumbs = A.one('.site-breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}

		var menuToggle = A.one('.menu-toggle');
		var firstTime = true;

		if (menuToggle) {
			menuToggle.on(
				'click',
				function(event) {
					var instance = this.ancestor('#wrapper');

					var addTransition = function() {
						instance.one('#heading').toggleClass('transition');
						instance.one('.page-wrapper').toggleClass('transition');
						instance.one('#navigation').toggleClass('transition');
					};

					event.preventDefault();

					var dockbar = A.getBody().one('.dockbar');
					var dockbarToggle = A.getBody().one('.dockbar-toggle');

					if (dockbar) {
						if (dockbar.hasClass('open')) {
							dockbar.removeClass('open');
						}
					}

					if (dockbarToggle) {
						if (dockbarToggle.hasClass('open')) {
							dockbarToggle.removeClass('open');
						}
					}

					if (instance.one('#heading').hasClass('open')) {
						setTimeout(function() {
							addTransition();
						}, 500);
					}
					else {
						addTransition();
					}

					instance.one('#heading').toggleClass('open');
					instance.one('.page-wrapper').toggleClass('open');
					instance.one('#navigation').toggleClass('open');

					// only for touch devices
					if (window.orientation != undefined) {
						instance.one('#navigation').once(
							'touchstart',
							function() {
								disableNavEditControls();

								instance.one('#navigation ul').all('> li').each(
									function() {
										var deleteTab = this.one('span.delete-tab');

										if (deleteTab) {
											if (!deleteTab.hasClass('aui-helper-hidden')) {
												deleteTab.addClass('aui-helper-hidden');
											}
										}
									}
								);
							}
						);

						instance.delegate(
							'mouseover',
							function() {
								var deleteTab = this.one('span.delete-tab');

								if (!deleteTab.hasClass('aui-helper-hidden')) {
									deleteTab.addClass('aui-helper-hidden');
								}
							},
							'#navigation ul li'
						);

						if (firstTime) {
							firstTime = false;

							// attach click event to edit controls
							var editControls = instance.one('#editControls');

							editControls.delegate(
								'click',
								function(event) {
									event.preventDefault();

									var navEditControlsToggle = false;

									if (!instance.one('#navigation ul li').hasClass('lfr-nav-deletable') || !instance.one('#navigation ul li').hasClass('lfr-nav-updateable')) {
										navEditControlsToggle = true;
									}

									instance.one('ul').all('> li').each(
										function() {
											var instance = this;
											var deleteTab = instance.one('span.delete-tab');

											if (navEditControlsToggle) {
												// turn on
												instance.addClass('lfr-nav-deletable lfr-nav-updateable yui3-dd-draggable yui3-dd-drop');

												if (deleteTab) {
													if (deleteTab.hasClass('aui-helper-hidden')) {
														deleteTab.removeClass('aui-helper-hidden');
													}
												}
											}
											else {
												instance.removeClass('lfr-nav-deletable lfr-nav-updateable yui3-dd-draggable yui3-dd-drop');

												if (deleteTab) {
													if (!deleteTab.hasClass('aui-helper-hidden')) {
														deleteTab.addClass('aui-helper-hidden');
													}
												}

												instance.one('a').detach('click');
											}
										}
									);

									if (navEditControlsToggle) {
										instance.detach('mouseover');
										alert('Navigation drag and drop enabled.');
									}
									else {
										instance.delegate(
											'mouseover',
											function() {
												var deleteTab = this.one('span.delete-tab');

												if (!deleteTab.hasClass('aui-helper-hidden')) {
													deleteTab.addClass('aui-helper-hidden');
												}
											},
											'#navigation ul li'
										);

										alert('Navigation drag and drop disabled.');
									}
								},
								'a'
							);
						}
					}
				}
			);
		}

		var dockbarToggle = A.one('.dockbar-toggle');

		if (dockbarToggle) {
			dockbarToggle.on(
				'click',
				function(event) {
					var instance = this;

					event.preventDefault();

					instance.toggleClass('open');
					instance.ancestor('body').one('.dockbar').toggleClass('open');

					A.one('div.aui-menu').delegate(
						'click',
						function(event) {
							event.preventDefault();
							var clickEl = this;

							clickEl.ancestor('.dockbar').removeClass('shift-left');
						},
						'ul li .nav-mobile-back'
					);

					A.one('.dockbar ul li.add-content a').on(
						'mouseleave',
						function(event) {
							A.one('.dockbar ul li#_145_addContent a').detach('mouseleave');
						}
					);

					A.one('.dockbar ul li.add-content a').on(
						'click',
						function(event) {
							var contentMenu = A.one('div.add-content-menu');

							setTimeout(
								function() {
									A.one('.dockbar').addClass('shift-left');
								},
								400
							);
						}
					);
				}
			);
		}

		// portlet configuration menu turn tabs into drop down
		if (A.one('body.portal-popup form ul.aui-tabview-list')) {
			A.all('body.portal-popup form ul.aui-tabview-list').each(
				function() {
					var instance = this;

					if (!instance.ancestor('.edit-permissions')) {
						instance.plug(A.Brighton.listToDropdown);
					}
				}
			);
		}

		var portalPopup = A.one('.portal-popup');

		if (portalPopup) {
			if (isMobile){
				portalPopup.all('ul.aui-tabview-list').plug(A.Brighton.listToDropdown);
			}
		}
	}
);
