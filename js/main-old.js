(function($) {
    // Preloader
    $(window).on('load', function() {
        setTimeout(function() {
            $('.preloader-area').fadeOut('slow', function() {});
        }, 2000);
    });

    // Compressed Sticky Header
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 20) {
            $(".header-section").addClass("compressed");
        } else {
            $(".header-section").removeClass("compressed");
        }
    });
    
    // Video magnific popup
    // $('.popup-youtube').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false,
    //     closeBtnInside: true,
    // });

    // Feed form
    var path = "https://ligapension.com/lib/ajax.php";
    $(document).on('submit', '.feedForm', function(event) {
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
        $("body").append(`<div class="modal fade" id="successMsg" role="dialog">
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
    }

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

    //Mobile Toggle Group Liga
    if(window.matchMedia('(max-width: 576px)').matches){
        $('#groupTog').click(function(){
            $('#groupCont').slideFadeToggle();
        });
    }

    $.fn.slideFadeToggle = function(speed, easing, callback){
      return this.animate({opacity: "toggle", height: "toggle", padding: "toggle"}, speed, easing, callback);
    };

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header-section').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.header-section').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.header-section').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    // Overlay Menu
    $('#menu-btn').on('click', function(e) {
        e.preventDefault();
        $("#nav").height('100%');
    });
    $('#menu-btn_mob').on('click', function(e) {
        e.preventDefault();
        $("#nav").height('100%');
    });
    $('#close-btn').on('click', function(e) {
        e.preventDefault();
        $("#nav").height('0%');
    });

    // Dropdown Language
    $('.dropdown-menu , .dropdown > a').hover(function() {
        $(this).parent().find('a:first-child').addClass('menu-pointer')
    }, function() {
        $(this).parent().find('a:first-child').removeClass('menu-pointer');
    });

    $('.dropdown-menu , .dropdown > span').hover(function() {
        $(this).parent().find('span:first-child').addClass('menu-pointer')
    }, function() {
        $(this).parent().find('span:first-child').removeClass('menu-pointer');
    });

    $('.dropdown_hover').on('click', function(e) {
        $(".drop-content .drop-hover").toggle();
    });

    $(".dropdown_hover .drop-content .drop-hover li span").on('click', function() {
        $(".dropdown_hover .selected  span").html($(this).html());
        $(".dropdown_hover .drop-content .drop-hover").slideUp();
    });

    $(document).bind('click', function(e) {
        var $clickhide = $(e.target);
        if (!$clickhide.parents().hasClass("dropdown_c"))
            $(".dropdown_c .drop-content ul").slideUp();
    });

    // Dropdown Phone
    $('li.phone-item > img').on('click', function(event) {
        event.preventDefault()
        $(this).parent().find('ul').first().toggle();
        $(this).parent().siblings().find('ul').hide();
        //Hide menu when clicked outside
        $(this).parent().find('ul').mouseleave(function() {
            var thisUI = $(this);
            $('html').click(function() {
                thisUI.hide();
                $('html').unbind('click');
            });
        });
    });

    // Slick News
    $('.slick-carousel').slick({
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 2,
        arrows: true,
        responsive: [{
            breakpoint: 1300,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '45px',
                slidesToShow: 2,
                dots: true
            }
        }, {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '45px',
                slidesToShow: 1,
                dots: true
            }
        }, {
            breakpoint: 599,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '45px',
                slidesToShow: 1,
                dots: true
            }
        }]
    });

    // Slick Calc Mobile 
    var calc_slider = $('.mobile-block');
    if (calc_slider) {
        $('.calc-slider').slick({
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1,
            arrows: false
            // prevArrow: $('.prev-item'),
            // nextArrow: $('.next-item')
        });
    }

    // Browser supports HTML5 multiple file?
    var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
        isIE = /msie/i.test(navigator.userAgent);

    $.fn.customFile = function() {

        return this.each(function() {

            var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
                $wrap = $('<div class="file-upload-wrapper">'),
                $input = $('<input type="text" class="file-upload-input" placeholder="Паспорт /ID карта та ІПН*" />'),
                // Button that will be used in non-IE browsers
                $button = $('<button type="button" class="file-upload-button">Завантажити</button>'),
                // Hack for IE
                $label = $('<label class="file-upload-button" for="' + $file[0].id + '">Завантажити</label>');

            // Hide by shifting to the left so we
            // can still trigger events
            $file.css({
                position: 'absolute',
                left: '-9999px'
            });

            $wrap.insertAfter($file)
                .append($file, $input, (isIE ? $label : $button));

            // Prevent focus
            $file.attr('tabIndex', -1);
            $button.attr('tabIndex', -1);

            $button.click(function() {
                $file.focus().click(); // Open dialog
            });

            $file.change(function() {

                var files = [],
                    fileArr, filename;

                // If multiple is supported then extract
                // all filenames from the file array
                if (multipleSupport) {
                    fileArr = $file[0].files;
                    for (var i = 0, len = fileArr.length; i < len; i++) {
                        files.push(fileArr[i].name);
                    }
                    filename = files.join(', ');

                    // If not supported then just take the value
                    // and remove the path to just show the filename
                } else {
                    filename = $file.val().split('\\').pop();
                }

                $input.val(filename) // Set the value
                    .attr('title', filename) // Show filename in title tootlip
                    .focus(); // Regain focus
                
                    $(".input-presence-file").focus().val("Есть файл").blur();

            });

            $input.on({
                blur: function() {
                    $file.trigger('blur');
                },
                keydown: function(e) {
                    if (e.which === 13) { // Enter
                        if (!isIE) {
                            $file.trigger('click');
                        }
                    } else if (e.which === 8 || e.which === 46) { // Backspace & Del
                        // On some browsers the value is read-only
                        // with this trick we remove the old input and add
                        // a clean clone with all the original events attached
                        $file.replaceWith($file = $file.clone(true));
                        $file.trigger('change');
                        $input.val('');
                    } else if (e.which === 9) { // TAB
                        return;
                    } else { // All other keys
                        return false;
                    }
                }
            });

        });

    };

    // Old browser fallback
    if (!multipleSupport) {
        $(document).on('change', 'input.customfile', function() {

            var $this = $(this),
                // Create a unique ID so we
                // can attach the label to the input
                uniqId = 'customfile_' + (new Date()).getTime(),
                $wrap = $this.parent(),

                // Filter empty input
                $inputs = $wrap.siblings().find('.file-upload-input')
                .filter(function() {
                    return !this.value
                }),

                $file = $('<input type="file" id="' + uniqId + '" name="' + $this.attr('name') + '"/>');

            // 1ms timeout so it runs after all other events
            // that modify the value have triggered
            setTimeout(function() {
                // Add a new input
                if ($this.val()) {
                    // Check for empty fields to prevent
                    // creating new inputs when changing files
                    if (!$inputs.length) {
                        $wrap.after($file);
                        $file.customFile();
                    }
                    // Remove and reorganize inputs
                } else {
                    $inputs.parent().remove();
                    // Move the input so it's always last on the list
                    $wrap.appendTo($wrap.parent());
                    $wrap.find('input').focus();
                }
            }, 1);

        });
    }
    $('input[type=file]').customFile();

    // Phone Mask
    $('#phone_number').mask('+38 (000) 000-0000', {
        'translation': {
            0: {
                pattern: /[0-9+]/
            }
        }
    });
    $('#phone_mobileid').mask('+38 (000) 000-0000', {
        'translation': {
            0: {
                pattern: /[0-9+]/
            }
        }
    });

    // If adrress check (disable inputs)
    $('#terms-address').on('click', function() {
        $('#city').attr('disabled', $(this).is(':checked'));
        $('#street').attr('disabled', $(this).is(':checked'));
        $('#house').attr('disabled', $(this).is(':checked'));
        $('#housing').attr('disabled', $(this).is(':checked'));
        $('#flat').attr('disabled', $(this).is(':checked'));
        $('#index').attr('disabled', $(this).is(':checked'));
    });

    // FAQ Accordion
    $(".expand").on("click", function() {
        $(".faq-t").removeClass("faq-o");
        $(".detail:visible").slideUp();
        if (!$(this).next().is(":visible")) {

            $(this).next().slideDown(200);
            $(this).find(".faq-t").addClass("faq-o");
        }
    });

    // Contract Page
    $('#contract-terms').change(function() {
        $('.code-wrapper').toggle();
    });
    $('.show-dialog').click(function() {
        $(this).parent().hide().next().show();
    });
    var contract = $('.contract');
    if (contract) {
        function goToNextInput(e) {
            var key = e.which,
                t = $(e.target),
                sib = t.next('input');
            if (key != 9 && (key < 48 || key > 57)) {
                e.preventDefault();
                return false;
            }
            if (key === 9) {
                return true;
            }
            if (!sib || !sib.length) {
                sib = contract.find('input').eq(0);
            }
            sib.select().focus();
        }

        function onKeyDown(e) {
            var key = e.which;
            if (key === 9 || (key >= 48 && key <= 57)) {
                return true;
            }
            e.preventDefault();
            return false;
        }

        function onFocus(e) {
            $(e.target).select();
        }
        contract.on('keyup', 'input', goToNextInput);
        contract.on('keydown', 'input', onKeyDown);
        contract.on('click', 'input', onFocus);
    }

    $(function () {
        $('a.dropdown-toggle').on("click", function (e) {
            e.preventDefault();
        });
    });

    jQuery(document).ready(function (e) {
        
        $(document).on('click', '.show_more__btn', function(){
            var targetContainer = $('.news-list'),          //  Контейнер, в котором хранятся элементы
                url =  $('.show_more__btn').attr('data-url');    //  URL, из которого будем брать элементы

            if (url !== undefined) {
                $.ajax({
                    type: 'GET',
                    url: url,
                    dataType: 'html',
                    success: function(data){

                        //  Удаляем старую навигацию
                        $('.show_more__btn').remove();

                        var elements = $(data).find('.news-item'),  //  Ищем элементы
                            pagination = $(data).find('.show_more__btn');//  Ищем навигацию

                        targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                        targetContainer.append(pagination); //  добавляем навигацию следом

                    }
                })
            }

        });

        $('a.dropdown-toggle').on("click", function (e) {
            e.preventDefault();
        });
        function t(t) {
            e(t).bind("click", function (t) {
                t.preventDefault();
                e(this).parent().fadeOut()
            })
        }
        e(".dropdown-toggle").click(function () {
            var t = e(this).parents(".button-dropdown").children(".drd-menu").is(":hidden");
            e(".button-dropdown .drd-menu").hide();
            e(".button-dropdown .dropdown-toggle").removeClass("active");
            if (t) {
                e(this).parents(".button-dropdown").children(".drd-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
            }
        });
        e(document).bind("click", function (t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .drd-menu").hide();
        });
        e(document).bind("click", function (t) {
            var n = e(t.target);
            if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
        })
    });

}(jQuery));

function numberOnly(input) {
    var regex = /[^0-9]/gi;
    input.value = input.value.replace(regex, "");
}