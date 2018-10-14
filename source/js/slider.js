
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

  var slider = document.querySelector(".slider");
  var bulet = slider.querySelectorAll(".slider__switch");

  for (let i = 0; i < bulet.length; i++) {
    bulet[i].onclick = function () {
      currentDiv(i+1);
    };
  }

  var slideIndex2 = 1;
  showDivs2(slideIndex2);

  function currentDiv2(n) {
    showDivs2(slideIndex2 = n);
  }

  function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slider-second__item");
    var dots = document.getElementsByClassName("slider-second__switch");
    if (n > x.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("slider-second__item--display");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider-second__switch--active", "");
    }
    x[slideIndex2-1].className = x[slideIndex2-1].className.replace(" slider-second__item--display", "");
    dots[slideIndex2-1].className += " slider-second__switch--active";
  }

  var sliderSecond = document.querySelector(".slider-second");
  var buletSecond = sliderSecond.querySelectorAll(".slider-second__switch");
  for (let i = 0; i < buletSecond.length; i++) {
    buletSecond[i].onclick = function () {
      currentDiv2(i+1);
    };
  }
  var sliderSecondLeftArrow = sliderSecond.querySelector(".slider-second__main-switch--left");

  var sliderSecondRightArrow = sliderSecond.querySelector(".slider-second__main-switch--right");

  sliderSecondRightArrow.onclick = function () {
    if (slideIndex2 > 0) {currentDiv2(slideIndex2-1);}
    else {slideIndex2 = 4};

  };

  sliderSecondLeftArrow.onclick =function () {
    if (slideIndex2 < 4) {currentDiv2(slideIndex2+1);}
    else {slideIndex2 = 0};
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

