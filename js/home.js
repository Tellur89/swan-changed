'use strict';
//MODAL WINDOW
// const events = document.querySelector('.events');
const loyal = document.querySelector('.loyal');
// const functions = document.querySelector('.functions');
const newsletter = document.querySelector('.newsletter-pop');

// const overlayEvents = document.querySelector('.overlay-events');
const overlayLoyal = document.querySelector('.overlay-loyal');
// const overlayFunctions = document.querySelector('.overlay-functions');
const overlayNewsletter = document.querySelector('.overlay-newsletter');

// const btnCloseModalEvents = document.querySelector('.close-modal-events');
const btnCloseModalLoyal = document.querySelector('.close-modal-loyal');
// const btnCloseModalFunctions = document.querySelector('.close-modal-functions');
const btnCloseModalNewsletter = document.querySelector('.close-modal-newsletter');

// const btnsOpenModalEventsNav = document.querySelector('.btn-whatson--nav');
// const btnsOpenModalEvents = document.querySelector('.btn-whatson');
const btnsOpenModalLoyal = document.querySelector('.btn-loyal');
// const btnsOpenModalFunctions = document.querySelector('.btn-functions');

//OPEN
// const openModalEventsNav = function () {
// 	events.classList.remove('hidden');
// 	overlayEvents.classList.remove('hidden');
// };

// const openModalEvents = function () {
// 	events.classList.remove('hidden');
// 	overlayEvents.classList.remove('hidden');
// };

const openModalLoyal = function () {
	loyal.classList.remove('hidden');
	overlayLoyal.classList.remove('hidden');
};

// const openModalFunctions = function () {
// 	functions.classList.remove('hidden');
// 	overlayFunctions.classList.remove('hidden');
// };

const openModalNewsletter = function () {
	newsletter.classList.remove('hidden');
	overlayNewsletter.classList.remove('hidden');
};

// //CLOSE
// const closeModalEvents = function () {
// 	events.classList.add('hidden');
// 	overlayEvents.classList.add('hidden');
// };

const closeModalLoyal = function () {
	loyal.classList.add('hidden');
	overlayLoyal.classList.add('hidden');
};

// const closeModalFunctions = function () {
// 	functions.classList.add('hidden');
// 	overlayFunctions.classList.add('hidden');
// };
const closeModalNewsletter = function () {
	newsletter.classList.add('hidden');
	overlayNewsletter.classList.add('hidden');
};

// //OPEN FUNCTIONS
// btnsOpenModalEventsNav.addEventListener('click', openModalEvents);
// btnsOpenModalEvents.addEventListener('click', openModalEvents);
btnsOpenModalLoyal.addEventListener('click', openModalLoyal);
// btnsOpenModalFunctions.addEventListener('click', openModalFunctions);

// //CLOSE FUNCTIONS
// btnCloseModalEvents.addEventListener('click', closeModalEvents);
btnCloseModalLoyal.addEventListener('click', closeModalLoyal);
// btnCloseModalFunctions.addEventListener('click', closeModalFunctions);
btnCloseModalNewsletter.addEventListener('click', closeModalNewsletter);

// overlayEvents.addEventListener('click', closeModalEvents);
overlayLoyal.addEventListener('click', closeModalLoyal);
// overlayFunctions.addEventListener('click', closeModalFunctions);
overlayNewsletter.addEventListener('click', closeModalNewsletter);

document.addEventListener('keydown', function (e) {
	if (
		(e.key === 'Escape' && !events.classList.contains('hidden')) ||
		(e.key === 'Escape' && !loyal.classList.contains('hidden')) ||
		(e.key === 'Escape' && !functions.classList.contains('hidden')) ||
		(e.key === 'Escape' && !newsletter.classList.contains('hidden'))
	) {
		// closeModalEvents();
		closeModalLoyal();
		// closeModalFunctions();
		closeModalNewsletter();
	}
});

// Newsletter popup
let poppy = sessionStorage.getItem('myPopup');

if (!poppy) {
	function PopUp() {
		openModalNewsletter();
	}

	setTimeout(function () {
		PopUp();
	}, 3000); // 1000 to load it after 1 second from page load

	sessionStorage.setItem('myPopup', 'true');
}
