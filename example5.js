// Демонстрация выполнения функции объекта через метод settimeout напрямую и после обертывания его в анонимную функцию
const Robot = {
    level: 5,

    upLevel: function () {
        console.log(`Уровень повышен до ${++this.level}`);
        console.log(this.level);
    }
}
// выполнение функции без settimeout
Robot.upLevel(); // Уровень повышен до 6
// выполнение функции с испольованием settimeout
setTimeout(Robot.upLevel, 5000); // Уровень повышен до NaN
// выполнение функции, обернутой в анонимную функцию с испольованием settimeout
setTimeout(function () {Robot.upLevel()},5000); // Уровень повышен до 7
