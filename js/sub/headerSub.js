'use strict';

//menu fade animation
const navSub = document.querySelector('.nav__menu--sub');

const handleHover = function (e) {
	if (e.target.classList.contains('nav__link')) {
		const link = e.target;
		const siblings = link.closest('.nav__menu--sub').querySelectorAll('.nav__link');

		siblings.forEach((el) => {
			if (el !== link) el.style.opacity = this;
		});
	}
};

// Passing "argument" into handler
navSub.addEventListener('mouseover', handleHover.bind(0.5));
navSub.addEventListener('mouseout', handleHover.bind(1));

// NAVBAR
// const nav = document.querySelector(".nav__menu");
const navItemAll = document.querySelectorAll('.nav__item');
const btnTable = document.querySelector('#btn-table');
const btnTableSml = document.querySelector('.btn--sml');
const header = document.querySelector('#header');
const navHeight = navSub.getBoundingClientRect().height;
const navSml = document.querySelector('.nav__sml');

const stickyNav = function (entries) {
	const [entry] = entries;

	if (!entry.isIntersecting) {
		navSub.classList.add('sticky');
		btnTable.style.color = 'black';
		navItemAll.forEach(function (item) {
			item.style.color = 'black';
		});
	} else {
		navSub.classList.remove('sticky');
		btnTable.style.color = 'whitesmoke';
		navItemAll.forEach(function (item) {
			item.style.color = 'whitesmoke';
		});
	}
};

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0.6,
});

headerObserver.observe(header);

// REVEAL SECTIONS

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove('section--hidden');
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.1,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add('section--hidden');
});
