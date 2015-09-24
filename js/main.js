function replaceHtml(string_to_replace){
    return string_to_replace.replace(/&nbsp;/g, ' ').replace(/<br.*?>/g, '\u2028');
}

function mobilecheck () {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

(function($,sr){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                    timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

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

var Main = {
	selectors: {
        sampleSelector: '.js-sampleSelector'
    },
	init: function () {
        var self = this;

        self.createObjects();
        self.bindEvents();
	},
    createObjects: function () {
        var self = this;

        self.$sampleSelector = $(self.selectors.sampleSelector);
    },
    bindEvents: function() {
        var self = this;

        self.$sampleSelector.on('click', function (e) {
            var $this = $(this);
            e.preventDefault();

            self.sampleFunction($this);
        });
    },
    sampleFunction: function ($obj) {
        var self = this;

        alert($obj);
    }
};

// Document ready
$(function () {

	// Init Plugins
	Plugins.init();

    // Init Main
    Main.init();
});
