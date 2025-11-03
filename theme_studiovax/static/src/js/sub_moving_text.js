

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.AboutImageSection = publicWidget.Widget.extend({
    selector: '.ai-about-img',
    
    start: function () {
        this._super.apply(this, arguments);
        
        // Ensure element exists
        if (!this.el || !this.$el) {
            return;
        }
        
        this._initMarquee();
    },

    _initMarquee: function () {
        var self = this;
        var $marqueeContent = this.$('.ai-marquee-content');
        
        // Check if marquee content exists
        if (!$marqueeContent.length) {
            return;
        }
        
        // Clone the marquee items for seamless loop
        var $items = $marqueeContent.find('.ai-marquee-item');
        
        if ($items.length) {
            // Clone all items to create seamless loop
            var $clonedItems = $items.clone();
            $clonedItems.attr('aria-hidden', 'true'); // Accessibility
            $marqueeContent.append($clonedItems);
            
            // Pause animation on hover (handled by CSS, but we can add additional effects)
            var $marquee = this.$('.ai-marquee');
            
            if ($marquee.length) {
                $marquee.on('mouseenter.marquee', function() {
                    if ($marqueeContent.length) {
                        $marqueeContent.css('animation-play-state', 'paused');
                    }
                });
                
                $marquee.on('mouseleave.marquee', function() {
                    if ($marqueeContent.length) {
                        $marqueeContent.css('animation-play-state', 'running');
                    }
                });
            }
            
            // Optional: Add individual item hover effects
            this.$('.ai-marquee-item').on('mouseenter.item', function() {
                var $item = $(this);
                if ($item && $item.length) {
                    $item.css('transform', 'scale(1.05)');
                }
            });
            
            this.$('.ai-marquee-item').on('mouseleave.item', function() {
                var $item = $(this);
                if ($item && $item.length) {
                    $item.css('transform', 'scale(1)');
                }
            });
        }
    },
    
    destroy: function () {
        // Clean up event listeners
        if (this.$el && this.$el.length) {
            var $marquee = this.$('.ai-marquee');
            if ($marquee && $marquee.length) {
                $marquee.off('mouseenter.marquee mouseleave.marquee');
            }
            
            var $items = this.$('.ai-marquee-item');
            if ($items && $items.length) {
                $items.off('mouseenter.item mouseleave.item');
            }
        }
        this._super.apply(this, arguments);
    },
});

