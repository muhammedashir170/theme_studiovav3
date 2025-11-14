

$(document).ready(function () {

    // --- Banner button click to scroll down ---
    $('.banner-section .rounded-pill').on('click', function (e) {
        e.preventDefault();

        // Instant visual feedback
        $(this).addClass('clicked');

        // Remove clicked class quickly
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 150);

        // Start scroll
        const nextSection = $('.banner-section').next();
        if (nextSection.length) {
            const targetPosition = nextSection.offset().top - 100;

            // Use native smooth scroll for better performance
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });

    // --- Simplified Banner text animation (runs only once on load) ---
    let animationComplete = false;

    if (!animationComplete) {
        $('.banner-section h1').each(function () {
            const text = $(this).text();
            $(this).html('');

            const fragment = document.createDocumentFragment();

            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const span = document.createElement('span');
                span.textContent = char;
                span.style.cssText = `
                    opacity: 0;
                    transform: translateY(30px);
                    display: inline-block;
                    transition: opacity 0.25s ease, transform 0.25s ease;
                    transition-delay: ${i * 0.02}s;
                `;
                fragment.appendChild(span);
            }

            this.appendChild(fragment);

            // Trigger animation immediately
            setTimeout(() => {
                const spans = this.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });

                // Mark complete and clean up
                setTimeout(() => {
                    animationComplete = true;
                    spans.forEach(span => {
                        span.style.transition = 'none';
                    });
                }, 300);
            }, 100);
        });
    }

});

