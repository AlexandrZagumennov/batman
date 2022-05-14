/* Меню-бургер */

const burger = () => {
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
};

export {burger};