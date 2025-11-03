

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.WhyChooseUs = publicWidget.Widget.extend({
    selector: '.wc-why-choose-us',
    
    start: function () {
        this._super.apply(this, arguments);
        this._initNumberCounter();
        this._initCardInteractions();
        this._initAvatarHover();
    },

    _initNumberCounter: function () {
        var self = this;
        var $statsNumbers = this.$('.wc-stats-number');
        
        // Only animate if the element is in viewport
        var observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    self._animateNumber($(entry.target));
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        $statsNumbers.each(function() {
            observer.observe(this);
        });
    },

    _animateNumber: function ($element) {
        var text = $element.text();
        var number = parseFloat(text.replace(/[^\d.]/g, ''));
        var suffix = text.replace(/[\d.]/g, '');
        
        if (isNaN(number)) return;
        
        var duration = 1500;
        var start = 0;
        var increment = number / (duration / 16);
        var current = start;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            
            // Format number based on original
            var displayValue;
            if (text.includes('%')) {
                displayValue = current.toFixed(1) + suffix;
            } else if (text.includes('+')) {
                displayValue = Math.floor(current) + suffix;
            } else {
                displayValue = Math.floor(current);
            }
            
            $element.text(displayValue);
        }, 16);
    },

    _initCardInteractions: function () {
        var self = this;
        
        // Testimonial card parallax effect
        this.$('.wc-testimonial-card').on('mousemove', function(e) {
            var $card = $(this);
            var cardOffset = $card.offset();
            var x = e.pageX - cardOffset.left;
            var y = e.pageY - cardOffset.top;
            var centerX = $card.width() / 2;
            var centerY = $card.height() / 2;
            var rotateX = (y - centerY) / 20;
            var rotateY = (centerX - x) / 20;
            
            $card.css({
                'transform': 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)',
                'transition': 'none'
            });
        });
        
        this.$('.wc-testimonial-card').on('mouseleave', function() {
            $(this).css({
                'transform': 'translateY(-8px)',
                'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            });
        });
        
        // Projects card image zoom
        this.$('.wc-image-wrapper').on('mouseenter', function() {
            $(this).find('img').css('transform', 'scale(1.1)');
        });
        
        this.$('.wc-image-wrapper').on('mouseleave', function() {
            $(this).find('img').css('transform', 'scale(1)');
        });
    },

    _initAvatarHover: function () {
        var self = this;
        var $avatars = this.$('.wc-avatar-small');
        
        $avatars.on('mouseenter', function() {
            $(this).css({
                'transform': 'scale(1.3) translateY(-8px)',
                'z-index': '20',
                'box-shadow': '0 8px 24px rgba(0, 0, 0, 0.2)'
            });
        });
        
        $avatars.on('mouseleave', function() {
            $(this).css({
                'transform': 'scale(1) translateY(0)',
                'z-index': '1'
            });
        });
    },

    destroy: function () {
        // Clean up event listeners
        this.$('.wc-testimonial-card').off('mousemove mouseleave');
        this.$('.wc-image-wrapper').off('mouseenter mouseleave');
        this.$('.wc-avatar-small').off('mouseenter mouseleave');
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.WhyChooseUs;

