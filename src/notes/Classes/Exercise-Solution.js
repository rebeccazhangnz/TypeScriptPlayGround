var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/******** Exercises  One *************/
console.log('This is exercise one:   ');
var CarClass = /** @class */ (function () {
    function CarClass(name) {
        this.name = 'name';
        this.acceleration = 0;
        this.name = name;
    }
    CarClass.prototype.honk = function () {
        console.log('Toooooooot!');
    };
    CarClass.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return CarClass;
}());
var car = new CarClass('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
/******** Exercises  Two *************/
console.log('==================================================');
console.log('This is Exercisee Two');
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 5;
        _this.length = 2;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
console.log(rectangle.calcSize());
/******** Exercises  Three *************/
console.log('==================================================');
console.log('This is Exercisee Three: Getter and Setters');
var Person = /** @class */ (function () {
    function Person() {
        this._firstname = 'a';
    }
    Object.defineProperty(Person.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstname = value;
            }
            else {
                this._firstname = 'a';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstname);
person.firstname = 'haixin';
console.log(person.firstname);
person.firstname = 'v';
console.log(person.firstname);
