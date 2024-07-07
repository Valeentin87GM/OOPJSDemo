// Демонстрация создания объекта с полями и методами
// в алгоритмах принято имена объектов начинать с большой буквы
const Animal = {
    classAnimal: 'Cats', //класс животного
    age: 4, // возраст животного
    color: 'red', // цвет окраса
    hunger: false, // голодное животное или нет
    // метод, заставляющий говорить животное
    animalSayed: function() {
        console.log('The animal is talking...');
    },
    // метод, позволяющий по кормить животное
    giveFood: function() {
        if (this.hunger) {
            console.log("Thank you for giving me food, I'm full");
            this.hunger = false;
        }
        else {
            console.log("Thanks, I'm not hungry");
    }
    },
    // метод, позволяющий проголодаться животному
    getHungry: function () {
        this.hunger = true;
        console.log("I'm hungry");
    }
}

// Вызов метода объекта:
// Animal.animalSayed() ---> 'The animal is talking...'
// Animal.giveFood()  ---> "Thank you for giving me food, I'm full" or "Thanks, I'm not hungry"
//  depending of this.hunger
// Просмотр свойств объекта:
//  Animal.age ----> 4
//  Animal.hunger ----> true