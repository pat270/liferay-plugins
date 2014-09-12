<div class="mainCarousel">
	<div class="mainCarouselImage mainCarouselImage1" style="background-image:url(${Image1530.getData()});"></div>
	<div class="mainCarouselImage mainCarouselImage2" style="background-image:url(${Image1762.getData()});"></div>
</div>

<script>
YUI().use('aui-carousel', function(Y) {
	new Y.Carousel({
		contentBox: '.mainCarousel',
		intervalTime: 5
	}).render();
});
</script>