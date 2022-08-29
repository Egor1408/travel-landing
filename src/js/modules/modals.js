const modals = () => {
	const signupModal = document.querySelector('.signup__modal');
	const signUpClose = document.querySelector('.signup__close');

	const signinModal = document.querySelector('.signin__modal');
	const signInClose = document.querySelector('.signin__close');

	const loginBtn = document.querySelector('.btn-block__login');
	const bannerBtn = document.querySelector('.banner__btn');
	const destBtn = document.querySelector('.destinations__btn');
	const storyBtn = document.querySelector('.story__btn');

	bannerBtn.addEventListener('click', () => {
		signupModal.classList.add('open')
	})
	destBtn.addEventListener('click', () => {
		signupModal.classList.add('open')
	})
	storyBtn.addEventListener('click', () => {
		signupModal.classList.add('open')
	})
	signUpClose.addEventListener('click', () => {
		signupModal.classList.remove('open')
	})

	loginBtn.addEventListener('click', () => {
		signinModal.classList.add('open')
	})
	signInClose.addEventListener('click', () => {
		signinModal.classList.remove('open')
	})
}

export default modals;