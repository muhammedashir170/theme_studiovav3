

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.FeaturedProjectsSlider = publicWidget.Widget.extend({
    selector: '.fp-featured-projects',
    
    start: function () {
        this._super.apply(this, arguments);
        this._initOwlCarousel();
    },

    _initOwlCarousel: function () {
        var self = this;
        
        // Wait for owl carousel library to be loaded
        if (typeof $.fn.owlCarousel === 'undefined') {
            // Load Owl Carousel library dynamically
            this._loadOwlCarousel().then(function() {
                self._setupCarousel();
            });
        } else {
            this._setupCarousel();
        }
    },

    _loadOwlCarousel: function () {
        return new Promise(function(resolve, reject) {
            // Load Owl Carousel CSS
            if (!$('link[href*="owl.carousel"]').length) {
                $('<link>')
                    .attr('rel', 'stylesheet')
                    .attr('type', 'text/css')
                    .attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css')
                    .appendTo('head');
                
                $('<link>')
                    .attr('rel', 'stylesheet')
                    .attr('type', 'text/css')
                    .attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css')
                    .appendTo('head');
            }

            // Load Owl Carousel JS
            if (typeof $.fn.owlCarousel === 'undefined') {
                $.getScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js')
                    .done(function() {
                        resolve();
                    })
                    .fail(function() {
                        console.error('Failed to load Owl Carousel library');
                        reject();
                    });
            } else {
                resolve();
            }
        });
    },

    _setupCarousel: function () {
        var $carousel = this.$('.fp-owl-carousel');
        
        if ($carousel.length) {
            $carousel.owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 800,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1,
                        margin: 20
                    },
                    576: {
                        items: 1,
                        margin: 20
                    },
                    768: {
                        items: 2,
                        margin: 25
                    },
                    992: {
                        items: 2,
                        margin: 30
                    },
                    1200: {
                        items: 3,
                        margin: 30
                    },
                    1400: {
                        items: 4,
                        margin: 30
                    }
                }
            });

            // Add pause on hover functionality
            this._addHoverControl($carousel);
        }
    },

    _addHoverControl: function ($carousel) {
        // Pause on hover
        $carousel.on('mouseenter', function() {
            $carousel.trigger('stop.owl.autoplay');
        });

        $carousel.on('mouseleave', function() {
            $carousel.trigger('play.owl.autoplay', [2000]);
        });
    },

    destroy: function () {
        var $carousel = this.$('.fp-owl-carousel');
        if ($carousel.data('owl.carousel')) {
            $carousel.trigger('destroy.owl.carousel');
        }
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.FeaturedProjectsSlider;

