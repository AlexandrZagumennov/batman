/* Фоновая музыка */

const music = () => {
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
};

export { music };