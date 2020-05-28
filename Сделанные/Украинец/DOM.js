// var div4 = document.getElementById('four4');//элемент
// // var p = div4.getElementsByTagName('p');
// var div = document.getElementsByTagName('div'); // массив
//
// console.log(div);
// div[2].style.background = 'yellow';
//---------------------------------------------------------
// var div = document.querySelector('div p')//.querySelector('p');// css selector single first element
// var div = document.querySelector('#four4 p');
// var div2 = document.querySelectorAll('div p'); //collection of all div in document
// console.log(div2);
//----------------------------------------
// four4.style.background = 'red';
//-------------------------------------------
// var div = document.querySelector('div');
// var child = div.childNodes;
// console.log(div.firstChiled);
// console.log(div.lastChiled);
// ---------------------------------
var hyper = document.querySelector('a');
console.log(hyper.parentElement.nextElementSibling);
console.log(hyper.parentElement.previousElementSibling);
