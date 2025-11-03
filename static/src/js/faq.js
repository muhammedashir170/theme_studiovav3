
import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.FAQSection = publicWidget.Widget.extend({
    selector: '.faq-section',
    
    start: function () {
        this._super.apply(this, arguments);
        this._initAccordion();
        this._initHoverEffects();
    },

    _initAccordion: function () {
        var self = this;
        
        // Custom accordion implementation (no Bootstrap dependencies)
        self.$('.faq-button').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var $button = $(this);
            var $item = $button.closest('.faq-item');
            var $icon = $button.find('.faq-icon');
            var isCollapsed = $button.hasClass('faq-button-collapsed');
            
            // Toggle active state
            if (isCollapsed) {
                // Close other items (optional - remove if you want multiple open)
                self.$('.faq-item').not($item).each(function() {
                    var $otherItem = $(this);
                    var $otherButton = $otherItem.find('.faq-button');
                    var $otherIcon = $otherButton.find('.faq-icon');
                    
                    $otherItem.removeClass('faq-active');
                    $otherButton.addClass('faq-button-collapsed');
                    $otherIcon.css('transform', 'rotate(0deg) scale(1)');
                });
                
                // Open current item
                $item.addClass('faq-active');
                $button.removeClass('faq-button-collapsed');
                $icon.css('transform', 'rotate(45deg) scale(1.1)');
                
                setTimeout(function() {
                    $icon.css('transform', 'rotate(45deg) scale(1)');
                }, 200);
            } else {
                // Close current item
                $item.removeClass('faq-active');
                $button.addClass('faq-button-collapsed');
                $icon.css('transform', 'rotate(0deg) scale(1.1)');
                
                setTimeout(function() {
                    $icon.css('transform', 'rotate(0deg) scale(1)');
                }, 200);
            }
        });
    },

    _initHoverEffects: function () {
        var self = this;
        
        // Enhanced hover effects for accordion items
        this.$('.faq-item').on('mouseenter', function() {
            var $item = $(this);
            var $icon = $item.find('.faq-icon');
            
            if ($item.hasClass('faq-active')) {
                return; // Don't animate if already open
            }
            
            // Subtle bounce animation
            $icon.css({
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            });
        });
        
        this.$('.faq-item').on('mouseleave', function() {
            var $item = $(this);
            var $icon = $item.find('.faq-icon');
            
            if (!$item.hasClass('faq-active')) {
                $icon.css({
                    'transform': 'scale(1)',
                    'transition': 'all 0.3s ease'
                });
            }
        });
        
        // Question text slide effect
        this.$('.faq-button').on('mouseenter', function() {
            if ($(this).closest('.faq-item').hasClass('faq-active')) {
                return;
            }
            
            $(this).find('.faq-question').css({
                'transform': 'translateX(5px)',
                'transition': 'transform 0.3s ease'
            });
        });
        
        this.$('.faq-button').on('mouseleave', function() {
            $(this).find('.faq-question').css({
                'transform': 'translateX(0)',
                'transition': 'transform 0.3s ease'
            });
        });
    },

    destroy: function () {
        // Clean up event listeners
        this.$('.faq-button').off('click mouseenter mouseleave');
        this.$('.faq-item').off('mouseenter mouseleave');
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.FAQSection;

