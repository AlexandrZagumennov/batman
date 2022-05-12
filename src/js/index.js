const sliderThumbs = new Swiper ('.slider-thumbs', {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 3,
	centeredSlides: true,
});

// При клике на слайд этот слайд переносится в центр
sliderThumbs.on('click', swiper => {
	swiper.slideTo(swiper.clickedIndex)
});

const sliderMain = new Swiper ('.slider-main', {
	loop: true,
	//объединение слайдеров
	thumbs: {
		swiper: sliderThumbs,
	}
});
