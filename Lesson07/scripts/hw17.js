console.log("Hello, World!");

//ДЗ 17. Функція із замиканням

//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
//Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28


function test(){
let sum = 0;

    return function add(x) {
    
        sum = sum + x;
        console.log(sum);
    }
}
const testVar = test(3);
testVar(3);
testVar(5);
testVar(20);