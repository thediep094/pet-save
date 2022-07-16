import Splide from '@splidejs/splide';

// Create and mount the thumbnails slider.
var secondarySlider = new Splide( '#secondary-slider', {
	  type   : 'loop',
    perPage: 4,
    perMove: 1,
    isNavigation: true,
} ).mount();

// Create the main slider.
var primarySlider = new Splide( '#primary-slider', {
	type       : 'fade',
	// heightRatio: 0.5,
	pagination : false,
	arrows     : false,
	cover      : true,
} );

// Set the thumbnails slider as a sync target and then call mount.
primarySlider.sync( secondarySlider ).mount();
