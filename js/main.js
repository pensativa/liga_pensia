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
  });

  if ($(window).width() > 784) {
    $('.top-menu__phone').on('click', function(event) {
      event.preventDefault()
      $(this).next().toggle();
      //Hide menu when clicked outside
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
      $(this).removeClass('open')
    } else {
      $(this).addClass('open')
    }
    $(".faq__detail:visible").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown(200);
    }
  });

  $(".faq__link--next").on("click", function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
    } else {
      $(this).addClass('open')
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
    if ($(this).val() != '') $(this).prev().text('Обрано файлів: ' + $(this)[0].files.length);
    else $(this).prev().text('Загрузить');
  });

  //Tabs
  $('.tabs-wrapper').each(function() {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function() {
      ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.tabs-wrapper--report').each(function() {
    let ths = $(this);
    ths.find('.tab-item--report').not(':first').hide();
    ths.find('.tab--report').click(function() {
      ths.find('.tab--report').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item--report').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  //Team page
  $(".team__link a").on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
      $(this).parents(".team__item").addClass('active');
    } else {
      $(this).addClass('close');
      $(this).parents(".team__item").removeClass('active');
    }
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

  // Feed form
    /*var path = "https://ligapension.com/lib/ajax.php";
    $(document).on('submit', '.form', function(event) {
        event.preventDefault();
        name = $(this).attr('name');
        url = $(this).attr('url');
        var formData = new FormData(this);
        // $(this).find("button[type=submit]").prop("disabled", true);
        $.ajax({
            type: "POST",
            url: path,
            data: $(this).serialize(),
            success: function(response) {
                successWindow();
                $('#successMsg').modal({'show' : true});
            },
            error: function(e) {
                console.log("ERROR : ", e);
            }
        });
        // event.stopImmediatePropagation();
        // if (!event.isDefaultPrevented()) {
        //     event.returnValue = false;
        // }
    });

    function successWindow() {
        $("body").append(`<div class="modal modal--fade" id="successMsg" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Дякуємо! Ваше повідомлення надіслано.</p>
                    </div>
                </div>
            </div>
        </div>`);
    }*/

    //Временная замена
    $(".modal__button").on("click", function(e) {
      e.preventDefault();
        $("footer").append(`<div class="modal modal--fade modal-auto-clear" id="successMsg" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="../img/logo-desctop.png" alt="Liga pensia">
                        <button type="button" class="modal-close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <h2>Дякуємо!</h2>
                        <p>Ваші документи успішно завантажені.</p>
                        <p class="bigger">В найближчий час ми зв’яжемося з Вами та відкриємо рахунок.</p>
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

    $(".pay-form__button").on("click", function(e) {
      e.preventDefault();
        $("footer").append(`<div class="modal modal--pay modal-auto-clear" id="successMsg" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <img src="../img/logo-desctop.png" alt="Liga pensia">
                        <button type="button" class="modal-close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <h2>Дякуємо!</h2>
                        <p>пОПОВНЕННЯ вАШОГО ПЕНСІЙНОГО РАХУНКУ ПРОЙШЛО УСПІШНО! </p>
                        <p class="bigger">В найближчий час вАШІ КОШТИ З’ЯВЛЯТЬСЯ НА ВАШОМУ РАХУНКУ.</p>
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

    $("#successMsg").on('click', function() {
      $("footer").detach('#successMsg');
    });

    $('.rerun-button').click(function(){
       $('.pay-wrap').find('.pay-body')
            .first().addClass('is-showing')
            .siblings().removeClass('is-showing');
       $('.pay-header span:').first().addClass('is-active')
            .siblings().removeClass('is-active');
       $('.form1').find("button[type=submit]").prop("disabled", false);
    });


    // Auto-hide modal
    $('.modal-auto-clear').on('shown.bs.modal', function() {
        $(this).delay(7000).fadeOut(200, function() {
            $(this).modal('hide');
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


}(jQuery));
