// Демонстрация создания объекта внутри которых есть методы, оперирующие значениями свойств объектов с оператором this
const Robot = {
    name: "Attacrty",
    health: 100, // здоровье
    level: 5, // уровень
    isPower: false, // флаг состояния работы робота (включен или выключен)
    // метод, повышающий уровень робота
    upLevel: function() {
        ++this.level;
        console.log(`Уровень робота ${this.name} повышен до ${this.level}`);
    },
    // метод, наносящий урон роботу на количество жизней, указанное в аргументе
    getUron: function(healthUron) {
        this.health -= healthUron;
        console.log(`Роботу ${this.name} нанесен урон, у него осталось ${this.health} жизней`);
    },
    togglePower: function() {
        this.isPower ? this.isPower = false : this.isPower = true;
        this.isPower ? console.log('Робот включен') : console.log('Робот выключен');
    }
}

// Демонстрация работы методов
// Robot.upLevel() Результат: Уровень робота Attacrty повышен до 6
// Robot.togglePower() Результат: Робот включен
// Robot.getUron(30) Результат: Роботу Attacrty нанесен урон, у него осталось 70 жизней