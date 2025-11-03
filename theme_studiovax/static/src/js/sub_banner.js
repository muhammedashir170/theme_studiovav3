

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.AboutContent = publicWidget.Widget.extend({
    selector: '.ac-about-content',
    
    /**
     * @override
     */
    start: function () {
        this._super.apply(this, arguments);
        this._initCounterAnimation();
        this._initCardInteractions();
        return this._super.apply(this, arguments);
    },

    /**
     * Initialize counter animation using Intersection Observer
     */
    _initCounterAnimation: function () {
        const self = this;
        const counters = this.el.querySelectorAll('.ac-count');
        
        if (!counters || counters.length === 0) {
            return;
        }

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.classList.contains('ac-counted')) {
                    self._animateCounter(entry.target);
                    entry.target.classList.add('ac-counted');
                }
            });
        }, observerOptions);

        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    },

    /**
     * Animate a single counter
     * @param {HTMLElement} counter - Counter element
     */
    _animateCounter: function (counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;

        counter.classList.add('ac-counting');

        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
                counter.classList.remove('ac-counting');
            }
        };

        updateCounter();
    },

    /**
     * Initialize card interactions
     */
    _initCardInteractions: function () {
        const cards = this.el.querySelectorAll('.ac-stat-card');
        
        if (!cards || cards.length === 0) {
            return;
        }

        cards.forEach((card) => {
            // Add hover effect with 3D tilt
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'transform 0.1s ease';
            });

            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `
                    translateY(-8px) 
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                `;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
            });

            // Add click ripple effect
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.classList.add('ac-ripple');
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: radial-gradient(circle, rgba(193, 255, 114, 0.4) 0%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: scale(0);
                    animation: ac-ripple-animation 0.6s ease-out;
                `;
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation
        if (!document.getElementById('ac-ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ac-ripple-styles';
            style.textContent = `
                @keyframes ac-ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                .ac-ripple {
                    z-index: 1;
                }
            `;
            document.head.appendChild(style);
        }
    },

    /**
     * @override
     */
    destroy: function () {
        // Clean up any event listeners or observers
        const cards = this.el.querySelectorAll('.ac-stat-card');
        cards.forEach((card) => {
            card.replaceWith(card.cloneNode(true));
        });
        
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.AboutContent;

