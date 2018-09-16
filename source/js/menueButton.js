var Button = document.querySelector('.main-nav__togle');
Button.onclick = function (evt) {
  evt.preventDefault();
  var Menue = document.querySelector('.main-nav')
  Menue.classList.toggle("main-nav--closed"); Menue.classList.toggle("main-nav--opened");
};

/*
Button.onmouseup = function (evt) {evt.preventDefault(); Button.classList.toggle('main-nav__togle--clicked');}

Button.onmousedown = function (evt) {evt.preventDefault(); Button.classList.toggle('main-nav__togle--clicked');}
*/
