(function($) {  
    //Range Slider Age
    $("#slider-age").slider({
      range: "min",
      animate: true,
      value: 20,
      min: 18,
      max: 65,
      step: 1,
      slide: function(event, ui) {
        update(1,ui.value); //changed
      }
    });
    $("#age").val(20); //Added, set initial Age value.
    $('#slider-age span').html(20);

    //Range Slider AgeOut
    $("#slider-ageOut").slider({
      range: "min",
      animate: true,
      value: 60,
      min: 40,
      max: 70,
      step: 1,
      slide: function(event, ui) {
        update(2,ui.value); //changed
      }
    });
    $("#ageOut").val(60); //Added, set initial AgeOut value.
    $('#slider-ageOut span').html(60);

    //Range Slider Deposit
    $("#slider-deposit").slider({
      range: "min",
      animate: true,
      value: 500,
      min: 1000,
      max: 30000,
      step: 100,
      slide: function(event, ui) {
        update(3,ui.value); //changed
      }
    });
    //Added, set initial value.
    $("#deposit").val(500);
    $('#slider-deposit span').html(500);

    //Range Slider Deposit
    $("#slider-period").slider({
      range: "min",
      animate: true,
      value: 20,
      min: 10,
      max: 30,
      step: 1,
      slide: function(event, ui) {
        update(4,ui.value); //changed
      }
    });
    //Added, set initial value.
    $("#period").val(20);
    $('#slider-period span').html(20);

    //Range Slider Deposit
    $("#slider-income").slider({
      range: "min",
      animate: true,
      value: 6,
      min: 3,
      max: 15,
      step: 1,
      slide: function(event, ui) {
        update(5,ui.value); //changed
      }
    });
    //Added, set initial value.
    $("#income").val(6);
    $('#slider-income span').html(6);
   

    //Actualizar Input
   
    if ($('.liga-calculator').length){
       for (input of document.querySelectorAll("input[type=hidden]")) {
            update();
        }
    }

    function update(slider,val) {
      var formatNumber = {
        separador: ",",
        sepDecimal: '.',
        formatear: function (num) {
            num +='';
            var splitStr = num.split('.');
            var splitLeft = splitStr[0];
            var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
            var regx = /(\d+)(\d{3})/;
            while (regx.test(splitLeft)) {
                splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
            }
            return this.simbol + splitLeft  +splitRight;
        },
        new: function(num, simbol) {
            this.simbol = simbol ||'';
            return this.formatear(num);
        }
      }
      //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
      var $age = slider == 1?val:$("#age").val();
      var $ageOut = slider == 2?val:$("#ageOut").val();
      var $deposit = slider == 3?val:$("#deposit").val();
      var $period = slider == 4?val:$("#period").val();
      var $income = slider == 5?val:$("#income").val();

      $('#slider-age span').html($age);
      $('#age').val($age);
      $('#slider-ageOut span').html($ageOut);
      $('#ageOut').val($ageOut);
      $('#slider-deposit span').html($deposit);
      $('#deposit').val($deposit);
      $('#slider-period span').html($period);
      $('#period').val($period);
      $('#slider-income span').html($income);
      $('#income').val($income);

      calcPension(input);

    }

    function calcPension(input) {
        var pensResult = $('#pensResult');
        var maleBtn = document.getElementById('male');
        var femaleBtn = document.getElementById('female');

        var age = parseInt($('#age').val()); // Текущий возраст
        var ageOut = parseInt($('#ageOut').val()); // Выход на пенсию
        var deposit = parseInt($('#deposit').val()); // Ежемесячный взнос, грн.
        var period = parseInt($('#period').val()); //Период выплат
        var _period = period * 12; // Период выплат в месяцах
        var income = parseInt($('#income').val()); //Ожидаемая доходность (%)
        var diff = (ageOut - age) * 12; // Разница между пенсионным возрастом и текущим возрастом в месяцах
        var rate = (income / 100) / 12; // Ежемесячная ставка
        var _rate = parseFloat(rate.toFixed(7)); // Ежемесячная ставка = 0,0083333 
        var summ1 = deposit * _rate + deposit; // Начальный доход от первого месяца
        for (var i = 3; i <= diff; i++) {
            var summ2 = (summ1 + deposit) * _rate + summ1 + deposit;
            summ1 = summ2;
            summ2 = (summ1 + deposit) * _rate + summ1 + deposit;
        }
        var coefficient = (_period / 100) + 0.43171; // Коефициент - для обчисления средней
        var year = (summ2 / _period) + (_rate / _period); // Первая выплата за месяц
        var average = year * coefficient; // Средняя пенсионая выплата
        var _average = average.toFixed(0);
        var nill = 0;
        var maxNum = parseInt(9999999);
        if (pensResult) {
            if (age >= ageOut) {
                pensResult.html(nill);
            } else if (_average >= maxNum) {
                pensResult.html(maxNum);
            } else {
                pensResult.html(_average);
            }


        }
        var benefit_text1 = $('.benefits-wrap .one h4');
        var benefit_text2 = $('.benefits-wrap .two h4');
        var benefit_text3 = $('.benefits-wrap .three h4');
        var benefit_text4 = $('.benefits-wrap .four h4');
        var benefit_text5 = $('.benefits-wrap .five h4');
        var benefit_text6 = $('.benefits-wrap .six h4');
        var benefit_text7 = $('.benefits-wrap .seven h4');
        var benefit_text8 = $('.benefits-wrap .eight h4');

        if ( _average < 2500 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#E5E5E5');
            benefit_text6.css('color', '#E5E5E5');
            benefit_text5.css('color', '#E5E5E5');
            benefit_text4.css('color', '#E5E5E5');
            benefit_text3.css('color', '#E5E5E5');
            benefit_text2.css('color', '#E5E5E5');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average >= 2500 && _average <= 7000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#E5E5E5');
            benefit_text5.css('color', '#E5E5E5');
            benefit_text4.css('color', '#E5E5E5');
            benefit_text3.css('color', '#E5E5E5');
            benefit_text2.css('color', '#E5E5E5');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average > 7000 && _average <= 10000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#F0A828');
            benefit_text5.css('color', '#E5E5E5');
            benefit_text4.css('color', '#E5E5E5');
            benefit_text3.css('color', '#E5E5E5');
            benefit_text2.css('color', '#E5E5E5');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average > 10000 && _average <= 15000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#F0A828');
            benefit_text5.css('color', '#F0A828');
            benefit_text4.css('color', '#E5E5E5');
            benefit_text3.css('color', '#E5E5E5');
            benefit_text2.css('color', '#E5E5E5');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average > 15000 && _average <= 20000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#F0A828');
            benefit_text5.css('color', '#F0A828');
            benefit_text4.css('color', '#F0A828');
            benefit_text3.css('color', '#E5E5E5');
            benefit_text2.css('color', '#E5E5E5');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average > 20000 && _average <= 30000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#F0A828');
            benefit_text5.css('color', '#F0A828');
            benefit_text4.css('color', '#F0A828');
            benefit_text3.css('color', '#F0A828');
            benefit_text2.css('color', '#E5E5E5');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average > 30000 && _average <= 50000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#F0A828');
            benefit_text5.css('color', '#F0A828');
            benefit_text4.css('color', '#F0A828');
            benefit_text3.css('color', '#F0A828');
            benefit_text2.css('color', '#F0A828');
            benefit_text1.css('color', '#E5E5E5');
        } else if ( _average > 50000 ) {
            benefit_text8.css('color', '#F0A828');
            benefit_text7.css('color', '#F0A828');
            benefit_text6.css('color', '#F0A828');
            benefit_text5.css('color', '#F0A828');
            benefit_text4.css('color', '#F0A828');
            benefit_text3.css('color', '#F0A828');
            benefit_text2.css('color', '#F0A828');
            benefit_text1.css('color', '#F0A828');
        }

        //SwitchButton
        var switchButton = document.querySelector('.switch-button');
        var switchBtnRight = document.querySelector('.switch-button-case.right');
        var switchBtnLeft = document.querySelector('.switch-button-case.left');
        var activeSwitch = document.querySelector('.active');

        if (switchBtnLeft && switchBtnRight) {

            function maleImg () {
                if (age <= 25) {
                    $('.person-left').css('background-image', 'url(../img/male-18.png)');
                } else if (age >= 26 && age <= 35) {
                    $('.person-left').css('background-image', 'url(../img/male-26.png)');
                } else if (age >= 36 && age <= 47 ) {
                    $('.person-left').css('background-image', 'url(../img/male-36.png)');
                } else if (age >= 48 && age <= 65 ) {
                    $('.person-left').css('background-image', 'url(../img/male-48.png)');
                } if (_average >= 1 && _average <= 2500) {
                    $('.person-right').css('background-image', 'url(../img/male-48.png)');
                } else if (_average > 2500 && _average <= 20000) {
                    $('.person-right').css('background-image', 'url(../img/male-48.png)');
                } else if (_average > 20000 && _average <= 50000) {
                    $('.person-right').css('background-image', 'url(../img/male-48.png)');
                    $('.person-right-bag').css('background-image', 'url(../img/male-48.png)');
                    $('.person-right-bag').css('opacity', '1');
                    $('.person-right-car').css('opacity', '0');
                } else if (_average > 50000) {
                    $('.person-right').css('background-image', 'url(../img/male-48.png)');
                }
            }

            function femaleImg () {
                if (age <= 25) {
                    $('.person-left').css('background-image', 'url(../img/female-18.png)');
                    $('.person-right').css('background-image', 'url(../img/female-48m.png)');
                } else if (age >= 26 && age <= 35) {
                    $('.person-left').css('background-image', 'url(../img/female-26.png)');
                } else if (age >= 36 && age <= 47 ) {
                    $('.person-left').css('background-image', 'url(../img/female-36.png)');
                } else if (age >= 48 && age <= 65 ) {
                    $('.person-left').css('background-image', 'url(../img/female-48m.png)');
                } if (_average >= 1 && _average <= 2500) {
                    $('.person-right').css('background-image', 'url(../img/female-48m.png)');
                } else if (_average > 2500 && _average <= 20000) {
                    $('.person-right').css('background-image', 'url(../img/female-48.png)');
                } else if (_average > 20000 && _average <= 50000) {
                    $('.person-right').css('background-image', 'url(../img/female-48.png)');
                } else if (_average > 50000) {
                    $('.person-right').css('background-image', 'url(../img/female-48.png)');
                }
            }

            if (switchBtnLeft.classList.contains('active-case')) {
                maleImg();
            }
            if (switchBtnRight.classList.contains('active-case')) {
                femaleImg();
            }

            function switchLeft() {
                switchBtnRight.classList.remove('active-case');
                switchBtnLeft.classList.add('active-case');
            }

            function switchRight() {
                switchBtnRight.classList.add('active-case');
                switchBtnLeft.classList.remove('active-case');
            }

            switchBtnLeft.addEventListener('click', function() {
                switchLeft();
                maleImg();
            }, false);

            switchBtnRight.addEventListener('click', function() {
                switchRight();
                femaleImg();
            }, false);
        }
    }
}(jQuery));
