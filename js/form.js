(function($) {
  const radioBtns = document.querySelectorAll('.openform__choise input');
  const button = document.querySelector('.openform__btn');
  for (let btn of radioBtns) {
    btn.onchange = function(){
      const href = btn.dataset.href;
      button.setAttribute('href', href);
    };
  }

  //Download files
  $('.file').change(function() {
    if ($(this).val() != '') {
      $(this).prev().text('Обрано файлів: ' + $(this)[0].files.length);
    } else {
      $(this).prev().text('додайте вручну, якщо документ не підтягнувся');
    }
  });

  //Form bankID
  $('#doctype').change(function() {
    if ($(this).val() === 'pasport' || $(this).val() === 'svidotctvo' || $(this).val() === 'zagranpasport' || $(this).val() === 'morpasport' || $(this).val() === 'dippasport' || $(this).val() === 'inozemny') {
      $('.bankid-form__block').slideDown();
      $('.bankid-form__block-id').slideUp();
    } else {
      $('.bankid-form__block').slideUp();
      $('.bankid-form__block-id').slideDown();
    }
  });

  $('#doctype-other').change(function() {
    $('.bankid-form__block-other').slideDown();
  });

  $('#fact').change(function() {
    if ($(this).is(':checked')) {
      $('#adres-fact').slideUp();
    } else {
      $('#adres-fact').slideDown();
    }
  });

  $('#fact-other').change(function() {
    if ($(this).is(':checked')) {
      $('#adres-fact-other').slideUp();
    } else {
      $('#adres-fact-other').slideDown();
    }
  });

  $('#otherperson').on("click", function() {
    if ($(this).is(':checked')) {
      $('.other-person__form').slideDown();
    } else {
      $('.other-person__form').slideUp();
    }
  });

  $('.same-adress-propiska').on("click", function(e) {
    e.preventDefault();
    $('#index-other').val( $('#index').val() );
    $('#oblast-other').val( $('#oblast').val() );
    $('#area-other').val( $('#area').val() );
    $('#punkt-other').val( $('#punkt').val() );
    $('#city-other').val( $('#city').val() );
    $('#vulica-other').val( $('#vulica').val() );
    $('#street-other').val( $('#street').val() );
    $('#korpus-other').val( $('#korpus').val() );
    $('#flat-other').val( $('#flat').val() );
  });

  $('.same-adress-fact').on("click", function(e) {
    e.preventDefault();
    $('#index-fact-other').val( $('#index-fact').val() );
    $('#oblast-fact-other').val( $('#oblast-fact').val() );
    $('#area-fact-other').val( $('#area-fact').val() );
    $('#punkt-fact-other').val( $('#punkt-fact').val() );
    $('#city-fact-other').val( $('#city-fact').val() );
    $('#vulica-fact-other').val( $('#vulica-fact').val() );
    $('#street-fact-other').val( $('#street-fact').val() );
    $('#korpus-fact-other').val( $('#korpus-fact').val() );
    $('#flat-fact-other').val( $('#flat-fact').val() );
  });
}(jQuery));
