function f1(){
  var p, p1;
  p = document.getElementById('out');
  p1 = document.getElementById('out1');
  var i=0;

  while (i<50){
    p.innerHTML += i+' ';
    i++;
  }
var j=100;
do{
  p1.innerHTML += j +' ';
  j--
  }
while (j>0);
}
