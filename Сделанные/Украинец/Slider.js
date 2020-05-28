//document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer = 0;

function autoSlider(){
  timer = setTimeout(function(){var polosa = document.getElementById('polosa');
  left = left - 128;
  if (left<-512){
    left=0;
    ;
  }
  polosa.style.left = left +'px';
  autoSlider();}, 2000);
}
