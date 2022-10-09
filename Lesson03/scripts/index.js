console.log("Hello, World!");

//-----------------------------------------------------------------------------------------------------------------------
//Домашнє завдання 03
//Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів
//Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
//Користувач ввів 2 і 2: 2+2=4, 2-2=0, 2*2=4 , 2/2=1


let enterNumberOne = prompt("Enter the first number (додавання, віднімання, множення та поділу двох чисел)");
let enterNumberTwo = prompt("Enter the second number");

let numberOne = Number(enterNumberOne);
let numberTwo = Number(enterNumberTwo);

alert(`User entered two nambers ${numberOne} and ${numberTwo}:
       ${numberOne} + ${numberTwo} = ${numberOne + numberTwo}, 
       ${numberOne} - ${numberTwo} = ${numberOne - numberTwo}, 
       ${numberOne} * ${numberTwo} = ${numberOne * numberTwo}, 
       ${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);


//-----------------------------------------------------------------------------------------------------------------------
//Домашнє завдання 04. Калькулятор
//1) питаємо у користувача, що він хоче зробити (add, sub, mult, div)
//2) питаємо у користувача перше число
//3) запитуємо у користувача друге число
//4) виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад ""2 + 3 = 5"")


let enterMathFunctions = prompt("Enter Math functions: add, sub, mult, div");
let enterNumberThree = prompt("Enter the first number");
let enterNumberFour = prompt("Enter the second number");

let numberThree = Number(enterNumberThree);
let numberFour = Number(enterNumberFour);

if(enterMathFunctions==="add") {alert(`${numberThree} + ${numberFour} = ${numberThree + numberFour}`)};
if(enterMathFunctions==="sub") {alert(`${numberThree} - ${numberFour} = ${numberThree - numberFour}`)};
if(enterMathFunctions==="mult") {alert(`${numberThree} * ${numberFour} = ${numberThree * numberFour}`)};
if(enterMathFunctions==="div") {alert(`${numberThree} : ${numberFour} = ${numberThree / numberFour}`)};


//----------------------------------------------------------------------------------------------------------------------
//Домашнє завдання 05. Години в секунди
//Напишіть скрипт, який переводить години в секунди
//Запитати у користувача кількість годин. Порахувати, скільки секунд у цій кількості годин
//Записати обчислене значення у змінну. Вивести цю змінну користувачеві через alert


const enterHours = prompt("Введіть кількість годин для перерахунку їх у секунди:");

const seconds = enterHours*3600;

alert(`Ви ввели ${enterHours} годин. Це є ${seconds} секунд !`);


//-----------------------------------------------------------------------------------------------------------------------
//Домашнє завдання 06. Середнє значення
//Визначити середнє арифметичне трьох чисел
//Отримати від користувача через три prompt три числа і показати через alert середнє арифметичне цих чисел


let enterNumbOne = prompt("Enter the first number (середнє арифметичне трьох чисел) "); 
let enterNumbTwo = prompt("Enter the second number");
let enterNumbThree = prompt("Enter the third number");

let NumbOne = Number(enterNumbOne); 
let NumbTwo = Number(enterNumbTwo);
let NumbThree = Number(enterNumbThree);

alert(`Середнє аріфметичне чисел ${NumbOne} , ${NumbTwo} та ${NumbThree} є ${(NumbOne + NumbTwo + NumbThree) / 3 }`);