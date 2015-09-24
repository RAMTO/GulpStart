function replaceHtml(string_to_replace){
    return string_to_replace.replace(/&nbsp;/g, ' ').replace(/<br.*?>/g, '\u2028');
}

var Plugins = {
	selectors: {
		customSelect: '.js-custom-select',
		customCheckbox: '.js-custom-checkbox',
		carousel: '.js-carousel',
		carouselVertical: '.js-carousel-vertical',
		carouselControlPrev: '.js-carousel-control-prev',
		carouselControlNext: '.js-carousel-control-next',
		carouselVerticalControlPrev: '.js-carousel-vertical-control-prev',
		carouselVerticalControlNext: '.js-carousel-vertical-control-next',
	},
	init: function () {
		var self = this;

		self.$window = $(window);
		self.$customSelect = $(this.selectors.customSelect);
		self.$customCheckbox = $(this.selectors.customCheckbox);
		self.$carousel = $(this.selectors.carousel);
		self.$carouselVertical = $(this.selectors.carouselVertical);
		self.$carouselControlPrev = $(this.selectors.carouselControlPrev);
		self.$carouselControlNext = $(this.selectors.carouselControlNext);

		// Init Chosen
		self.initChosen();		

		// Init ICheck
		self.initICheck();

		// Init Owl
		self.initOwl();

		// Init jCarouselLite
		self.initJCarouselLite();
	},
	initChosen: function () {
		var self = this,
			options = {
				disable_search_threshold: 100
			};

		// Init plugin
		self.$customSelect.chosen(options);
	},
	initICheck: function () {
		var self = this,
			options = {
				checkboxClass: 'custom-checkbox',
				radioClass: 'custom-radio'
			};

		// Init plugin
		self.$customCheckbox.iCheck(options);
	},
	initOwl: function () {
		var self = this,
			options = {
				items: 4,
				margin: 30
			};

		// Init plugin
		self.$carousel.owlCarousel(options);

		self.$carouselControlPrev.on('click', function (e) {
			e.preventDefault();
			self.$carousel.trigger('prev.owl.carousel');
		});

		self.$carouselControlNext.on('click', function (e) {
			e.preventDefault();
			self.$carousel.trigger('next.owl.carousel');
		});
	},
	initJCarouselLite: function () {
		var self = this,
			options = {
				vertical: true,
    			btnPrev: self.selectors.carouselVerticalControlPrev,
				btnNext: self.selectors.carouselVerticalControlNext,
			};

		// Init plugin
		self.$carouselVertical.jCarouselLite(options);

		// Fix carousel height
		self.$carouselVertical.height(self.$carouselVertical.height() - 12)
	}
};

var MainObject = {
	selectors: {},
	init: function () {

	}
};

// Document ready
$(function () {

	// Init Plugins
	Plugins.init();
});