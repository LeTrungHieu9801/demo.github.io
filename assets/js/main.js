/**
* Template Name: Amoeba - v2.0.0
* Template URL: https://bootstrapmade.com/free-one-page-bootstrap-template-amoeba/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

})(jQuery);


const counters = document.querySelectorAll('.value');
const speed = 700;

function countNumber() {
  counters.forEach(counter => {
    const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        if (value == 50 || value == 100) {
          counter.innerText = value + "M+";
        } else {
          counter.innerText = value + "+";
        }
      }

    }

    animate();
  });

}


//hide empty server and li
$(".half-server > li,.half-bottom-server > li,.full-server > li,.server").each(function() {
	if(!$.trim($(this).html())) {
		 $(this).css("visibility","hidden");
	}
	});


  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      460: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
      1600: {
        slidesPerView: 3.6
      }
    }
  });

  
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      460: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
      1600: {
        slidesPerView: 3.6
      }
    }
  });

  
  // Tiny bit of JS to ensure that the notch doesn't move about when you resize the screen


// const delay = 300;
// let afterResize;
// let currentStyle;

// window.onresize = function () {
//   document.body.classList.add('is-resizing');
//   clearTimeout(afterResize);
//   afterResize = setTimeout(() => document.body.classList.remove('is-resizing'), delay);
// };

// document.getElementById('zoom').addEventListener('click', () => {
//   document.body.classList.add('is-resizing');
//   setTimeout(() => document.body.classList.remove('is-resizing'), delay);
// });


// // Generating random gradient

// let dimension = 1000; // Size of tile to be download px

// const styles = ['colourful', 'moody', 'neon', 'abstract', 'grayscale', 'light-leak'];

// const generateBtn = document.querySelector('[for="random"]');
// const canvas = document.querySelector('.canvas');

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// // Generate randomised gradients

// generateBtn.addEventListener('click', generateOrSave);

// function generateOrSave(e) {

//   if (e.metaKey) {
//     saveGradient(e);
//   } else {
//     generateGradient();
//   }
// }

// function generateGradient() {

//   // Assign style
//   const newStyle = styles[Math.floor(Math.random() * styles.length)];

//   // console.log(styles, styles[Math.floor(Math.random() * styles.length)]);

//   if (currentStyle) canvas.classList.remove(`random--${currentStyle}`);

//   currentStyle = newStyle;
//   canvas.classList.add(`random--${newStyle}`);

//   // Loop through each canvas and assign a bunch of random CSS variables
//   const shapes = canvas.getElementsByClassName('shape');

//   document.body.style.setProperty('--r-h', `${random(0, 360)}deg`);
//   document.body.style.setProperty('--r-s', `${random(40, 90)}%`);
//   document.body.style.setProperty('--r-l', `${random(55, 90)}%`);

//   Object.values(shapes).forEach(shape => {
//     shape.style.setProperty('--r-h', `${random(0, 360)}deg`);
//     shape.style.setProperty('--r-s', `${random(40, 90)}%`);
//     shape.style.setProperty('--r-l', `${random(55, 90)}%`);

//     shape.style.setProperty('--w', `${random(0, 30) + 85}%`);
//     shape.style.setProperty('--b-r', `${random(20, 60)}%`);
//     shape.style.setProperty('--b', `${random(5, 75) / 10}em`);
//     shape.style.setProperty('--x', `${random(0, 100) - 50}%`);
//     shape.style.setProperty('--y', `${random(0, 100) - 50}%`);
//     shape.style.setProperty('--s-x', `${1 + (random(0, 130) - 30) / 100}`);
//     shape.style.setProperty('--s-y', `${1 + (random(0, 130) - 30) / 100}`);
//     shape.style.setProperty('--r', `${random(0, 720) - 360}deg`);
//   });
// }


// // Convert RGB colour to Hex
// // Needed for api.color.pizza call
// const rgba2hex = rgba => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;


// // Save gradient
// function saveGradient(e) {
//   const gradient = canvas;
//   const rect = gradient.getBoundingClientRect();
//   const scale = dimension / rect.width;

//   //	Get canvas background color
//   const color = rgba2hex(window.getComputedStyle(gradient, null).getPropertyValue('background-color'));

//   console.log(color, scale, rect);

//   // Get name of color for use in file name
//   fetch(`https://api.color.pizza/v1/${color.substring(1)}`).
//   then(c => c.json()).
//   then(c => {
//     // console.log(c);

//     // Convert DOM to canvas
//     domtoimage.toPng(gradient, {
//       bgColor: '#ffffff',
//       width: rect.width * scale,
//       height: rect.height * scale,
//       style: {
//         'transform': `scale(${scale})`,
//         'transform-origin': 'top left' } })


//     // Download image
//     .then(function (dataUrl) {
//       // const img = new Image();
//       // img.src = dataUrl;
//       // document.body.appendChild(img);

//       // Render canvas as a link and click dat
//       const link = document.createElement('a');
//       link.download = `${currentStyle}-${c['paletteTitle'].toLowerCase().replaceAll(' ', '-')}-gradient`;
//       link.href = dataUrl;
//       link.click();
//     });
//   });

// }