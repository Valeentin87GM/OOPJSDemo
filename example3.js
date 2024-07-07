// Демонстрация создания двух объектов: с методами первый, а второй только со свойствами
// переиспользование методов для второго объекта из первого в контексте объявления объекта
// первый объект с свойствами и методами
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

// второй объект только со свойствами и методами, одолженными от первого объекта при объявлении объекта
const AnimalBarsik = {
    classAnimal: 'Cats', //класс животного
    name: "Barsik",
    age: 4, // возраст животного
    color: 'red', // цвет окраса
    hunger: false, // голодное животное или нет
    // метод, заставляющий говорить животное
    animalSayed: AnimalMurzik.animalSayed
}
// проверим, что метод одолжен и работает:
AnimalBarsik.animalSayed();
// результат: The animal Barsik is talking...