/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function(){

  var slideIndex = 0;
  carousel();

  function carousel() {

      var x = document.querySelectorAll(".mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 2000); // Change image every 2 seconds
  }

var buttonRight = document.querySelector('#nextPicture');
var buttonLeft = document.querySelector('#prevPicture');




});
