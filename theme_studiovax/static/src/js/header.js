
$(document).ready(function () {
    let lastScroll = 0;
    let ticking = false;
    const header = $('header');

    header.removeClass('fixed-header');

    function updateHeader(currentScroll) {
        if (currentScroll >= 60) {

            header.addClass('fixed-header').css('transform', 'translateY(0)');
        } else {

            header.removeClass('fixed-header');
        }

        lastScroll = currentScroll;
        ticking = false;
    }
    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();

        // Use requestAnimationFrame for smooth performance
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeader(currentScroll);
            });
            ticking = true;
        }
    });


    // Featured Owl Carousel
    if ($('.featured-projects-slider .owl-carousel').length) {
        $('.featured-projects-slider .owl-carousel').owlCarousel({
            center: true,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            smartSpeed: 800,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 },
                1200: { items: 4 }
            }
        });
    }

    // Scroll to Top  animation
    function scrollToTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutCubic');
    }

    // Custom easing function for smoother animation
    $.easing.easeInOutCubic = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    };

    const scrollBtn = document.getElementById("scrollToTopBtn");

    if (scrollBtn) {
        scrollBtn.addEventListener("click", scrollToTop);

        // Show/Hide scroll to top button with smooth fade
        let scrollTicking = false;

        window.onscroll = function () {
            if (!scrollTicking) {
                window.requestAnimationFrame(function() {
                    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                    if (scrollTop > 200) {
                        scrollBtn.style.display = "flex";
                        setTimeout(function() {
                            scrollBtn.style.opacity = "1";
                        }, 10);
                    } else {
                        scrollBtn.style.opacity = "0";
                        setTimeout(function() {
                            scrollBtn.style.display = "none";
                        }, 300);
                    }

                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        };

        // Add smooth transition to scroll button
        scrollBtn.style.transition = "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";

        // Add hover effect
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.transform = "scale(1.1) translateY(-2px)";
        });

        scrollBtn.addEventListener('mouseleave', function() {
            this.style.transform = "scale(1) translateY(0)";
        });
    }


    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-in-out',
            offset: 100,
            disable: false
        });
    }


    // Add active class to current page link
const currentPath = window.location.pathname;
$('.header-link').each(function() {
    const linkPath = $(this).attr('href');
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/')) {
        $(this).addClass('active');
        // Show the indicator only for active link
        $(this).find('.indicator').show(); // or .addClass('visible')
    } else {
        // Hide indicator for non-active links
        $(this).find('.indicator').hide(); // or .removeClass('visible')
    }
});


    // Smooth scroll for anchor links with better performance
$('a[href^="#"]').on('click', function(e) {
    const href = this.getAttribute('href');

    // 1. Check if the href is ONLY the hash symbol.
    // If so, just prevent the default action and stop.
    if (href === '#') {
        e.preventDefault();
        return; // Stop the function here
    }

    // 2. Only proceed with smooth scrolling if a valid target is specified
    const target = $(href);

    if (target.length) {
        e.preventDefault();

        // Calculate offset
        const targetOffset = target.offset().top - 80;

        // Smooth scroll with custom easing
        $('html, body').stop().animate({
            scrollTop: targetOffset
        }, 1000, 'easeInOutCubic');
    }
});


    // Close dropdown when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.btn-group').length) {
            $('.dropdown-menu').removeClass('show');
            $('.toggle-menu').attr('aria-expanded', 'false');
        }
    });


    // Close dropdown when close button is clicked
    $('.btn-close').on('click', function() {
        $('.dropdown-menu').removeClass('show');
        $('.toggle-menu').attr('aria-expanded', 'false');
    });


    // Prevent dropdown from closing when clicking inside it
    $('.dropdown-menu').on('click', function(e) {
        if (!$(e.target).is('a')) {
            e.stopPropagation();
        }
    });


    // Add page transitions
    let isTransitioning = false;

    $('a:not([href^="#"]):not([target="_blank"])').on('click', function(e) {
        const href = $(this).attr('href');

        if (href && href !== 'javascript:void(0)' && !isTransitioning) {
            e.preventDefault();
            isTransitioning = true;

            // Add fade out effect
            $('body').css({
                'opacity': '1',
                'transition': 'opacity 0.3s ease-out'
            });

            setTimeout(function() {
                $('body').css('opacity', '0.95');
            }, 10);

            // Navigate after animation
            setTimeout(function() {
                window.location.href = href;
            }, 300);
        }
    });

});
