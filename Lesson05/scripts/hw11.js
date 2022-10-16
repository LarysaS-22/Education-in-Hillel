console.log("Hello, World!");
//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

//1. Знайти суму та кількість позитивних елементів.
//Знайти добуток позитивних елементів.
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

console.warn(arr);

let sumPositiveNumber = 0;
let amountPositiveNumber = 0;
let mulPositiveNumber = 1;

for (let i = 0 ; i < arr.length ; i++ ) {
    if (arr [ i ] > 0) {
      sumPositiveNumber = sumPositiveNumber + arr[i];
      amountPositiveNumber = amountPositiveNumber + 1;
      mulPositiveNumber = mulPositiveNumber * arr[i];
    }
}
console.log(`\n - Сума позитивних елементів: ${sumPositiveNumber} 
- кількість позитивних елементів: ${amountPositiveNumber}
- добуток позитивних елементів: ${mulPositiveNumber} \n` );

//2. Знайти мінімальний елемент масиву та його порядковий номер.

let minElementArr = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= minElementArr) {
    minElementArr = arr[i];
    }
 }
console.log(`- мінімальний елемент масиву : ${minElementArr} \n` );
console.log(`- порядковий номер мінімального елементу масиву: ${arr.indexOf(minElementArr)}\n`);

//3. Знайти максимальний елемент масиву та його порядковий номер.

let maxElementArr = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= maxElementArr) {
    maxElementArr = arr[i];
    }
 }
console.log(`- максимальний елемент масиву: ${maxElementArr} \n` );
console.log(`- індекс максимального елементу масиву: ${arr.indexOf(maxElementArr)} \n`);

//4. Визначити кількість негативних елементів.

let amountNegativeNumbers = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      amountNegativeNumbers = amountNegativeNumbers + 1;
    }
}
console.log(`- кількість негативних елементів : ${amountNegativeNumbers} \n` );

//5. Знайти кількість непарних позитивних елементів.
//Знайти суму непарних позитивних елементів.

let amountPositiveOddNumbers = 0;
let sumPositiveOddNumbers = 0;

for (let i = 0; i < arr.length; i++) {
   if(arr[i] > 0 && (arr[i] % 2)===1) {
    amountPositiveOddNumbers = amountPositiveOddNumbers +1;
    sumPositiveOddNumbers = sumPositiveOddNumbers +  arr[i];  
    }
  }
console.log(`-кількість непарних позитивних елементів: ${amountPositiveOddNumbers}
- сума непарних позитивних елементів ${sumPositiveOddNumbers} \n` );

//6. Знайти кількість парних позитивних елементів.
//7. Знайти суму парних позитивних елементів.

let amountPositiveEvenNumbers = 0;
let sumPositiveEvenNumbers = 0;

for (let i = 0; i < arr.length; i++) {
   if(arr[i] > 0 && (arr[i] % 2)===0) {
    amountPositiveEvenNumbers = amountPositiveEvenNumbers +1;
    sumPositiveEvenNumbers = sumPositiveEvenNumbers + arr[i];
    }
  }
console.log(`- кількість парних позитивних елементів: ${amountPositiveEvenNumbers}
- сума парних позитивних елементів: ${sumPositiveEvenNumbers} \n` );

//Знайти найбільший серед елементів масиву, остальні обнулити.

let maxElemArr = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= maxElemArr) {
    maxElemArr = arr[i];
    } 
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxElemArr) {
  arr[i]=0;
}
}
console.log(`- найбільший серед елементів масиву: ${maxElemArr} \n` );
console.log(arr);