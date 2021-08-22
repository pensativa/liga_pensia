(function($) {
  //Menu
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

    $(function() {
      $('#menu__toggle').on('click', function() {
        if ($(this).hasClass('close')) {
          $(this).removeClass('close');
          $(this).addClass('open');
        } else {
          $(this).addClass('close');
          $(this).removeClass('open');
        }
        if ($('.popap-menu').hasClass('abs')) {
          $('.popap-menu').removeClass('abs');
        } else {
          $('.popap-menu').addClass('abs');
        }
        $('.popap-menu').slideToggle("slow", function() {
          if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
          }
        });
        $('.top-menu__social').slideToggle("slow", function() {
          if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
          }
        });
      });
    });
  }

  if ($(window).width() <= 784) {
    $(function() {
      $('#menu__toggle').on('click', function() {
        $('.popap-menu').removeClass('abs');
        if ($(this).hasClass('close')) {
          $(this).removeClass('close');
          $(this).addClass('open');
        } else {
          $(this).addClass('close');
          $(this).removeClass('open');
        }
        $('.mobile-menu').slideToggle(300, function() {
          if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
          }
        });
      });

      $('.menu__item--explosion').on('click', function() {
        if ($(this).hasClass('menu__item--close')) {
          $(this).removeClass('menu__item--close');
          $(this).addClass('menu__item--open');
        } else {
          $(this).addClass('menu__item--close');
          $(this).removeClass('menu__item--open');
        }
      });
    });
  }

  //Mobile Menu
  if ($(window).width() < 785) {
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
