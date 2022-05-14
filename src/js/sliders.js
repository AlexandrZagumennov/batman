/* Слайдеры */
const sliders = () => {
	try {
		const sliderThumbs = new Swiper ('.slider-thumbs', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 3,
			centeredSlides: true,
			loopedSlides: 4,
		});
		
		const sliderMain = new Swiper ('.slider-main', {
			loop: true,
			loopedSlides: 4,
		});
		
		// При клике на слайд этот слайд переносится в центр
		sliderThumbs.on('click', swiper => {
			swiper.slideTo(swiper.clickedIndex)
		});
		
		// Объединение слайдеров
		sliderThumbs.controller.control = sliderMain;
		sliderMain.controller.control = sliderThumbs;
		
		// Постановка видео на паузу при переключении слайдера на другое видео
		const videos = document.querySelectorAll('video');
		
		sliderMain.on('slideChange', () => {
			videos.forEach(video => {
				video.pause();
			});
		});
		
		// Отображение пагинации при клике на стрелку
		const paginationButton = document.querySelector('.pagination__arrow');
		const pagination = document.querySelector('.pagination');
		
		paginationButton.addEventListener('click', () => {
			pagination.classList.toggle('pagination_active');
		});
	} catch {
		console.error('На этой странице нет слайдеров')
	};
};

export { sliders };