<div class="columns-1-2-3" id="main-content" role="main">
	<div class="portlet-layout row">
		<div class="portlet-column portlet-column-only col-md-12" id="column-1">
			$processor.processColumn("column-1", "portlet-column-content portlet-column-content-only")
		</div>
	</div>

	<div class="portlet-layout row">
		<div class="portlet-column portlet-column-first col-md-9">
			<div class="portlet-layout">
				<div class="portlet-column portlet-column-first col-md-12" id="column-2">
					$processor.processColumn("column-2", "portlet-column-content portlet-column-content-first")
				</div>

				<div class="portlet-layout">
					<div class="portlet-column portlet-column-first col-md-4" id="column-3">
						$processor.processColumn("column-3", "portlet-column-content portlet-column-content-first")
					</div>

					<div class="portlet-column col-md-4" id="column-4">
						$processor.processColumn("column-4", "portlet-column-content")
					</div>

					<div class="portlet-column portlet-column-last col-md-4" id="column-5">
						$processor.processColumn("column-5", "portlet-column-content portlet-column-content-last")
					</div>
				</div>
			</div>
		</div>

		<div class="portlet-column portlet-column-last col-md-3" id="column-6">
			$processor.processColumn("column-6", "portlet-column-content portlet-column-content-last")
		</div>
	</div>
</div>
