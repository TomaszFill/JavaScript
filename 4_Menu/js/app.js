document.addEventListener('DOMContentLoaded', function () {
var menu = document.querySelectorAll('.nav>ul>li');
console.log(menu);

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("mouseover", function (){
    var nav = this.firstElementChild;
    if (nav !== null) {
    nav.style.display = "inline-block";
    }
  })
  menu[i].addEventListener("mouseout", function (){
    var nav = this.firstElementChild;
    if (nav !== null) {
    nav.style.display = "none";
  }
  })
}
});
