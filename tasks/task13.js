// Класс фигуры
class Shape {
  constructor(type) {
    this.type = type;
  }

  // Метод возвращает нуль в базовом классе Shape.
  getArea() {
    return 0;
  }

// Метод возвращает нуль в базовом классе Shape.
  getPerimeter() {
    return 0;
  }
}

// Класс прямоугольника
class Rectangle extends Shape {
  constructor(width, height) {
    super(); // Вызов конструктора родительского класса с помощью super().
    this.type = "Прямоугольник"; // Инициализация свойства type класса Rectangle.
    this.width = width; // Инициализация свойства width класса Rectangle
    this.height = height; // Инициализация свойства height класса Rectangle
  }

  // Переопределение данного метода для вычисления площади прямоугольника.
  getArea() {
    return this.width * this.height;
  }

  // Переопределение данного метода для вычисления периметра прямоугольника
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Класс круга
class Circle extends Shape {
  constructor(radius) {
    super(); // Вызов конструктора родительского класса с помощью super().
    this.type = "Круг"; // Инициализация свойства type класса Circle.
    this.radius = radius;  // Инициализация свойства radius класса Circle
  }

  // Переопределение данного метода для вычисления площади круга
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Переопределение данного метода для вычисления периметра круга
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// Класс треугольника
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super(); // Вызов конструктора родительского класса с помощью super().
    this.type = "Треугольник"; // Инициализация свойства type класса Triangle.
    this.side1 = side1; // Инициализация свойства side1 класса Circle
    this.side2 = side2; // Инициализация свойства side2 класса Circle
    this.side3 = side3; // Инициализация свойства side3 класса Circle
  }

  // Переопределение данного метода для вычисления периметра треугольника
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  // Переопределение данного метода для вычисления площади треугольника
  getArea() {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }
}

// Пример использования классов:
const rectangle = new Rectangle(5, 8);
console.log(`Тип фигуры: ${rectangle.type}`);
console.log(`Площадь ${rectangle.type.toLowerCase()}а: ${rectangle.getArea()}`);
console.log(`Периметр ${rectangle.type.toLowerCase()}а: ${rectangle.getPerimeter()}`);

const circle = new Circle(4);
console.log(`Тип фигуры: ${circle.type}`);
console.log(`Площадь ${circle.type.toLowerCase()}а: ${circle.getArea()}`);
console.log(`Периметр ${circle.type.toLowerCase()}а: ${circle.getPerimeter()}`);

const triangle = new Triangle(3, 4, 5);
console.log(`Тип фигуры: ${triangle.type}`);
console.log(`Площадь ${triangle.type.toLowerCase()}а: ${triangle.getArea()}`);
console.log(`Периметр ${triangle.type.toLowerCase()}а: ${triangle.getPerimeter()}`);
