
import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.GetInTouchSection = publicWidget.Widget.extend({
    selector: '.git-get-in-touch',
    
    start: function () {
        this._super.apply(this, arguments);
        this._initFormAnimations();
        this._initFormValidation();
        this._initButtonAnimation();
    },

    _initFormAnimations: function () {
        var self = this;
        
        // Animate form inputs on focus
        this.$('.git-form-control').on('focus', function() {
            var $input = $(this);
            $input.closest('.git-form-group').addClass('git-focused');
        });
        
        this.$('.git-form-control').on('blur', function() {
            var $input = $(this);
            if (!$input.val()) {
                $input.closest('.git-form-group').removeClass('git-focused');
            }
        });
        
        // Add floating label effect
        this.$('.git-form-control').each(function() {
            var $input = $(this);
            if ($input.val()) {
                $input.closest('.git-form-group').addClass('git-has-value');
            }
        });
        
        this.$('.git-form-control').on('input', function() {
            var $input = $(this);
            if ($input.val()) {
                $input.closest('.git-form-group').addClass('git-has-value');
            } else {
                $input.closest('.git-form-group').removeClass('git-has-value');
            }
        });
    },

    _initFormValidation: function () {
        var self = this;
        
        this.$('.git-form').on('submit', function(e) {
            e.preventDefault();
            
            var $form = $(this);
            var isValid = true;
            
            // Remove previous error states
            $form.find('.git-form-control').removeClass('error success');
            
            // Validate each field
            $form.find('.git-form-control').each(function() {
                var $input = $(this);
                var value = $input.val().trim();
                var inputType = $input.attr('type') || $input.prop('tagName').toLowerCase();
                
                // Check if required field is empty
                if ($input.prop('required') && !value) {
                    $input.addClass('error');
                    isValid = false;
                    return;
                }
                
                // Validate email
                if (inputType === 'email' && value) {
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        $input.addClass('error');
                        isValid = false;
                        return;
                    }
                }
                
                // Mark as success if valid
                if (value) {
                    $input.addClass('success');
                }
            });
            
            if (isValid) {
                // Handle form submission
                self._handleFormSubmit($form);
            } else {
                // Shake animation on error
                $form.addClass('shake');
                setTimeout(function() {
                    $form.removeClass('shake');
                }, 300);
            }
            
            return false;
        });
    },

    _handleFormSubmit: function ($form) {
        var self = this;
        var $submitBtn = $form.find('.git-animated-button');
        var $text = $submitBtn.find('.git-text');
        var originalText = $text.text();
        
        // Disable button and show loading state
        $submitBtn.prop('disabled', true);
        $text.text('Sending...');
        
        // Collect form data
        var formData = {
            name: $form.find('input[type="text"]').val(),
            email: $form.find('input[type="email"]').val(),
            message: $form.find('textarea').val()
        };
        
        // Simulate form submission (replace with actual API call)
        setTimeout(function() {
            // Show success message
            $text.text('Message sent!');
            $submitBtn.addClass('git-success');
            
            // Reset form
            setTimeout(function() {
                $form[0].reset();
                $form.find('.git-form-control').removeClass('success');
                $form.find('.git-form-group').removeClass('git-has-value git-focused');
                $text.text(originalText);
                $submitBtn.removeClass('git-success');
                $submitBtn.prop('disabled', false);
            }, 2000);
        }, 1500);
    },

    _initButtonAnimation: function () {
        // Button animations are handled by CSS
        // No additional JavaScript needed for animated button
    },
});

