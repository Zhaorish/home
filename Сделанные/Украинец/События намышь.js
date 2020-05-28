// onclick - ЛКМ
// onmouseenter - наведение мыши
// ondblclick - двойное нажатие ЛКМ
// oncontextmenu - ПКМ
// onmouseleave - уведение мыши с элемента
// onmousemove - движение внутри блока мыши
// onmousedown - на зажимании клавиши мыши
// onmousemove - движение мыши

//
// var block = document.getElementById('one');
//
// block.onclick = function (){
// 	this.style.background = 'green';
// 	this.onclick = null;
// }
//
// block.ondblclick = function (){
// 	this.style.background = 'red';
// }
//
// block.oncontextmenu = function (){
// 	this.style.background = 'black';
// 	return false;
// }
// document.oncontextmenu = function(){
// 	return false;
// }
// block.onmouseenter = function (){
// 	console.log('in!!!');
// 	this.style.background = 'gold';
// }
//
// block.onmouseleave = function () {
// 	this.style.background = 'orange';
// }
// var a=0
// block.onmousemove = function () {
// 	a++
// 	this.style.width = 100 + a+'px';
// }
//
// block.onmousedown = function (event) {
// 	this.style.background = 'cyan';
// 	console.log ('button: ' +event.button);
// 	console.log ('which: ' +event.which);
// }
//
// block.onmouseup = function () {
// 	this.style.background = 'green';
// }

// document.onmousemove = function () {
// 	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src ="/home/vitali/Pulpit/JS MY/pobrane.jpeg" id="cat">');
//    var cat = document.getElementById('cat');
// 	 cat.style.position = 'fixed';
//
// 	 document.onmousemove = function(event){
//
// 	 	cat.style.left = event.clientX +20 +'px';
// 	 	cat.style.top = event.clientY +20 +'px';
//
// 	 }
// }

document.getElementById('myslide').onmousemove = function (event){
	var x = event.offsetX; //относительно родителя
	console.log(x);
	document.getElementById('two').style.width = x + 'px';
}

document.getElementById('myslide').onmouseleave = function(event){
	document.getElementById('two').style.width = '375px';
}
