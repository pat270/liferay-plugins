<div class="columns-1-3" id="main-content" role="main">
	<div class="portlet-layout row-fluid">
		<div class="portlet-column portlet-column-only span12" id="column-1">
			$processor.processColumn("column-1", "portlet-column-content portlet-column-content-only")
		</div>
	</div>

	<div class="portlet-layout row-fluid">
		<div class="portlet-column portlet-column-first span4" id="column-2">
			$processor.processPortlet("3")
			$processor.processPortlet("71_INSTANCE_CM7vQZhfFZ8s")
			$velocityPortletPreferences.setValue("displayStyle", "from-level-0")
			$processor.processColumn("column-2", "portlet-column-content portlet-column-content-first")
		</div>

		<div class="portlet-column span4" id="column-3">
			$processor.processPortlet("193_INSTANCE_gF8wxVmQ0gtp")
			$velocityPortletPreferences.setValue("displayStyle", "title-list")
			$processor.processColumn("column-3", "portlet-column-content")
		</div>

		<div class="portlet-column portlet-column-last span4" id="column-4">
			$processor.processPortlet("58")
			$processor.processPortlet("141_INSTANCE_5HYlAVLND54S")
			$processor.processColumn("column-4", "portlet-column-content portlet-column-content-last")
		</div>
	</div>
</div>