// Демонстрация переиспользования методов одного объекта на другом объекте
const AnimalMurzik = {
    classAnimal: 'Cats', //класс животного
    name: "Murzik",
    age: 4, // возраст животного
    color: 'red', // цвет окраса
    hunger: false, // голодное животное или нет
    // метод, заставляющий говорить животное
    animalSayed: function() {
        console.log(`The animal ${this.name} is talking...`);
    }
}
// создадим второй объект, изначально не имеющий метода animalSayed
const AnimalBarsik = {
    classAnimal: 'Cats', //класс животного
    name: "Barsik",
    age: 4, // возраст животного
    color: 'red', // цвет окраса
    hunger: false // голодное животное или нет
    // метод, заставляющий говорить животное
}
// добавим (одолжим) второму объекту метод animalSayed от первого объекта
AnimalBarsik.animalSayed = AnimalMurzik.animalSayed;
// теперь у второго объекта добавился требуемый метод, что подтверждает результат его вызова:
AnimalBarsik.animalSayed();
// The animal Barsik is talking...