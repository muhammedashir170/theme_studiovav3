
import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.MeetOurTeam = publicWidget.Widget.extend({
    selector: '.mot-meet-our-team',
    events: {
        'click .mot-meet-team': '_onTeamCardClick',
        'mouseenter .mot-meet-team': '_onTeamCardHover',
        'mouseleave .mot-meet-team': '_onTeamCardLeave',
    },
    
    /**
     * @override
     */
    start: function () {
        var self = this;
        return this._super.apply(this, arguments).then(function () {
            // Check if element exists and is in the DOM
            if (!self.el || !self.$el || !self.el.isConnected) {
                return Promise.resolve();
            }

            self._initCardAnimations();
            self._initSocialIcons();
        });
    },

    /**
     * Initialize card animations and 3D effects
     */
    _initCardAnimations: function () {
        if (!this.el || !this.el.querySelectorAll) {
            return;
        }
        
        const cards = this.el.querySelectorAll('.mot-meet-team');
        
        if (!cards || cards.length === 0) {
            return;
        }

        cards.forEach((card) => {
            if (!card) return;
            
            const img = card.querySelector('.mot-meet-team-img');
            
            if (!img) return;

            card.addEventListener('mousemove.meetOurTeam', function(e) {
                if (!this || !img) return;
                
                const rect = this.getBoundingClientRect();
                if (!rect) return;
                
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                if (img.style) {
                    img.style.transform = `
                        perspective(1000px) 
                        rotateX(${rotateX}deg) 
                        rotateY(${rotateY}deg)
                        scale(1.05)
                    `;
                }
            });

            card.addEventListener('mouseleave.meetOurTeam', function() {
                if (!img || !img.style) return;
                
                img.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    },

    /**
     * Initialize social icon interactions
     */
    _initSocialIcons: function () {
        if (!this.el || !this.el.querySelectorAll) {
            return;
        }
        
        const socialLinks = this.el.querySelectorAll('.mot-social a');
        
        if (!socialLinks || socialLinks.length === 0) {
            return;
        }

        socialLinks.forEach((link) => {
            if (!link) return;
            
            // Add click ripple effect
            link.addEventListener('click.meetOurTeam', function(e) {
                e.preventDefault();
                
                if (!this) return;
                
                const ripple = document.createElement('span');
                ripple.classList.add('mot-ripple');
                
                const rect = this.getBoundingClientRect();
                if (!rect) return;
                
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple && ripple.parentNode) {
                        ripple.remove();
                    }
                }, 600);
            });

            // Add magnetic effect
            link.addEventListener('mousemove.meetOurTeam', function(e) {
                if (!this || !this.style) return;
                
                const rect = this.getBoundingClientRect();
                if (!rect) return;
                
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / 5;
                const deltaY = (y - centerY) / 5;
                
                this.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
            });

            link.addEventListener('mouseleave.meetOurTeam', function() {
                if (!this || !this.style) return;
                this.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    },

    /**
     * Handle team card click
     * @param {Event} ev - Click event
     */
    _onTeamCardClick: function (ev) {
        if (!ev || !ev.currentTarget) return;
        
        const card = ev.currentTarget;
        if (!card || !card.style) return;
        
        // Add pulse animation
        card.style.animation = 'none';
        setTimeout(() => {
            if (card && card.style) {
                card.style.animation = '';
            }
        }, 10);

        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('mot-ripple');
        
        const rect = card.getBoundingClientRect();
        if (!rect) return;
        
        const size = Math.max(rect.width, rect.height);
        const x = ev.clientX - rect.left - size / 2;
        const y = ev.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(193, 255, 114, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            transform: scale(0);
            animation: mot-ripple-animation 0.8s ease-out;
        `;
        
        card.style.position = 'relative';
        card.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple && ripple.parentNode) {
                ripple.remove();
            }
        }, 800);
    },

    /**
     * Handle team card hover
     * @param {Event} ev - Mouse enter event
     */
    _onTeamCardHover: function (ev) {
        if (!ev || !ev.currentTarget) return;
        
        const card = ev.currentTarget;
        if (!card) return;
        
        const details = card.querySelector('.mot-meet-team-details');
        
        if (details && details.style) {
            details.style.transform = 'translateX(5px)';
        }
    },

    /**
     * Handle team card leave
     * @param {Event} ev - Mouse leave event
     */
    _onTeamCardLeave: function (ev) {
        if (!ev || !ev.currentTarget) return;
        
        const card = ev.currentTarget;
        if (!card) return;
        
        const details = card.querySelector('.mot-meet-team-details');
        
        if (details && details.style) {
            details.style.transform = 'translateX(0)';
        }
    },

    /**
     * @override
     */
    destroy: function () {
        // Clean up event listeners
        if (this.el && this.el.querySelectorAll) {
            const cards = this.el.querySelectorAll('.mot-meet-team');
            const socialLinks = this.el.querySelectorAll('.mot-social a');
            
            if (cards) {
                cards.forEach((card) => {
                    if (card && card.parentNode) {
                        const clone = card.cloneNode(true);
                        card.parentNode.replaceChild(clone, card);
                    }
                });
            }
            
            if (socialLinks) {
                socialLinks.forEach((link) => {
                    if (link && link.parentNode) {
                        const clone = link.cloneNode(true);
                        link.parentNode.replaceChild(clone, link);
                    }
                });
            }
        }
        
        this._super.apply(this, arguments);
    }
});

export default publicWidget.registry.MeetOurTeam;

