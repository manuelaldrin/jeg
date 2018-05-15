( function($) {

	var app =  {

		init: function(){
			this.customFunction();
			this.featpropFunction();
			this.chainHeightFunction();
			this.fixedNav();
		},

		customFunction: function(){
			jQuery('.arrows').click(function(){ 
				jQuery("html, body").animate({ 
					scrollTop: jQuery('#cta-id').offset().top 
				}, "slow"); 
			})
		},

		featpropFunction: function(){

			 // Slick for FP Details
	        jQuery('.featprop-details-holder').slick({
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: true,
	            autoplay: true,
	            autoplaySpeed: 5000,
	            dots: false,
	            appendArrows: jQuery('.featprop-details-nav'),
	            prevArrow: '<div class="slick-prev fp-arrows"></div>',
	            nextArrow: '<div class="slick-next fp-arrows"></div>',
	            asNavFor: '.featprop-photo-holder'
	        });
	        // Slick for FP Image
	        jQuery('.featprop-photo-holder').slick({
	            infinite: true, 
	            slidesToShow: 1, 
	            slidesToScroll: 1, 
	            arrows: false, 
	            autoplay: true, 
	            autoplaySpeed: 5000, 
	            dots: false, 
	            asNavFor: '.featprop-details-holder'
	        });

		},

		chainHeightFunction: function(){
			setTimeout(function(){
				var largestHeight = 0;
				jQuery('.chain-height-about').each(function(){ 
					if (jQuery(this).outerHeight() > largestHeight){
		             	largestHeight = jQuery(this).outerHeight();
		             	console.log(largestHeight);
		            }
				})
				jQuery('.about-photo').height(largestHeight);
			},10)

			setTimeout(function(){
				var largestHeight = 0;
				jQuery('.chain-height-contact').each(function(){ 
					if (jQuery(this).outerHeight() > largestHeight){
		             	largestHeight = jQuery(this).outerHeight();
		             	console.log(largestHeight);
		            }
				})
				jQuery('.contact-photo').height(largestHeight);
			},10)
		},

		fixedNav: function(){

			jQuery(window).scroll(function () {
	            var scroll = jQuery(window).scrollTop();
                if (scroll > 200) {
                    jQuery('.fixed-menu').addClass('open-menu');
                } else {
                    jQuery('.fixed-menu').removeClass('open-menu');
                }
	        });

			jQuery('.fixed-menu').click(function(){
				jQuery('.fixed-menu').toggleClass('menu-click');
				jQuery('.fixed-nav-wrap').toggleClass('menu-visible');
				jQuery('body').toggleClass('overflow-body');
			})
			
		}



	} 

	jQuery(document).ready( function() {
		app.init();
	});

	jQuery(window).load(function () { 
		
	});

	jQuery(window).resize(function () { 
		app.chainHeightFunction();
	});
	
})(jQuery);