var mas = document.getElementsByClassName('layer');
var j = 0;
var y = 0;

document.querySelector('.jlehmann').onmousewheel = function (event){
  if (event.delaY>0){
    y += parseInt(event.deltaY);
  }
  else{
    y += - parseInt(event.deltaY);
  }
  console.log(y);
  mas[j].style.top = -(y*0.1) +'px';
  if (y*0.1 >= 450){
    j++;
    y=0;
    if (j==mas.length-1){
      document.querySelector('.jlehmann').onmousewheel = null;
    }
  }
}
