const slider = () => {
	const slides = document.querySelectorAll('.slider__item');
	const paginations = document.querySelectorAll('.paginator');
	const wrapper = document.querySelector('.slider__wrapper');
	const active = document.querySelector('.paginator__active');

	let activeSlide = 1;

	slides.forEach((item, i) => {
		item.addEventListener('click', () => {
			activeSlide = i;
			changeClass(i);
		})
	})
	
	paginations.forEach((item, i) => {
		item.addEventListener('click', () => {
			activeSlide = i;
			changeClass(i);
		})
	})

	const changeClass = (index) => {
		wrapper.classList.remove('slide1', 'slide2', 'slide3');
		wrapper.classList.add(`slide${index+1}`);
		active.classList.remove('slide1', 'slide2', 'slide3');
		active.classList.add(`slide${index+1}`);
	}
}

export default slider;