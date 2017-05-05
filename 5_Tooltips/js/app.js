document.addEventListener('DOMContentLoaded', function () {

var tooltips = document.querySelectorAll('.tooltip');

for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener("mouseover", function (){
      var display = this.dataset.text;
      var tooltip = document.createElement('span');
      var newTooltip = this.appendChild(tooltip);
      newTooltip.classList.add('tooltipText');
      newTooltip.innerText = display;
    })
    tooltips[i].addEventListener("mouseout", function (){
      var toDelete = this.firstElementChild;
      toDelete.parentNode.removeChild(toDelete);
    })
  }








});
