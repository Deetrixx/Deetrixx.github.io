$(document).foundation()
    // Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
//socialmedia links
document.addEventListener("DOMContentLoaded", function (event) {

    // Uses sharer.js
    //  http://ellisonleao.github.io/sharer.js/#twitter
    var url = window.location.href;
    var title = document.title;
    var subject = "Read this good article";
    var via = "bootstrapC";
    console.log(url);
    console.log(title);


    //facebook
    $('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
    //twitter
    $('#share-tw').attr('data-url', url).attr('data-title', title).attr('data-via', via).attr('data-sharer', 'twitter');
    //linkedin
    $('#share-li').attr('data-url', url).attr('data-sharer', 'linkedin');
    // google plus
    $('#share-gp').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'googleplus');
    // email
    $('#share-em').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-sharer', 'email');

    //Prevent basic click behavior
    $(".sharer button").click(function () {
        event.preventDefault();
    });


});

//portfolio

;
(function (window) {

    'use strict';

    var docElem = window.document.documentElement;

    function getViewportH() {
        var client = docElem['clientHeight'],
            inner = window['innerHeight'];

        if (client < inner)
            return inner;
        else
            return client;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    // http://stackoverflow.com/a/5598797/989439
    function getOffset(el) {
        var offsetTop = 0,
            offsetLeft = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while (el = el.offsetParent)

        return {
            top: offsetTop,
            left: offsetLeft
        }
    }

    function inViewport(el, h) {
        var elH = el.offsetHeight,
            scrolled = scrollY(),
            viewed = scrolled + getViewportH(),
            elTop = getOffset(el).top,
            elBottom = elTop + elH, // if 0, the element is considered in the viewport as soon as it enters.
            // if 1, the element is considered in the viewport only when it's fully inside
            // value in percentage (1 >= h >= 0)
            h = h || 0;

        return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
    }

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function cbpScroller(el, options) {
        this.el = el;
        this.options = extend(this.defaults, options);
        this._init();
    }

    cbpScroller.prototype = {
        defaults: {
            // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
            // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
            // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
            viewportFactor: 0.2
        },
        _init: function () {
            if (Modernizr.touch) return;
            this.sections = Array.prototype.slice.call(this.el.querySelectorAll('.cbp-so-section'));
            this.didScroll = false;

            var self = this;
            // the sections already shown...
            this.sections.forEach(function (el, i) {
                if (!inViewport(el)) {
                    classie.add(el, 'cbp-so-init');
                }
            });

            var scrollHandler = function () {
                    if (!self.didScroll) {
                        self.didScroll = true;
                        setTimeout(function () {
                            self._scrollPage();
                        }, 60);
                    }
                },
                resizeHandler = function () {
                    function delayed() {
                        self._scrollPage();
                        self.resizeTimeout = null;
                    }
                    if (self.resizeTimeout) {
                        clearTimeout(self.resizeTimeout);
                    }
                    self.resizeTimeout = setTimeout(delayed, 200);
                };

            window.addEventListener('scroll', scrollHandler, false);
            window.addEventListener('resize', resizeHandler, false);
        },
        _scrollPage: function () {
            var self = this;

            this.sections.forEach(function (el, i) {
                if (inViewport(el, self.options.viewportFactor)) {
                    classie.add(el, 'cbp-so-animate');
                } else {
                    // this add class init if it doesn't have it. This will ensure that the items initially in the viewport will also animate on scroll
                    classie.add(el, 'cbp-so-init');

                    classie.remove(el, 'cbp-so-animate');
                }
            });
            this.didScroll = false;
        }
    }

    // add to global namespace
    window.cbpScroller = cbpScroller;

})(window);
/// contact form
$(document).ready(function () {
    // Test for placeholder support
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            } else if (e.type == 'blur') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } else if (e.type == 'focus') {
                if ($this.val() !== '') {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }
});
