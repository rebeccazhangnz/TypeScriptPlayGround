//interface is lets people define how the contract requiements (types of the object)should look like . People can use interface to define the type of variables. This is handy when the same contract is used multiple times in different places, as if something changes , we don't need to change multiple lines of code, we just need to update the interface.
function greet(person) {
    console.log('Hello, ' + person.firstname);
}
function changeName(person) {
    person.firstname = 'Rebecca';
}
var person = {
    firstname: 'Bez',
    age: 21,
    hobbie: ['squash', 'fishing'],
    greet: function (lastName) {
        console.log('Hi, this is ' + this.firstname + ' ' + lastName);
    },
};
greet(person);
changeName(person);
greet(person);
person.greet('zhang');
//the following command will throw an error as we are passing an object straight away to a function [ Error: 'Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'.], even tho this is the same as variable person , an object is checked more strictly then a variable. age must be defined in the contract for this to be passed. However if we define age:number in the contract, the above functions will fail to compile if the argument input doesn't include property age. To do that we can define age as optional by using age?: number.
//greet({ firstname: 'Ben', age: 27 });
/*The implements keyword,  class has to implement all the methods defined in interface, no matter if they have an implementation or not in the interface. Also there are no calls to super methods in the Class.

extends behaves more like what we would expect from the keyword. You have to implement only the abstract methods, and super calls are available/generated.*/
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log(this.firstname + ' ' + lastName);
    };
    return Person;
}());
var personInstance = new Person();
personInstance.firstname = 'david';
personInstance.greet('Jones');
var myDoubleFunction;
myDoubleFunction = function (value1, vaule2) {
    return value1 + vaule2;
};
console.log(myDoubleFunction(33, 44));
// as an extend, all the contract requiement of Named person needs
var oldPerson = {
    age: 77,
    firstname: 'Aron',
    greet: function (lastName) {
        console.log(lastName);
        console.log(this.lastName);
    }
};
console.log(oldPerson);
oldPerson.lastname = 'Teno';
oldPerson.greet('Kinki');
