//==============================================================================
// TEXTAREA-MARKDOWN
//==============================================================================

// import TextareaMarkdown from 'textarea-markdown';

// let textarea = document.querySelector('textarea');
// new TextareaMarkdown(textarea);

//==============================================================================
// MODAL
//==============================================================================

// Open the Modal
// openModal(() => {
// 	document.getElementById('imageModal').style.display = 'block';
// });

// // Close the Modal
// closeModal(() => {
// 	document.getElementById('imageModal').style.display = 'none';
// });

//==============================================================================
// STICKY
//==============================================================================

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
	stickyTop();
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// console.log(sticky);
// console.log(navbar);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTop() {
	if (window.pageYOffset > sticky) {
		// console.log(window.pageYOffset);
		navbar.classList.add('navigation--sticky');
	} else {
		navbar.classList.remove('navigation--sticky');
	}
}

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
	stickyTop();
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// console.log(sticky);
// console.log(navbar);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
stickyTop(() => {
	if (window.pageYOffset > sticky) {
		// console.log(window.pageYOffset);
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
});

//==============================================================================
// NAVIGATION/FOOTER LINKS ACTIVE
//==============================================================================

if (document.URL.indexOf('/news') !== -1) {
	let navlink = document.getElementById('nav-news-border');
	navlink.classList.add('navigation__link-border--active');
	let footerlink = document.getElementById('footer-news-link');
	footerlink.classList.add('footer__link--active');
}

if (document.URL.indexOf('/sponsors') !== -1) {
	let navlink = document.getElementById('nav-sponsors-border');
	navlink.classList.add('navigation__link-border--active');
	let footerlink = document.getElementById('footer-sponsors-link');
	footerlink.classList.add('footer__link--active');
}

if (document.URL.indexOf('/squads') !== -1) {
	let navlink = document.getElementById('nav-squads-border');
	navlink.classList.add('navigation__link-border--active');
	let footerlink = document.getElementById('footer-squads-link');
	footerlink.classList.add('footer__link--active');
}

if (document.URL.indexOf('/about') !== -1) {
	let navlink = document.getElementById('nav-about-border');
	navlink.classList.add('navigation__link-border--active');
	let footerlink = document.getElementById('footer-about-link');
	footerlink.classList.add('footer__link--active');
}

//==============================================================================
// SLIDESHOW
//==============================================================================

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// plusSlides((n) => {
// 	showSlides((slideIndex += n));
// });

// // Thumbnail image controls
// currentSlide((n) => {
// 	showSlides((slideIndex = n));
// });

// showSlides((n) => {
// 	let i;
// 	let slides = document.getElementsByClassName('mySlides');
// 	let dots = document.getElementsByClassName('dot');

// 	if (n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = slides.length;
// 	}

// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = 'none';
// 	}

// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(' active', '');
// 	}

// 	if (typeof slides[slideIndex - 1] !== 'undefined') {
// 		slides[slideIndex - 1].style.display = 'block';
// 	}

// 	if (typeof slides[slideIndex - 1] !== 'undefined') {
// 		dots[slideIndex - 1].className += ' active';
// 	}
// });
