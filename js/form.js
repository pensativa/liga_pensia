(function($) {
  const radioBtns = document.querySelectorAll('.openform__choise input');
  const button = document.querySelector('.openform__btn');
  for (let btn of radioBtns) {
    btn.onchange = function(){
      const href = btn.dataset.href;
      button.setAttribute('href', href);
    };
  }
}(jQuery));
