//interface is lets people define how the contract requiements (types of the object)should look like . People can use interface to define the type of variables. This is handy when the same contract is used multiple times in different places, as if something changes , we don't need to change multiple lines of code, we just need to update the interface.

//Eg, below, if we defined the type of function args as {person: {firstname: string}}, we have to change both functions. But if we define the args type using interface, then we only need to update the interface to update the contract.
interface NamedPerson {
    firstname: string;
    age?: number; //optional property name called age. This interface defines a contract that the optject can have an property called age and the type must be number
    [propName: string]: any; //[] here is not an array, this statement states that , the interface property name canbe anything as long as its type is string and type canbe any type.
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log('Hello, ' + person.firstname);
}

function changeName(person: NamedPerson) {
    person.firstname = 'Rebecca';
}

let person = {
    firstname: 'Bez',
    age: 21,
    hobbie: ['squash', 'fishing'],
    greet(lastName: string) {
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

class Person implements NamedPerson {
    firstname: string;
    greet(lastName: string) {
        console.log(this.firstname + ' ' + lastName);
    }
}

const personInstance = new Person();
personInstance.firstname = 'david';
personInstance.greet('Jones');

/****************** function types***********************/
//use interface to set a type of functions
//the following interface defines the function type and the interface is defined with an curly braces. 
interface DoubleValueFunction {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunction;
myDoubleFunction = function(value1: number, vaule2: number) {
    return value1 + vaule2;
};

console.log(myDoubleFunction(33,44))

/****************** Interface Inheritance ***********************/

interface AgedPerson extends NamedPerson {
    age: number;
}

// as an extend, all the contract requiement of Named person needs
let oldPerson:AgedPerson = {
    age: 77,
    firstname: 'Aron',
    greet(lastName: string){
        console.log(lastName)
    }
}

console.log(oldPerson)