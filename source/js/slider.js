
  var slideIndex = 1;
  showDivs(slideIndex);

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("slider__switch");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("slider__item--display");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__switch--active", "");
    }
    x[slideIndex-1].className = x[slideIndex-1].className.replace(" slider__item--display", "");
    dots[slideIndex-1].className += " slider__switch--active";
  }

  var bulet = document.querySelectorAll(".slider__switch");

  bulet[0].onclick = function () {
    currentDiv(1);
  };
  bulet[1].onclick = function () {
    currentDiv(2);
  };

  bulet[2].onclick = function () {
    currentDiv(3);
  };

  function myLoop () {
    //  create a loop function
    var x = document.getElementsByClassName("slider__item");
    if (window.matchMedia("(max-width: 767px)").matches) {
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      currentDiv(slideIndex);          //  your code here
      slideIndex++;                     //  increment the counter
      if (slideIndex <= 3) {            //  if the counter < 10, call the loop function
        myLoop();             //  ..  again which will trigger another
      } else {slideIndex = 1;
        myLoop();
      }                       //  ..  setTimeout()
    }, 5000)}
      else {
      setTimeout(function () {
        myLoop();
      }, 1000)}
  }

  myLoop();

