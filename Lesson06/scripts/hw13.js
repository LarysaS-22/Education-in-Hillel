console.log("Hello, World!");
/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з 
масиву array.
*/


const arrayUser = [1, 5, 2, 3,5, 4, 5, 6, 7,1,5,6];
console.warn(arrayUser);

function removeElement(array, item) {

    const doubleItemArr = array.filter(doubl => doubl===item);
  
    for(i = 0; i < doubleItemArr.length; i++ ){
        
        array.splice(array.indexOf(item, i), 1);
    }
}

removeElement(arrayUser, 5 );
console.log(arrayUser);