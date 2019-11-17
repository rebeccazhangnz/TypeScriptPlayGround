"use strict";
exports.__esModule = true;
var anyArray = ['2', 1, 3, '8'];
var stringArray = ['1', '2', '3', '4'];
var tupleArray = ['1', 2, true];
//defined enum
var color;
(function (color) {
    color[color["Gray"] = 0] = "Gray";
    color[color["Green"] = 100] = "Green";
    color[color["Blue"] = 101] = "Blue";
})(color || (color = {}));
//defined a type of a function's return
function sayHello() {
    console.log('hello');
}
//define types of arguments in a fuction
//1. 1st argument string, 2nd argument number, return nothig(void)
function sayHelloMultipleTimes(text, times) {
    console.log(text, times);
}
//2. 1st argument number, 2nd argument number, return number
function sum(a, b) {
    return a + b;
}
//define type of the function
var sumFunctionType;
//let fucntion to have the defined function type
sumFunctionType = sum;
//defined type of objects
//in typescript, the following example not only defines an object, but also defines the type of object. The following example defines the an object type with property name breed with type of string and property name age with type of number. (property name matters)
var dog = {
    breed: 'bulldog',
    age: 23
};
//short version in long: defination of an project
var dogObj = { breed: 'bulldog', age: 23 };
//define complex object
var complex;
complex = {
    data: [1, 2, 3],
    output: function (all) {
        if (all) {
            return this.data;
        }
        return [1, 2];
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        if (all) {
            return this.data;
        }
        return [1, 2];
    }
};
var complex2WithComplexType;
//allow multiple type (unionType), instead use 'any', we can specific union type use | operator
var age = 27;
age = '27';
//type error, the following function can not have a return type of void, as it is actually returns a new error. However, it literally returns nothing(no value or variable), so its never returns anything. This function has an erorr(new error), therefore it never returns. A never type can be use in parts of the code where you know it should never be reached becase it kind of then is stuck.
function neverReturns() {
    throw new Error('We are currently experiencing an error');
}
//nullable types , this will be useful checking null situation. We sometimes need to set an object to null, to clear the value, however sometimes null can get things into trouble like when wen what to access an complex property inside an object while the object is null. nullable type allows as to define the variable as canbenull, or never shold be null
//first add : "strictNullChecks" : true, in the tsconfig.json file
var canNotBeNull = 12;
//canNotBeNull = null //this indicates an error because canNotBeNull has a defined type of number
var canBeNull;
canBeNull = null; //this doesn't throw an error, becase canBeNull wasn't assigned an value and was originally undefined, type of undefined is nullable
//to make an varaible nullable we can assign union type
var canNotBeNull2 = 12;
canNotBeNull2 = null;
//to make an variable can not be any , this will fail when compiles , as the variable has a defined type of null, it can not be assiged any values other than null. (this only works when strictNullCheck is set to true)
var canNotBeAny = null;
canNotBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'max',
    bankAccount: bankAccount,
    hobbies: ['Sport', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
//REST parameter & Tuples
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
//this is an alternative way of writing the above function using REST parameter
function printInfo2() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
//es6 exercise
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = 'max'; }
    console.log("Hello," + name);
};
greet();
greet('anna');
var numbers = [1, 2, 3, 4];
console.log(Math.min.apply(Math, numbers));
var newArray = [5, 6];
newArray.push.apply(newArray, numbers);
console.log(newArray);
var testResults = [1, 2, 3, 4];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2], result4 = testResults[3];
console.log(result1, result2, result3, result4);
var scientist = { firstName: 'Will', experience: 13 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
