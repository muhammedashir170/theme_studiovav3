

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.PricingSection = publicWidget.Widget.extend({
    selector: '.pr-pricing-section',
    
    start: function () {
        this._super.apply(this, arguments);
        this._initMarquee();
        this._initCardAnimations();
        this._initBillingToggle();
        this._initComparisonToggle();
    },

    _initMarquee: function () {
        var self = this;
        var $marqueeTrack = this.$('.pr-marquee-track');
        
        if ($marqueeTrack.length) {
            // Clone the logos INSIDE the track for seamless loop
            var $logos = $marqueeTrack.find('.pr-partner-logo');
            var $clonedLogos = $logos.clone();
            $clonedLogos.attr('aria-hidden', 'true'); // Accessibility
            $marqueeTrack.append($clonedLogos);
            
            // Pause animation on hover
            this.$('.pr-partners-marquee').on('mouseenter', function() {
                $marqueeTrack.css('animation-play-state', 'paused');
            });
            
            this.$('.pr-partners-marquee').on('mouseleave', function() {
                $marqueeTrack.css('animation-play-state', 'running');
            });
        }
    },

    _initCardAnimations: function () {
        var self = this;
        var $cards = this.$('.pr-pricing-card');
        
        if ($cards.length) {
            // Button hover effects
            this.$('.pr-cta-button').on('mouseenter', function() {
                $(this).addClass('hovered');
            });
            
            this.$('.pr-cta-button').on('mouseleave', function() {
                $(this).removeClass('hovered');
            });
        }
    },
    
    _initBillingToggle: function () {
        var self = this;
        var $toggle = this.$('#pr-billing-toggle');
        var $labels = this.$('.pr-toggle-label');
        
        if ($toggle.length) {
            $toggle.on('change', function() {
                var isYearly = $(this).is(':checked');
                
                // Update active label
                $labels.removeClass('active');
                if (isYearly) {
                    $labels.last().addClass('active');
                } else {
                    $labels.first().addClass('active');
                }
                
                // Update prices
                self.$('.pr-price').each(function() {
                    var $price = $(this);
                    var monthly = $price.data('monthly');
                    var yearly = $price.data('yearly');
                    
                    if (isYearly) {
                        $price.text(yearly);
                    } else {
                        $price.text(monthly);
                    }
                });
                
                // Update billing cycle text
                self.$('.pr-billing-cycle').text(isYearly ? 'yearly' : 'monthly');
            });
        }
    },
    
    _initComparisonToggle: function () {
        var self = this;
        var $compareBtn = this.$('#pr-show-comparison');
        var $comparisonTable = this.$('#pr-comparison-table');
        
        if ($compareBtn.length && $comparisonTable.length) {
            $compareBtn.on('click', function() {
                var isVisible = $comparisonTable.is(':visible');
                
                if (isVisible) {
                    $comparisonTable.slideUp(400);
                    $compareBtn.removeClass('active');
                } else {
                    $comparisonTable.slideDown(400);
                    $compareBtn.addClass('active');
                }
            });
        }
    },

    destroy: function () {
        // Clean up event listeners
        this.$('.pr-partners-marquee').off('mouseenter mouseleave');
        this.$('.pr-pricing-card').off('mouseenter mouseleave');
        this.$('.pr-cta-button').off('mouseenter mouseleave click');
        this.$('#pr-billing-toggle').off('change');
        this.$('#pr-show-comparison').off('click');
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.PricingSection;

