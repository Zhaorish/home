//1 задание и 2 +++++
//var m = {
  //"name" : "Vito",
  //"sex" : "M",
  //"age" : 25,
  //"personal number" : "12345d",
  //"year" : function (){
    //return 2020 - this.age;
  //}
//};
//console.log (m.year());


//3 задание +++++

//var m = {
  //"mas" : [5, 6, 34, 12, 45],
  //"sum" : function (){
    //var sum = 0;
    //for (var i = 0; i< this.mas.length; i++){
      //sum = sum + this.mas[i];
    //}
    //return sum;
  //}
//}
//console.log (m.sum());


//задание 4 +++++

//var a = {
//  "12345" : {
//  "name" : "Вишня",
//  "cost" : 12365,
//  "weight" : "1 кг",
//"img" : "/home/vitali/Pulpit/JS MY/Вишня.jpg",
//  "sklad" : "yes"
// },
//"54231" : {
//"name" : "Сок",
//"cost" : 57812,
//"weight" : "1 литр",
//"img" : "/home/vitali/Pulpit/JS MY/Сок.jpg",
//"sklad" : "yes"
 //},

//"53231" : {
//"name" : "Сок",
//"cost" : 57812,
//"weight" : "1 литр",
//"img" : "/home/vitali/Pulpit/JS MY/Сок.jpg",
//"sklad" : "yes"
 //}
//};
//console.log (a);

//var out = '';
 //for (var key in a){
   //out += 'Название: ' + a[key].name + '<br> ';
   //out += 'Стоимость: ' + a[key].cost + '<br> ';
   //out += 'Мера измерения: ' + a[key].weight + '<br> ';
   //out += 'Наличие: ' + a[key].sklad + '<br> ';
   //out += '<img src="' + a[key].img+'">';
   //out += '<hr>';
 //}
//var out = document.getElementById('out').innerHTML = out;


// Задания 5 +++++

//var day = {
//	"d1" : "Понедельник",
//	"d2" : "Вторник",
//	"d3" : "Среда",
//	"d4" : "Четверг"
//};
//var out = document.getElementById('out')

 //for (var key in day){
 //out.innerHTML += key + ' - ' + day[key] + '</br > ';
//}

// задание 6 +++++

//var arr = {
	//"k1" : "17w4",
	//"k2" : "1sfsg7",
	//"k3" : "17nd",
	//"k16" : "1237",
	//"k14" : "1w37",
	//"3k1" : "1wrw7"
//};

//var out = document.getElementById('out');
//for (var key in arr){
  //out.innerHTML += key + '***' + arr[key] + '<br> '
//}


//Задание 7 ++++++

// var arr = {
// 	"k1" : "17w4",
// 	"k2" : "1sfsg7",
// 	"k3" : "17nd",
// 	"k16" : "1237",
// 	"k14" : "1w37",
// 	"3k1" : "1wrw7"
// };
//
// // console.log (arr);
//
// var mass =  JSON.stringify(arr);
//
// localStorage.setItem("myKey", mass);
//
// var returnObj = JSON.parse(localStorage.getItem("myKey"));
//
// var localValue = localStorage.getItem('mykey');
//
// console.log(mass);
// console.log(returnObj);


// var obj = {
// 	item1: 1,
// 	item2: [123, "two", 3.0],
// 	item3:"hello"
// };
//
// var serialObj = JSON.stringify(obj); //сериализуем его
//
// localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"
//
// var returnObj = JSON.parse(localStorage.getItem("myKey"))
// var localValue = localStorage.getItem('myKey');
// console.log(localValue); //"myValue"

//задание 8 +++++

//var goods = {
	//"dd" : {
		//"name": "Яблоки",
		//"cost": 13
	//},
	//"dc" : {
		//"name": "Груши",
		//"cost": 23
	//},
	//"cd" : {
		//"name": "Абрикосы",
		//"cost": 33
	//},
	//"dee" : {
		//"name": "Сливы",
		//"cost": 43
	//},
	//"dd2" : {
		//"name": "Вишни",
		//"cost": 19
	//},
//};

//var out = document.getElementById('out');
//for (var key in goods){
	//if (goods[key].cost > 20){
  //out.innerHTML += key + '  -  ' + goods[key].name + ' ' + goods[key].cost + '<br> ';
 //}
//}

// задание 9 +++++

//var goods = {
	//"apple" : {
		//"name": "Яблоки",
		//"cost": 230,
		//"amount":300
	//},
	//"pear" : {
		//"name": "Груши",
// 		"cost": 34,
// 		"amount":100
// 	},
// 	"apricot" : {
// 		"name": "Абрикосы",
// 		"cost": 23,
// 		"amount":170
// 	},
// 	"plum" : {
// 		"name": "Сливы",
// 		"cost": 21,
// 		"amount":250
// 	},
// 	"cherry" : {
// 		"name": "Вишни",
// 		"cost": 19,
// 		"amount":312
// 	},
// };
//
// var out = document.getElementById('out');
// for (var key in goods){
// 	if (goods[key].cost < 300, goods[key].amount > 300, goods[key].cost > 220){
// 		out.innerHTML += 'Наименование: ' +  goods[key].name + '<br> ';
// 		out.innerHTML += 'Стоимость: ' + goods[key].cost  + '<br> ';
// 		out.innerHTML += 'Колличество: '+ goods[key].amount + '<br> ';
// 		}
// }
