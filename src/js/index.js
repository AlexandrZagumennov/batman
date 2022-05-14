/* Меню-бургер */
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
	navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
	navigation.classList.remove('navigation_active');
});

navigation.addEventListener('click', (event) => {
	const closeNav = event.target.closest('.navigation__link');

	if (closeNav) {
		navigation.classList.remove('navigation_active');
	}
});

/* Фоновая музыка */
try {
	const mute = document.querySelector('.mute__input');
	const audio = new Audio ('audio/waterTower.mp3');

	const checkMute = () => {
		if (mute.checked) {
			audio.play();
		} else {
			audio.pause();
		}
	};

	if (mute) {
		setTimeout(checkMute, 2000);
	}

	mute.addEventListener('change', checkMute);
} catch {
	console.error('На этой странице нет фоновой музыки')
}


/* Слайдеры */
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

