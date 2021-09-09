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


}(jQuery));

/*const popup = document.querySelector(".modal-feedback");
const overlay = document.querySelector("body");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector("form");
const username = popup.querySelector("[name=username]");
const phone = popup.querySelector("[name=phone]");
const email = popup.querySelector("[name=email]");
const text = popup.querySelector("[name=text]");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
  username.focus();
});
if (storage) {
  username.value = storage;
  email.focus();
} else {
  username.focus();
};
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
  overlay.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt) {
  if (!username.value || !phone.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
      overlay.classList.remove("modal-error");
    }
  }
});*/
