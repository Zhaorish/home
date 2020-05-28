// if (2*4 == 8) {
//   console.log('Верно');
// } else{
//   console.log('Не верно');
// }


let num = 50;

// if (num < 49){
//   console.log('Не верно');
// } else if (num > 100){
// console.log('Много')
// } else {
//   console.log('Верно!');
// };
// (num == 50) ? console.log('Верно') : console.log('Не верно'); //Упрощённая запись строк 10-16

switch (num){
  case num < 49:
     console.log('Неверно!');
     break;
  case num > 100:
     console.log('Много!');
     break;
  case num > 80:
     console.log('Всё ещё много!');
     break;
  case 50:
     console.log('Верно!');
     break;
  default:
     console.log('Что-то пошло не так!');
     break;
}
