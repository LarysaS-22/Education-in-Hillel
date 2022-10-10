console.log("Hello, World!");
//ДЗ 9. Написання циклів
//- Вивести на сторінку в один рядок через кому числа від 10 до 20-------------------------------------

document.write(`1. Вивести на сторінку в один рядок через кому числа від 10 до 20 : <br> `);

for(let index1 = 10 ; index1 <= 20;  index1++ ) {

    document.write(`${index1} ${index1 <20 ? ", " : ""}`) ;
}

//- Вивести квадрати чисел від 10 до 20 ----------------------------------------------------------------

document.write(`<br><br> 2. Вивести квадрати чисел від 10 до 20:  <br> `);

for(let index2 = 10 ; index2 <= 20;  index2++ ) {
    
    document.write(`${index2} * ${index2} =  ${index2*index2} ; <br>`);
}

//- Вивести таблицю множення на 7-----------------------------------------------------------------------

document.write(`<br> 3. Вивести таблицю множення на 7:  <br> `);

for(let index3 = 1 ; index3 <= 10;  index3 ++ ) {
    
    document.write(` ${index3} * 7 =  ${index3*7} ; <br>`);
}

//-Знайти суму всіх цілих чисел від 1 до 15 ----------------------------------------------------------

document.write(`<br> 4. Знайти суму всіх цілих чисел від 1 до 15:  <br> `);

let sumIntegerNumbers = 0;

for(let index4 = 1 ; index4 <= 15;  index4 ++ ) {
    sumIntegerNumbers  = sumIntegerNumbers + index4;
    document.write(`${index4} ${index4 <15 ? " + " : ""}`);
}

document.write(` = ${sumIntegerNumbers} <br> `);

//-Знайти добуток усіх цілих чисел від 15 до 35--------------------------------------------------------

document.write(`<br> 5. Знайти добуток усіх цілих чисел від 15 до 35:  <br> `);

let multIntegerNumbers = 1;

for(let index5 = 15 ; index5 <= 35;  index5 ++ ) {
    multIntegerNumbers  = multIntegerNumbers * index5;
    document.write(`${index5} ${index5 <35 ? " * " : ""}`);
}

document.write(` = ${multIntegerNumbers} <br> `);

//-Знайти середнє арифметичне всіх цілих чисел від 1 до 500

document.write(`<br> 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500:  `);

let arithmeticalMean = 0;
let index6 = 1;

for( ; index6 <= 500;  index6 ++ ) {
    arithmeticalMean  = arithmeticalMean + index6;
    }

document.write(`<br> ${arithmeticalMean / (index6 - 1) } <br> `);

//-Вивести суму лише парних чисел в діапазоні від 30 до 80

document.write(`<br>7. Вивести суму лише парних чисел в діапазоні від 30 до 80:  `);

let sumEvenNumbers = 0;

for( let index7 = 30; index7 <= 80;  index7 = index7 + 2 ) {
   
    sumEvenNumbers  = sumEvenNumbers + index7;
    }

document.write(`<br> ${sumEvenNumbers} <br> `);


//- Вивести всі числа в діапазоні від 100 до 200 кратні 3

document.write(`<br> 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3:  `);

for(let index8 = 100 ; index8 <= 200;  index8 ++ ) {
    result8 = index8 / 3;
      if( Number.isInteger(result8)) document.write(`${index8}  `);
}

document.write( '<br> ');

//-Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//-Визначити кількість його парних дільників
//-Знайти суму його парних дільників

document.write(`<br> 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
Визначити кількість його парних дільників. Знайти суму його парних дільників <br> `);

let  numberIntegers = 24;

document.write(`- Всі  дільники числа ${numberIntegers}: <br> `);

for (let index9 = 1 ; index9 <= numberIntegers ;  index9 ++ ) {
    result9 = numberIntegers/index9;
      if ( Number.isInteger(result9)) document.write(`${index9}  `);
      
}

let numberEvenDivisors = 0;
let sumEvenDivisors = 0;

for (let index10 = 1 ; index10 <= numberIntegers ;  index10 ++ ) {
    result9 = numberIntegers / index10/2;
      if ( Number.isInteger(result9)) numberEvenDivisors = numberEvenDivisors + 1, 
                                      sumEvenDivisors = sumEvenDivisors + index10 * 2;
}

document.write(`<br> - Кількість парних дільників : <br> ${numberEvenDivisors} , <br> - сума парних дільників: <br> ${sumEvenDivisors}`);


//-Надрукувати повну таблицю множення від 1 до 10-----------------------------------------------------

document.write(`<br><br> 10. Надрукувати повну таблицю множення від 1 до 10:  <br> `);

for ( let i = 1 ; i <= 10 ; i ++) {
    
    for (let j = 1  ; j <= 10 ; j ++) {
    product = i * j ;
    document.write (` ${i} * ${j} = ${product} <br>`); 
    }
}