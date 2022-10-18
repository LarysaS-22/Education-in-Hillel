console.log("Hello, World!");

//Створити масив, довжину та елементи якого задає користувач.
//У міру змін виводити вміст масиву на сторінку.

const lengthArr = Number(prompt("Enter the number of array elements"));
console.log(typeof lengthArr);
const userArr = [];

for (let i=0; i < lengthArr; i++) {
    userArr.push (Number(prompt("Enter next elements")));
}
    console.warn(userArr);

//Відсортувати масив за зростанням.


console.warn(
    userArr.sort((a, b) => {   
      return a - b;
    })
  );

// Видалити елементи з масиву з 2 по 4 (включно!).  

    userArr.splice(2, 3);
    console.log(userArr);