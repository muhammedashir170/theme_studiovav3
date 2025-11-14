

$(document).ready(function () {

    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 100
        });
    }

    // Modern Performance Optimized Animation System
    const animationConfig = {
        duration: 1200,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        stagger: 150,
        threshold: 0.1
    };

    // Enhanced Counter Animation with Modern Effects
    function animateCounter() {
        $('.stst-count').each(function (index) {
            const $this = $(this);
            const target = parseInt($this.attr('data-target'));
            const duration = 2000;
            const delay = index * 200; // Staggered animation

            // Add glow effect during animation
            $this.addClass('animating');

            setTimeout(() => {
                $this.prop('Counter', 0).animate({
                    Counter: target
                }, {
                    duration: duration,
                    easing: 'easeOutCubic',
                    step: function (now) {
                        const current = Math.ceil(now);
                        $this.text(current);

                        // Add pulse effect at milestones
                        if (current % Math.ceil(target / 4) === 0) {
                            $this.css('transform', 'scale(1.05)');
                            setTimeout(() => {
                                $this.css('transform', 'scale(1)');
                            }, 100);
                        }
                    },
                    complete: function() {
                        $this.removeClass('animating');
                        $this.text(target);

                        // Final celebration effect
                        $this.css({
                            'transform': 'scale(1.1)',
                            'text-shadow': '0 0 20px rgba(193, 255, 114, 0.6)'
                        });

                        setTimeout(() => {
                            $this.css({
                                'transform': 'scale(1)',
                                'text-shadow': 'none'
                            });
                        }, 300);
                    }
                });
            }, delay);
        });
    }

    // Enhanced Intersection Observer with Performance Optimization
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterElement = entry.target;

                if (!counterElement.classList.contains('animated')) {
                    counterElement.classList.add('animated');

                    // Add entrance animation
                    $(counterElement).css({
                        'opacity': '0',
                        'transform': 'translateY(30px) scale(0.8)'
                    }).animate({
                        'opacity': '1'
                    }, {
                        duration: 600,
                        easing: 'easeOutCubic',
                        step: function(now) {
                            $(this).css('transform', `translateY(${30 * (1 - now)}px) scale(${0.8 + (0.2 * now)})`);
                        },
                        complete: function() {
                            // Trigger the counter animation for all counters when one comes into view
                            animateCounter();
                        }
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all counter elements with enhanced performance
    document.querySelectorAll('.stst-count[data-target]').forEach(counter => {
        counterObserver.observe(counter);
    });

    // Modern Staggered Animation for Stats Cards
    const statsCardsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    $(entry.target).addClass('animate-in');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.stst-stats-facts .col-md-6, .stst-stats-facts .col-lg-4').forEach(card => {
        statsCardsObserver.observe(card);
    });

    // Button Interactions with Modern Effects
    $('.stst-stats-facts .stst-statsbtn').hover(
        function() {
            const $statsbtn = $(this);
            $statsbtn.addClass('hover-effect');

            // Add magnetic effect
            $statsbtn.on('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                $statsbtn.css('transform', `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`);
            });
        },
        function() {
            const $statsbtn = $(this);
            $statsbtn.removeClass('hover-effect');
            $statsbtn.off('mousemove');
            $statsbtn.css('transform', '');
        }
    );

    // Button Click Animation with Modern Ripple Effect
    $('.stst-stats-facts .stst-statsbtn').on('click', function(e) {
        const button = $(this);
        const ripple = $('<span class="ripple"></span>');

        // Get button dimensions and click position
        const rect = this.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const size = Math.max(rect.width, rect.height);

        // Enhanced ripple effect
        ripple.css({
            position: 'absolute',
            left: clickX - size / 2,
            top: clickY - size / 2,
            width: size + 'px',
            height: size + 'px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'scale(0)',
            animation: 'enhancedRipple 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'none',
            zIndex: '10'
        });

        button.append(ripple);

        // Add button press effect
        button.css('transform', 'scale(0.98)');
        setTimeout(() => {
            button.css('transform', '');
        }, 150);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 800);
    });

    // Add CSS for Animations
    if (!$('#enhanced-animations').length) {
        $('head').append(`
            <style id="enhanced-animations">
                @keyframes enhancedRipple {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                @keyframes cardEntrance {
                    0% {
                        opacity: 0;
                        transform: translateY(30px) scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .stst-stats-facts .stst-statsbtn {
                    position: relative;
                    overflow: hidden;
                }

                .stst-stats-facts .stst-statsbtn .ripple {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                }

                .stst-stats-facts .col-md-6,
                .stst-stats-facts .col-lg-4 {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .stst-stats-facts .col-md-6.animate-in,
                .stst-stats-facts .col-lg-4.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                    animation: cardEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .stst-stats-facts .stst-statsbtn:hover {
                    cursor: pointer;
                }
            </style>
        `);
    }

    // Parallax Effect with Performance Optimization
    let ticking = false;

    function updateParallax() {
        const $section = $('.stst-stats-facts');
        if (!$section.length) { ticking = false; return; }

        const parallaxElement = $section.find('.position-absolute img');
        if (!parallaxElement.length) { ticking = false; return; }

        const sectionOffset = $section.offset();
        if (!sectionOffset) { ticking = false; return; }

        const scrolled = $(window).scrollTop() || 0;
        const sectionTop = sectionOffset.top || 0;
        const sectionHeight = $section.outerHeight() || 0;
        const windowHeight = $(window).height() || 0;

        if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
            const speed = 0.3;
            const yPos = -(scrolled - sectionTop) * speed;
            parallaxElement.css('transform', `translateY(${yPos}px) scale(1.05)`);
        }
        ticking = false;
    }

    $(window).on('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Smooth Scroll Easing
    $('.stst-stats-facts .stst-statsbtn').on('click', function(e) {
        e.preventDefault();

        // Find the next section after stats-facts
        const nextSection = $('.stst-stats-facts').next();
        if (nextSection.length) {
            const targetPosition = nextSection.offset().top - 100;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
            let start = null;

            function smoothScroll(timestamp) {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const ease = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Ease in-out cubic

                window.scrollTo(0, startPosition + distance * ease);

                if (progress < 1) {
                    requestAnimationFrame(smoothScroll);
                }
            }

            requestAnimationFrame(smoothScroll);
        }
    });

    // Loading Animation with Staggered Effects
    function addLoadingAnimation() {
        $('.stst-stats-facts').addClass('loading');

        // Staggered loading of elements
        setTimeout(() => {
            $('.stst-stats-facts .stst-round-36').addClass('animate-in');
        }, 200);

        setTimeout(() => {
            $('.stst-stats-facts .badge').addClass('animate-in');
        }, 400);

        setTimeout(() => {
            $('.stst-stats-facts h2').addClass('animate-in');
        }, 600);

        setTimeout(() => {
            $('.stst-stats-facts .fs-5').addClass('animate-in');
        }, 800);

        setTimeout(() => {
            $('.stst-stats-facts').removeClass('loading').addClass('loaded');
        }, 1000);
    }

    // Initialize loading animation
    addLoadingAnimation();

    // CSS for Modern Loading Animation
    if (!$('#enhanced-loading').length) {
        $('head').append(`
            <style id="enhanced-loading">
                .stst-stats-facts.loading {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .stst-stats-facts.loaded {
                    opacity: 1;
                    transform: translateY(0);
                }

                .stst-stats-facts .stst-round-36,
                .stst-stats-facts .badge,
                .stst-stats-facts h2,
                .stst-stats-facts .fs-5 {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .stst-stats-facts .stst-round-36.animate-in,
                .stst-stats-facts .badge.animate-in,
                .stst-stats-facts h2.animate-in,
                .stst-stats-facts .fs-5.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
            </style>
        `);
    }

    // Responsive adjustments
    function handleResize() {
        const windowWidth = $(window).width();

        if (windowWidth < 768) {
            // Mobile adjustments
            $('.stst-stats-facts .gap-9').css('gap', '2rem');
            $('.stst-stats-facts .gap-6').css('gap', '1.5rem');
        } else if (windowWidth < 992) {
            // Tablet adjustments
            $('.stst-stats-facts .gap-9').css('gap', '3rem');
            $('.stst-stats-facts .gap-6').css('gap', '2rem');
        } else {
            // Desktop - use default values
            $('.stst-stats-facts .gap-9').css('gap', '');
            $('.stst-stats-facts .gap-6').css('gap', '');
        }
    }

    // Handle resize events
    $(window).on('resize', handleResize);
    handleResize(); // Initial call

    // Custom Easing Functions
    if (!$.easing.easeInOutQuart) {
        $.easing.easeInOutQuart = function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        };
    }

    if (!$.easing.easeOutCubic) {
        $.easing.easeOutCubic = function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        };
    }

    // Performance Monitoring
    const performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure' && entry.name.includes('stst-stats-facts')) {
                // Performance measurement complete
            }
        }
    });

    if (typeof PerformanceObserver !== 'undefined') {
        performanceObserver.observe({ entryTypes: ['measure'] });
    }

    // Initialize performance measurement
    performance.mark('stst-stats-facts-init-start');

    // Mark initialization complete
    setTimeout(() => {
        performance.mark('stst-stats-facts-init-end');
        performance.measure('stst-stats-facts-initialization', 'stst-stats-facts-init-start', 'stst-stats-facts-init-end');
    }, 100);
});
