

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.TestimonialSection = publicWidget.Widget.extend({
    selector: '.tm-testimonial',
    
    start: function () {
        this._super.apply(this, arguments);
        this._initCardAnimations();
        this._initStarAnimations();
    },

    _initCardAnimations: function () {
        var self = this;
        
        // Slide animation pause on hover
        this.$('.tm-card').on('mouseenter', function() {
            var $card = $(this);
            
            // Get current transform values
            var computedStyle = window.getComputedStyle($card[0]);
            var matrix = computedStyle.transform;
            var translateX = 0;
            var translateY = 0;
            
            if (matrix && matrix !== 'none') {
                var values = matrix.split('(')[1].split(')')[0].split(',');
                translateX = parseFloat(values[4]) || 0;
                translateY = parseFloat(values[5]) || 0;
            }
            
            // Pause CSS animation
            $card.css('animation-play-state', 'paused');
            
            // Smoothly transition to lifted position
            var startTime = Date.now();
            var duration = 400;
            
            function easeOutCubic(t) {
                return 1 - Math.pow(1 - t, 3);
            }
            
            function smoothLift() {
                var elapsed = Date.now() - startTime;
                var progress = Math.min(elapsed / duration, 1);
                var eased = easeOutCubic(progress);
                
                var finalX = 0;
                var finalY = -8 * eased;
                
                $card.css({
                    'transform': 'translateX(' + finalX + 'px) translateY(' + finalY + 'px)',
                    'transition': 'none'
                });
                
                if (progress < 1) {
                    requestAnimationFrame(smoothLift);
                } else {
                    $card.css({
                        'transform': 'translateX(0) translateY(-8px)',
                        'transition': 'transform 0.3s ease'
                    });
                }
            }
            
            requestAnimationFrame(smoothLift);
        });
        
        // Resume animation on mouse leave
        this.$('.tm-card').on('mouseleave', function() {
            var $card = $(this);
            
            $card.css({
                'animation-play-state': 'running',
                'transform': 'translateY(0)',
                'transition': 'transform 0.4s ease'
            });
            
            // Reset transition after animation
            setTimeout(function() {
                $card.css('transition', 'none');
            }, 400);
        });
        
        // Parallax effect for testimonial text on hover
        this.$('.tm-card').on('mousemove', function(e) {
            var $card = $(this);
            var $text = $card.find('.tm-testimonial-text');
            var cardOffset = $card.offset();
            var x = e.pageX - cardOffset.left;
            var y = e.pageY - cardOffset.top;
            var centerX = $card.width() / 2;
            var centerY = $card.height() / 2;
            var moveX = (x - centerX) / 30;
            var moveY = (y - centerY) / 30;
            
            $text.css({
                'transform': 'translate(' + moveX + 'px, ' + moveY + 'px)',
                'transition': 'none'
            });
        });
        
        this.$('.tm-card').on('mouseleave', function() {
            $(this).find('.tm-testimonial-text').css({
                'transform': 'translate(0, 0)',
                'transition': 'transform 0.3s ease'
            });
        });
    },

    _initStarAnimations: function () {
        var self = this;
        
        // Animate stars on card hover
        this.$('.tm-stars').on('mouseenter', function() {
            var $stars = $(this).find('li');
            
            $stars.each(function(index) {
                var $star = $(this);
                setTimeout(function() {
                    $star.css({
                        'transform': 'scale(1.2) rotate(10deg)',
                        'transition': 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    });
                    
                    setTimeout(function() {
                        $star.css({
                            'transform': 'scale(1) rotate(0deg)',
                            'transition': 'all 0.3s ease'
                        });
                    }, 300);
                }, index * 50);
            });
        });
    },

    destroy: function () {
        // Clean up event listeners
        this.$('.tm-card').off('mousemove mouseleave');
        this.$('.tm-stars').off('mouseenter');
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.TestimonialSection;

