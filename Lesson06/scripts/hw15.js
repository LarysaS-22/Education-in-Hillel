console.log("Hello, World!");

//1. Дан масив з елементами різних типів. Створити функцію яка вираховує середнє 
//арифметичне лише числових елементів даного масиву.

const arrayMixType = [1, -3 , 48, 'd', 2, 'o', -8, 's', 'v', 3];

function arithmeticalMean (array){
    const arrNumber = array.filter(el => Number(el));
     
    const sum = arrNumber.reduce((currentSum, currentNumber) => currentSum + currentNumber,  0);

    console.log('1 ' , array, arrNumber, sum/arrNumber.length);
}

arithmeticalMean(arrayMixType);



//2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути:
// +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять  від користувача. 

const enterNumberOne = prompt(`Введіть перший операнд`);
const enterNumberTwo = prompt(`Введіть другий операнд`);
const enterMathOperation = prompt(`Введіть математичну дію (+, -, *, /, %, ^ (ступінь )): `);

doMath(enterNumberOne,enterMathOperation,enterNumberTwo);

function doMath(x, znak, y) {
   const operand_1 = Number(x);
   const operand_2 = Number(y);
   let result ;

    if(znak === "+") { result=operand_1 + operand_2, ps=` =${result} ` };
    if(znak === "-") { result=operand_1 - operand_2, ps=`= ${result}` };
    if(znak === "*") { result=operand_1 * operand_2, ps=`= ${result}` };
    if(znak === "/") { result=operand_1 / operand_2 , ps=`= ${result}`};
    //if(znak === "%") { 
    //    result=operand_1 % operand_2, 
    //    result===0 ? ps=` ${result} - операнд_1 кратен операнду_2`:
    //    ps=`  - операнд_1 не кратен операнду_2`};
    
    if(znak === "^") { result=operand_1 ** operand_2 , ps=`= ${result}`};
    if(znak === "%") {result=operand_2 / operand_1*100, ps=` - ${operand_2} від ${operand_1} складає ${result} %`}; 
   console.log(`2. ${operand_1} ${znak} ${operand_2}  ${ps}`);
};



//3. Написати функцію заповнення даними користувача двомірного масиву. Довжину 
//основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів
// всіх масивів задає користувач.
//https://www.mattlunn.me.uk/2012/04/the-use-of-literals-vs-constructors/


const lengthArrayOuter  = prompt ( " outer array length = ");
const lengthArrayInternal  = prompt ("internal array length = ");


function fillingArray(lengthArrayOuter, lengthArrayInternal){

    let arrayTwoDimensional  = [];

    for (let i = 0 ; i  <lengthArrayOuter ; i++) {
        let arrayInternal = [];

        for (let j = 0 ; j < lengthArrayInternal ; j++) {
            arrayInternal.push(prompt(`enter element`));
        }

        arrayTwoDimensional.push(arrayInternal);
        console.warn('3 ', arrayTwoDimensional);
    };
};

fillingArray (lengthArrayOuter, lengthArrayInternal);


//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим 
//аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний 
//рядок та символи для видалення задає користувач

let string = prompt(`Введіть рядок`);
let deleteSymbol = prompt(`Введіть символи, які треба видалити`).split('');
console.log(string, deleteSymbol);

function filtrString(string,deleteSymbol){
const arrayWords = string.split(' '); //строка в массив слов
let arrayLetters=[];
let arrayToString=[];
        for(let i = 0 ; i < arrayWords.length ; i++ ) {
           
        arrayLetters.push(arrayWords[i].split(''))  ; // слово в массив
        }


for(let j = 0; j < deleteSymbol.length ; j++ ) {
    for(let x = 0 ; x < arrayLetters.length ; x ++ ) {

        removeElement(arrayLetters[x], deleteSymbol[j] ) ;

        function removeElement(array, item) {
            const doubleItemArr = array.filter(doubl => doubl===item);
            for(let i = 0; i < doubleItemArr.length; i++ ){
                array.splice(array.indexOf(item, i), 1);
            }
        }
    arrayToString[x]=arrayLetters[x].join('');

    }    
}  
console.log( arrayToString.join(' '));  

}

filtrString(string,deleteSymbol);