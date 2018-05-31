console.log('App started!');

window.onscroll = () => {
    const navbar = document.querySelector('nav');
    const header = document.querySelector('header').offsetHeight;
    const portfolio = document.querySelector('.section-portfolio').offsetHeight;
    const sectionServices = document.querySelector('.section-services').offsetHeight;
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    const project = document.querySelector('.project');
    const services = document.querySelector('.services');
    const contactBtn = document.querySelector('.contact-btn');

    if (window.pageYOffset >= header - 75) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
    
    /**
     * Animations
     */
    if (window.pageYOffset >= header - 500) {
        aboutText.classList.add('animated', 'fadeInLeft');
        aboutImage.classList.add('animated', 'fadeInRight');
    }

    if (window.pageYOffset >= portfolio + 400) {
        project.classList.add('animated', 'fadeIn');
    }

    if (window.pageYOffset >= portfolio + 1200) {
        services.classList.add('animated', 'fadeInUp');
    }

    if (window.pageYOffset >= sectionServices + 2200) {
        contactBtn.classList.add('animated', 'shake');
    }
    
};

$(document).ready(function () {
/* Smooth Scrolling */
        // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ?
                target :
                $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target
                        .offset()
                        .top - 75
                }, 1000, function () {
                    // Callback after animation Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
});
