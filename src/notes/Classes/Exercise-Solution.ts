/******** Exercises  One *************/
console.log('This is exercise one:   ');
class CarClass {
    public name: string = 'name';
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void {
        console.log('Toooooooot!');
    }

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new CarClass('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

/******** Exercises  Two *************/
console.log('==================================================');
console.log('This is Exercisee Two');

class BaseObject {
    public width: number = 0;
    public length: number = 0;
}

class Rectangle extends BaseObject {
    width = 5;
    length = 2;

    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();
console.log(rectangle.calcSize());

/******** Exercises  Three *************/
console.log('==================================================');
console.log('This is Exercisee Three: Getter and Setters');

class Person {
    private _firstname: string = 'a';

    get firstname() {
        return this._firstname;
    }

    set firstname(value: string) {
        if (value.length > 3) {
            this._firstname = value;
        } else {
            this._firstname = 'a';
        }
    }
}

const person = new Person();
console.log(person.firstname);
person.firstname = 'haixin';
console.log(person.firstname);
person.firstname = 'v';
console.log(person.firstname);
