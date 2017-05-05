document.addEventListener('DOMContentLoaded', function () {
var image = document.querySelectorAll('#gallery img');
var show = document.querySelector('#showButton');
var hide = document.querySelector('#hideButton');
var input = document.querySelector('#tagInput');

show.addEventListener('click', function () {
  for (var i = 0; i < image.length; i++) {
    if (image[i].className == 'invisible') {
    image[i].classList.remove('invisible');
    }

    if (image[i].dataset.tag.indexOf(input.value) < 0 ) {
    image[i].classList.add('invisible')
    }
  }
});

hide.addEventListener('click', function (e) {
  for (var i = 0; i < image.length; i++) {
    if (image[i].className == 'invisible') {
    image[i].classList.remove('invisible');
    }

    var tag = tagInput.value;
    if (image[i].dataset.tag.indexOf(input.value) > -1 ) {
    image[i].classList.add('invisible')
    }
  }
});
});
