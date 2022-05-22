// FIXED HEADER 
function BindNavEvents() {
    $(document).ready(function() {
      $(function() {
        //caches a jQuery object containing the header element
        var header = $("header");
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 10) {
            header.addClass("fixed-header");
          } else {
            header.removeClass("fixed-header");
          }
        });
      });
      // HAMBURGER MENU
      var hamburger = $(".hamburger");
      hamburger.on("click", function(e) {
      hamburger.toggleClass("is-active");
      // Do something else, like open/close menu
      });

      //Controls for menu on click using .nav-active class
      /*var navLink = $(".off-canvas-nav > li");
      navLink.on("click touch", function(e) {
      console.log("NavLinkReached");
        $(this).toggleClass("nav-active");
      // Do something else, like open/close menu
      });
      var navLink = $(".off-canvas-profile-link");
      navLink.on("click touch", function(e) {
        $(this).toggleClass("nav-active");
      // Do something else, like open/close menu
      });*/

      //Controls for menu to open/close on hover - change 'mouseenter' to 'click' to use
      $('[data-toggle="collapse"]').on('mouseenter', function() {
        $(this).find('.collapse').collapse('show');
        console.log('show');
      });
      $('[data-toggle="collapse"]').on('mouseleave', function() {
          $(this).find('.collapse').collapse('hide');
          console.log('hide');
      });
      // SMOOTH SCROLL ANCHOR LINKS
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[href*="#collapse"]')
        .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 128
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
          });
          }
        }
        });
    });
  }