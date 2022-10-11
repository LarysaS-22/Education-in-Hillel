console.log("Hello, World!");
//ДЗ 8. switch...case
//Переписати код нижче з використанням конструкції switch…case

let numOrStr1 = prompt('input number or string');
console.log(numOrStr1)
/*
if(numOrStr1 === null) {
console.log('ви скасували')
} else if( numOrStr1.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr1 ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}
*/

switch (true) {
      case (numOrStr1 === null):
      console.log('ви скасували');
      break;
      case ( numOrStr1.trim() === '' ):
      console.log('Empty String');
      break;
      case ( isNaN( +numOrStr1 ) ):
      console.log('number is Ba_NaN');
      break;
      default:
      console.log('OK!');
}