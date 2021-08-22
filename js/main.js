(function($) {
  //Menu
  $(window).resize(function() {
    if ($(window).width() <= 784) {
      $(function() {
        if ($('.popap-menu').hasClass('abs')) {
          $('.popap-menu').removeClass('abs');
        }
        if ($('#menu__toggle').hasClass('desc')) {
          $('#menu__toggle').addClass('mobile');
          $('#menu__toggle').removeClass('desc');
        }
      });
    } else {
      $('.mobile-menu').removeAttr('style');
      $('.popap-menu').removeClass('abs');
      if ($('#menu__toggle').hasClass('mobile')) {
        $('#menu__toggle').removeClass('mobile');
        $('#menu__toggle').addClass('desc');
      }
    }
  });

  $('.desc').on('click', function() {
    if ($('.desc').hasClass('close')) {
      $('.desc').removeClass('close');
      $('.desc').addClass('open');
      $('.popap-menu').removeClass('abs').slideDown(200);
      $('.top-menu__social').slideDown(200);
    } else {
      $('.desc').addClass('close');
      $('.desc').removeClass('open');
      $('.popap-menu').removeAttr('style').slideUp(300).addClass('abs');
      $('.top-menu__social').slideUp(300);
    }
  });

  $('#menu__toggle').on('click', function() {
    if ($(this).hasClass('mobile')) {
      $('.popap-menu').removeClass('abs');
      $('.menu__item--explosion').on('click', function() {
        $('.popap-menu').removeAttr('style');
          if ($(this).hasClass('menu__item--close')) {
            $(this).removeClass('menu__item--close');
            $(this).addClass('menu__item--open');
          } else {
            $(this).addClass('menu__item--close');
            $(this).removeClass('menu__item--open');
          }
        });
      if ($(this).hasClass('close')) {
        $(this).removeClass('close');
        $(this).addClass('open');
        $('.popap-menu').removeAttr('style');
        $('.mobile-menu').slideDown(200);
      } else {
        $(this).addClass('close');
        $(this).removeClass('open');
        $('.mobile-menu').slideUp();
      }
    }
  });

  if ($(window).width() > 784) {
    $('.top-menu__phone').on('click', function(event) {
      event.preventDefault()
      $('.phone').toggle();
      //Hide menu when clicked outside
      $('.phone').mouseleave(function() {
        var thisUI = $(this);
        $('html').click(function() {
          thisUI.hide();
          $('html').unbind('click');
        });
      });
    });
  }

  //Mobile Menu
  if ($(window).width() <= 784) {
    $(function() {
      $('.popap-menu').removeClass('abs');
      $('#menu__toggle').removeClass('desc');
      $('#menu__toggle').addClass('mobile');

      });
    //Mobile Why
    $(function() {
      $('.why__item-title').on('click', function() {
        if ($(this).hasClass('open')) {
          $(this).removeClass('open');
        } else {
          $(this).addClass('open');
        }
        $(this).next().slideToggle("slow", function() {
          if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
          }
        });
      });
    });
  }

  //Grafic img
  $(function() {
    $(".profitability__grafic-img").on('click', function() {
      const src = $(this).next().attr('src');
      $("body").append("<div class='popup'>" +
        "<div class='popup_bg'></div>" +
        "<img src='" + src + "' class='popup_img' />" +
        "</div>");
      $(".popup").fadeIn(800);
      $(".popup_bg").on('click', function() {
        $(".popup").fadeOut(800);
        setTimeout(function() {
          $(".popup").remove();
        }, 800);
      });
    });

  });

  // FAQ Accordion
  $(".faq__link").on("click", function() {
    $(".faq__detail:visible").slideUp();
    if (!$(this).next().is(":visible")) {

      $(this).next().slideDown(200);
    }
  });

}(jQuery));
