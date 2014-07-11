<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${the_title} - ${company_name}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	<link rel="stylesheet" id="mckinley-raleway-css" href="http://fonts.googleapis.com/css?family=Raleway:400,700,800,900" type="text/css" media="all">
	<link rel="stylesheet" id="mckinley-open-sans-css" href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,800,700" type="text/css" media="all">

	${theme.include(top_head_include)}
</head>

<body class="${css_class}">

<a href="#main-content" id="skip-to-content"><@liferay.language key="skip-to-content" /></a>

${theme.include(body_top_include)}

<#if is_signed_in>
	<@liferay.dockbar />
</#if>

<#if !is_signed_in>
	<a href="${sign_in_url}" data-redirect="${is_login_redirect_required?string}" id="sign-in" rel="nofollow" style="position:absolute; right: 0px; color: #939393; font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 2em; font-weight: 700; padding: 5px 20px 5px 20px;">${sign_in_text}</a>
</#if>

<div class="container-fluid" id="wrapper">
	<header id="banner" role="banner">
		<div id="heading">
			<a class="site-default-url" href="${site_default_url}" title="<@liferay.language_format arguments="${site_name}" key="go-to-x" />"></a>
			<h1 class="site-title">
				<a class="site-name" href="${site_default_url}" title="<@liferay.language_format arguments="${site_name}" key="go-to-x" />">
					${site_name}
				</a>


			<!--	<#if show_site_name>
					<span class="site-name" title="<@liferay.language_format objects="${site_name}" key="go-to-x" />">
						${site_name}
					</span>
				</#if>												-->
			</h1>

			<h2 class="site-description">
				This is a copy of a theme called McKinley
			</h2>

			<!--<h2 class="page-title">
				<span>${the_title}</span>
			</h2>  -->
		</div>

		

		<#if has_navigation || is_signed_in>
			<#include "${full_templates_path}/navigation.ftl" />
		</#if>
	</header>

	<div id="content">

		<#if selectable>
			${theme.include(content_include)}
		<#else>
			${portletDisplay.recycle()}

			${portletDisplay.setTitle(the_title)}

			${theme.wrapPortlet("portlet.ftl", content_include)}
		</#if>
		
	</div>

	<footer id="footer" role="contentinfo">
		<div class="site-footer">
			<p class="powered-by">
				<a href="http://www.liferay.com" rel="external"><@liferay.language key="powered-by" /> Liferay</a>
			</p>
		</div>
	</footer>
</div>

${theme.include(body_bottom_include)}

${theme.include(bottom_include)}

</body>

</html>