(function($) {
  //Menu
    if ($(window).width() > 784 ){
      $(function(){
        $('.menu__link').on('click', function(){
          $('.popap-menu').slideToggle("slow", function(){
            if($(this).css('display') === 'none'){
              $(this).removeAttr('style');
            }
          });
          $('.top-menu__social').slideToggle("slow", function(){
            if($(this).css('display') === 'none'){
              $(this).removeAttr('style');
            }
          });
        });
      });
    }

    //Mobile Menu
    if ($(window).width() < 785 ){
      $(function(){
        $('#menu__toggle').on('click', function() {
          if ($(this).hasClass('close')) {
            $(this).removeClass('close');
            $(this).addClass('open');
          } else {
            $(this).addClass('close');
            $(this).removeClass('open');
          }
          $('.mobile-menu').slideToggle(300, function() {
            if($(this).css('display') === 'none'){
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
       //Mobile Why
      $(function(){
        $('.why__item-title').on('click', function(){
          if ($(this).hasClass('open')) {
            $(this).removeClass('open');
          } else {
            $(this).addClass('open');
          }
          $(this).next().slideToggle("slow", function(){
            if($(this).css('display') === 'none'){
              $(this).removeAttr('style');
            }
          });
        });
      });
    }

    //Grafic img
    $(function(){
      $('.profitability__grafic-img').click(function(event) {
        var i_path = $(this).next().attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
         left: ($(document).width() - $('#magnify').outerWidth())/3,
                top: ($(window).height() - $('#magnify').outerHeight())/3
       });
        $('#overlay, #magnify').fadeIn('fast');
      });

      $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();

        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
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
