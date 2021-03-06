(function($) {
  //Menu
  $(window).resize(function() {
    if ($(window).width() <= 784) {
      $(function() {
        if ($('.popap-menu').hasClass('abs')) {
          $('.popap-menu').removeClass('abs');
        }
      });
    } else {
      $('.mobile-menu').removeAttr('style');
    }
  });

  $('#menu__toggle').on('click', function() {
      $('.popap-menu').removeClass('abs');
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
  });

    $('.top-menu__phone').on('click', function(event) {
      event.preventDefault()
      $(this).next().toggle();
      //Hide menu when clicked outside
    });

  //Mobile Menu
  if ($(window).width() <= 784) {
    $(function() {
      $('.popap-menu').removeClass('abs');
      $('#menu__toggle').removeClass('desc');
      $('#menu__toggle').addClass('mobile');
      });

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

  $(function() {
    $(".profitability__grafic-lup").on('click', function() {
      const src = $(this).prev().attr('src');
      $("body").append("<div class='popup'>" +
        "<div class='popap_close'></div>" +
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
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(".faq__link").removeClass('open');
      $(this).addClass('open');
    }
    $(".faq__detail:visible").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown(200);
    }
  });

  $(".faq__link--next").on("click", function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(".faq__link--next").removeClass('open');
      $(this).addClass('open');
    }
    $(".faq__detail--next:visible").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown(200);
    }
  });

  //To top

  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#to-top').fadeIn();
      } else {
        $('#to-top').fadeOut();
      }
    });
    $('#to-top').click(function() {
      $('body, html').animate({scrollTop:0},800);
    });
  });

  //Contract
  if ($(window).height() > 600) {
    $(function() {
      $(".button--modal").on('click', function(e) {
        e.preventDefault();
        $(".modal").fadeIn(800);
        $(".modal__close").on('click', function() {
          $(".modal").fadeOut(800);
        });
      });
    });
  }

  //Download files
  $('.file').change(function() {
    if ($(this).val() != '') $(this).prev().text('???????????? ????????????: ' + $(this)[0].files.length);
    else $(this).prev().text('??????????????????????');
  });

  //Tabs
  $('.tabs-wrapper--report').each(function() {
    let ths = $(this);
    ths.find('.tab-item--report').not(':first').hide();
    ths.find('.tab--report').click(function(e) {
      e.preventDefault();
      ths.find('.tab--report').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item--report').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.tabs-wrapper').each(function() {
    let ths = $(this);
    ths.find('.tab-item').not('.active').hide();
    ths.find('.tab').click(function(e) {
      e.preventDefault();
      ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    });
  });
  //Section block

  $(".team__link").on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
      $(this).parents(".team__item").removeClass('active');
    } else {
      $(this).addClass('close');
      $(this).parents(".team__item").addClass('active');
    }
  });

  $(".tab").on("click", function() {
    if ($(this).hasClass('tab--callback') && $(this).hasClass('active')) {
      $(".callback--npf").slideDown();
    } else {
      $(".callback--npf").slideUp();
    }
  });

  $(".tab").on("click", function() {
    if ($(this).hasClass('report-tab') && $(this).hasClass('active')) {
      $(".results").addClass('open');
    } else {
      $(".results").removeClass('open');
    }
  });


    //???????? ???????????????? ???????????????? ??????????

    //?????? ???????????????? ??????????
    $(".modal__button").on("click", function(e) {
      e.preventDefault();
        $("footer").append(`<div class="modal modal--fade modal-auto-clear" id="successMsg" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="img/logo-desctop.png" alt="Liga pensia">
                        <button type="button" class="modal-close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <h2>??????????????!</h2>
                        <p class="bigger">??????????????????????  ??????????? ??????????????? ????????????????????? ?? ???????? ?? ???????????????????? ??????</p>
                    </div>
                </div>
            </div>
        </div>`);
        $(".modal--fade").fadeIn(800);
        $(".modal-close").on('click', function() {
          $(".modal--fade").fadeOut(800);
          setTimeout(function() {
            $(".modal--fade").remove();
          }, 800);
      });
    });

    //?????? ???????????????????? ??????????
    $(".pay-form__button").on("click", function(e) {
      e.preventDefault();
        $("footer").append(`<div class="modal modal--pay modal-auto-clear" id="successMsg" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="img/logo-desctop.png" alt="Liga pensia">
                        <button type="button" class="modal-close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <h2>??????????????!</h2>
                        <p>???????????????????? ???????????? ???????????????????? ?????????????? ?????????????? ??????????????! </p>
                        <p class="bigger">?? ???????????????????? ?????? ???????? ?????????? ????????????????????? ???? ???????????? ??????????????.</p>
                    </div>
                </div>
            </div>
        </div>`);
        $(".modal--pay").fadeIn(800);
        $(".modal-close").on('click', function() {
          $(".modal--pay").fadeOut(800);
          setTimeout(function() {
            $(".modal--pay").remove();
          }, 800);
      });
    });

    // Phone Mask
    $('#phone').mask('+38 (000) 000 0000', {
        'translation': {
            0: {
                pattern: /[0-9+]/
            }
        }
    });
    $('#userphone').mask('+38 (000) 000 0000', {
        'translation': {
            0: {
                pattern: /[0-9+]/
            }
        }
    });
    $('#phone_number').mask('+38 (000) 000 0000', {
        'translation': {
            0: {
                pattern: /[0-9+]/
            }
        }
    });

    //?????????????????? ???????????? ?????? ???????????? ?????????? ??????????????????????
      $(".vodafone").on('click', function() {
        $(".ajaxform").fadeOut(800);
        $(".vodafon-form").fadeIn(800);
      });

      $(".ks").on('click', function() {
        $(".ajaxform").fadeOut(800);
        $(".ks-form").fadeIn(800);
      });

      $(".email-item").on('click', function() {
        $(".ajaxform").fadeOut(800);
        $(".email-form").fadeIn(800);
      });
}(jQuery));
