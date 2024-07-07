// Демонстрация создания класса с произвольным количеством полей и методов и экземпляров этого класса
// Демострация работы полей и методов экземпляров класса

class Rectangle {
    numPoints = 4;
    height = null;
    width = null;
    color = null;
    material = 'ferrum';

    getInfo() {
        console.log(`Квадрат с количеством углов ${this.numPoints}
            Цвет:${this.color}
            Материал: ${this.material}
            Ширина: ${this.width}
            Высота: ${this.height}`);
    };

    setSizes(height,width) {
        this.height = height;
        this.width = width;
    }

    getSquare() {
        console.log(`Площадь прямоугоьника равна ${this.height*this.width}`);
        return this.height*this.width;
    }

    constructor() {
        // pass
    }
}

// Создадим 2 экземпляра класса Rectangle
const rectangleRed = new Rectangle();
const rectangleGreen = new Rectangle();
// Зададим значения полям color обоих экземпляров класса
rectangleRed.color = 'red';
rectangleGreen.color = 'green';
// Зададим ширину и высоту прямоугольников с помощью соответствующего метода
rectangleRed.setSizes(200, 30);
rectangleGreen.setSizes(15, 60);
// Вычислим площадь каждого прямоугольника
const squareRed = rectangleRed.getSquare();
const squareGreen = rectangleGreen.getSquare();
// Выведем информацию про каждый прямоугольник
rectangleGreen.getInfo();
rectangleRed.getInfo();
/*
Площадь прямоугоьника равна 6000
Площадь прямоугоьника равна 900
Квадрат с количеством углов 4
            Цвет:green
            Материал: ferrum
            Ширина: 60
            Высота: 15
Квадрат с количеством углов 4
            Цвет:red
            Материал: ferrum
            Ширина: 30
            Высота: 200
*/