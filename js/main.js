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
    }

    // FAQ Accordion
    $(".faq__link").on("click", function() {
        $(".detail:visible").slideUp();
        if (!$(this).next().is(":visible")) {

            $(this).next().slideDown(200);
        }
    });

}(jQuery));
