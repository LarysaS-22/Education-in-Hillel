console.log ("Hello, World!");
/*ДЗ 20. Створюємо сутності

Створити сутність людини:
імʼя
вік
Метод виведення даних
Створити сутність автомобіля:
Характеристики автомобіля окремими властивостями
Методи:
Виведення на екран даних про цей автомобіль
Привласнення цього автомобіля власнику (записати в автомобіль обʼєкт власника)

Що потрібно зробити

1. Створити клас Людина
    властивості 
        імʼя
        вік
    методи
        конструктор, який приймає два параметри: імʼя та вік
        метод, який виводить у консоль інформацію про людину
2. клас Автомобіль
    властивості 
        марка, модель, рік виписку, номерний знак (або на Ваш розсуд)
        власник
    методи 
        конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, 
        номерний знак 
        присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина 
        у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
        метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина
         для виведення інформації про власника


в якості демонстраціїї створити:
    декілька екземплярів класу Людина
    декілька екземплярів класу Автомобіль
    присвоїти власників автомобілям */

class Person {
    name;
    alder;

    constructor (name, alder){
    this.name = name;
    this.alder = alder;
    }

    personInfo (){
        console.log (`Name: ${this.name} , alder: ${this.alder} years ` );
    }
}

class Car {

    model;
    yearManufacture;
    color;
    licensePlate;
    owner = '';

    constructor(model , yearManufacture , color , licensePlate){
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.color = color;
        this.licensePlate = licensePlate;
    }

    registerOwnerCar (person){
        this.person;
        
        person.alder > 18 ? this.owner = person :
            console.log (`${person.name}, Вам немає 18 років, ви не можете придбати авто`);
    }
    
    carAllInfo (){
        console.log(`
        Car model:${ this.model}, 
        year of manufacture: ${this.yearManufacture}, 
        сolor: ${this.color},      
        license plate: ${ this.licensePlate }`);
                        
        this.owner ? this.owner.personInfo () : console.log('Owner not registered');
        }   
    }

const firstPerson = new Person ('Iva Berns', 32);
const secondPerson = new Person ('Jhon Smit', 17);
const thirdPerson = new Person ('Bred Pit', 29);

firstPerson.personInfo()
secondPerson.personInfo()
thirdPerson.personInfo()

const firstCar = new Car ('BMW', 2021, 'green', 'RT 12344');
const secondCar = new Car ('Skoda', 2020, 'red', 'KO 56784');
const thirdCar = new Car ('Ford', 2022, 'blue', 'ER 90124');

firstCar.registerOwnerCar(secondPerson);
secondCar.registerOwnerCar(firstPerson);
thirdCar.registerOwnerCar(thirdPerson);

console.log (firstCar);
console.log (secondCar);

secondCar.carAllInfo()
firstCar.carAllInfo()
thirdCar.carAllInfo()