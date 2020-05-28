var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');
console.log(p);
//p.onclick = f1; не работает
for (var i=0; i<p.length; i++){
p[i].onclick = f1;
}

for (var i=0; i<one.length; i++){
one[i].onclick = f2;
}

function f1(){
  //alert('helo');
  console.log(this);
  this.style.background = 'pink';
  }

  function f2(){
    //alert('helo');
    console.log(this);
    this.style.background = 'green';
    this.style.fontWeight = 'bold';
    }
