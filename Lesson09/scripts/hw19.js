console.log ("Hello, World!");

//ДЗ 19. Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.

//Додати можливість створювати нові будинки на певну кількість квартир.

//Не обмежувати кількість мешканців у квартирі

class Person {
    namePerson;
    genderPerson;

    constructor (namePerson, genderPerson){
    this.namePerson = namePerson;
    this.genderPerson = genderPerson;
    }
}

class Apartment {
    
    residents = [];

        addResidents (resident) {
        
        this.residents.push(resident);
    }
}

class ApartmentHouse {
    totalApartmens;
    apartmensInfo = [];
    
    constructor(totalApartmens) {
    this.totalApartmens = totalApartmens;
    }

    limitApartmens(apartment){
        
            if (this.apartmensInfo.length < this.totalApartmens){
                this.apartmensInfo.push(apartment);
            } else {
                    console.log ( 'В этом доме больше нет свободных квартир');
                    }
    }
}

const firstPerson = new Person ('Iva Berns', 'woman');
const secondPerson = new Person ('Jhon Smit', 'men');
const thirdPerson = new Person ('Bred Pit', 'men');

const firstApartment = new Apartment (1);
const secondApartment = new Apartment (2);

firstApartment.addResidents(firstPerson);
secondApartment.addResidents(thirdPerson);
secondApartment.addResidents(secondPerson);

const firstApartmentHouse = new ApartmentHouse(2);

firstApartmentHouse.limitApartmens(firstApartment); 
firstApartmentHouse.limitApartmens(secondApartment);
firstApartmentHouse.limitApartmens(firstApartment);

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);

console.log(firstApartment);
console.log(secondApartment);

console.log(firstApartmentHouse);