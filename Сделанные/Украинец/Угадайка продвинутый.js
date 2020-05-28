var number = Math.floor(10*Math.random()) + 1;
var count = 2;

console.log (number);
document.getElementById('check').onclick = function (){
  if (count>0){
     var usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);

     var out = document.getElementById('out');

     if (usernum == number){
     out.innerHTML = 'Ура Вы угадали!';
     }
     else if (usernum>number){
     out.innerHTML = 'Перелёт';
     }
     else if (usernum<number){
     out.innerHTML = 'Недолёт';
   }
   document.getElementById('count').innerHTML = 'Осталось попыток: ' +count;
   count = count - 1;
 }
 else{
   alert ('Попытки закончились, Вы проиграли. Страница будет перезагружена');
   location.reload ();
 }
}
