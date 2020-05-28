//Сробатывание на клавишу


// document.onkeypress = function(event){
// 	console.log(event);
// 	if (event.shiftKey){
// 		console.log('Нажата клавиша Shift');
// 	}
// }

// document.getElementById('test').onkeypress = function(event){
// 	// console.log(event);
// 	if (event.keyCode<48 || event.keyCode>57){
// 	console.log('Не цифра');
// 	}
// }

// Пароль меняющий вывод на экран случайное число настоящее сохраняет в логе

// var str = '';
//
// document.getElementById('test').onkeypress = function (event){
// 	// console.log(event);
// 	str += event.key;
// 	console.log(str);
// 	// console.log(String.fromCharCode(122));
// 	this.value += String.fromCharCode(getRandomInt(65, 122));
// 	return false;
// 	//97-122; 65-90 латинские буквы
// }
//
// function getRandomInt(min, max){
// 	return Math.floor(Math.random() * (max - min)) + min;
// }


// на сробатывание всех клавиш (лево право шифт ентер контрл)
// var block = document.getElementById('test');
// var left = 0;
// var top1 = 0;
//
// document.onkeydown = function (event){
// 	console.log(event);
// 	if (event.key == 'ArrowRight'){
// 		block.style.left = left + 'px';
// 		left++;
// 	}
// 	if (event.key == 'ArrowDown'){
// 		block.style.top = top1 + 'px';
// 		top1++;
// 	}
// }
//
// document.onkeyup = function(event){
// 	console.log('Отпустили клавишу');
// }
