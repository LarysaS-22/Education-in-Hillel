console.log("Hello, World!");

//Створити масив, довжину та елементи якого задає користувач.
//У міру змін виводити вміст масиву на сторінку.

const lengthArr = prompt("Enter the number of array elements");
const userArr = [];

for (let i=0; i < lengthArr; i++) {
    userArr.push (prompt("Enter next elements"));
}
    console.warn(userArr);

//Відсортувати масив за зростанням.

userArr.sort();
console.warn(userArr); // сортування за алфавітом, якщо були введені нечислові значення

console.warn(
    userArr.sort((a, b) => {   // сортування числових значень
      return a - b;
    })
  );

// Видалити елементи з масиву з 2 по 4 (включно!).  

    userArr.splice(2, 3);
    console.log(userArr);