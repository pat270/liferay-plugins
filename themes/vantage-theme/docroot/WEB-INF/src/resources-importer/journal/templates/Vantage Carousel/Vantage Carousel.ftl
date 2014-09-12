<div id="thumbnailCarouselWrapper">
	<div id="leftPanelWrapper">
		<h3 class="widgetTitle">
				<span class='vantageCarouselTitle'>
					<span class='vantageCarouselTitleText'>${widgetTitle.getData()}</span>
					<a id="scrollRightButton" class="scrollButton">&gt</a>
					<a id="scrollLeftButton" class="scrollButton">&lt</a>
				</span>
		</h3>
		<div class="vantageCarouselWrapper">
			<div id="vantageCarousel">
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle1.getData()}</a>
					</h3>
				</div>
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle2.getData()}</a>
					</h3>
				</div>
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle3.getData()}</a>
					</h3>
				</div>
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle4.getData()}</a>
					</h3>
				</div>
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle5.getData()}</a>
					</h3>
				</div>
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle6.getData()}</a>
					</h3>
				</div>
				<div class="thumbnailWrapper">
					<div class="imageLinkWrapper">
					</div>
					<h3 class="titleLinkWrapper">
						<a class="thumbnailTitle">${postTitle7.getData()}</a>
					</h3>
				</div>
			</div>
		</div>
	</div>
	<div id="rightPanelWrapper">
		<p class="description">${sideDescription.getData()}</p>
	</div>
</div>

<script>

YUI().use('node', function (X) {
	var carousel = X.one('#vantageCarousel');
	var currentXScroll = 0;
	var maxXscroll = 6 * 257;
	var thumbnailWidth = 257;

	X.one('#scrollRightButton').on('click', function (event) {
		currentXScroll += thumbnailWidth;
		if (currentXScroll > maxXscroll) {
			currentXScroll -= thumbnailWidth;
		}

		carousel.setStyle('left', -1 * currentXScroll);
	});
	X.one('#scrollLeftButton').on('click', function (event) {
		currentXScroll -= thumbnailWidth;
		if (currentXScroll < 0) {
			currentXScroll += thumbnailWidth;
		}

		carousel.setStyle('left', -1 * currentXScroll);
	});
});

</script>