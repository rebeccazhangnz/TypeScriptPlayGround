export {}; //added export {} just to get rid off the all files must be modules when the '--isolatedmodules' flag is provided. ts1208 error

let anyArray: any[] = ['2', 1, 3, '8'];
let stringArray: string[] = ['1', '2', '3', '4'];
let tupleArray: [string, number, boolean] = ['1', 2, true];

//defined enum
enum color {
    Gray, //as default, for enum object, a number is assigned to each of the item, in this case, the first item is type number 0, if u do console.log(color.Gray), the out put will be number 0
    Green = 100, // we can also assigned a number to the enum item, and the next item will be an increment of this item, therefore, console.log(color.blue) will not return 2, instead, it returns 101
    Blue, // 2
}

//defined a type of a function's return
function sayHello(): void {
    console.log('hello');
}

//define types of arguments in a fuction
//1. 1st argument string, 2nd argument number, return nothig(void)
function sayHelloMultipleTimes(text: string, times: number): void {
    console.log(text, times);
}
//2. 1st argument number, 2nd argument number, return number
function sum(a: number, b: number): number {
    return a + b;
}

//define type of the function
let sumFunctionType: (val1: number, val2: number) => number;
//let fucntion to have the defined function type
sumFunctionType = sum;

//defined type of objects
//in typescript, the following example not only defines an object, but also defines the type of object. The following example defines the an object type with property name breed with type of string and property name age with type of number. (property name matters)
let dog = {
    breed: 'bulldog',
    age: 23,
};

//short version in long: defination of an project
let dogObj: { breed: string; age: number } = { breed: 'bulldog', age: 23 };

//define complex object
let complex: { data: number[]; output: (all: boolean) => number[] };

complex = {
    data: [1, 2, 3],
    output: function(all: boolean): number[] {
        if (all) {
            return this.data;
        }
        return [1, 2];
    },
};

let complex2: { data: number[]; output: (all: boolean) => number[] } = {
    data: [1, 2, 3],
    output: function(all: boolean): number[] {
        if (all) {
            return this.data;
        }
        return [1, 2];
    },
};

// create type alias
//this defines a new type which can be used to define an variable type
type ComplexType = { data: number[]; output: (all: boolean) => number[] };
let complex2WithComplexType: ComplexType;

//allow multiple type (unionType), instead use 'any', we can specific union type use | operator
let age: number | string = 27;
age = '27';

//type error, the following function can not have a return type of void, as it is actually returns a new error. However, it literally returns nothing(no value or variable), so its never returns anything. This function has an erorr(new error), therefore it never returns. A never type can be use in parts of the code where you know it should never be reached becase it kind of then is stuck.
function neverReturns(): never {
    throw new Error('We are currently experiencing an error');
}

//nullable types , this will be useful checking null situation. We sometimes need to set an object to null, to clear the value, however sometimes null can get things into trouble like when wen what to access an complex property inside an object while the object is null. nullable type allows as to define the variable as canbenull, or never shold be null
//first add : "strictNullChecks" : true, in the tsconfig.json file
let canNotBeNull = 12;
//canNotBeNull = null //this indicates an error because canNotBeNull has a defined type of number
let canBeNull;
canBeNull = null; //this doesn't throw an error, becase canBeNull wasn't assigned an value and was originally undefined, type of undefined is nullable
//to make an varaible nullable we can assign union type
let canNotBeNull2: number | null = 12;
canNotBeNull2 = null;
//to make an variable can not be any , this will fail when compiles , as the variable has a defined type of null, it can not be assiged any values other than null. (this only works when strictNullCheck is set to true)
let canNotBeAny = null;
canNotBeAny = 12;

//exercise
type bankAccountType = { money: number; deposit: (value: number) => void };

let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value) {
        this.money += value;
    },
};

let myself: { name: string; bankAccount: bankAccountType; hobbies: string[] } = {
    name: 'max',
    bankAccount: bankAccount,
    hobbies: ['Sport', 'Cooking'],
};

myself.bankAccount.deposit(3000);
console.log(myself);

//REST parameter & Tuples
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
//this is an alternative way of writing the above function using REST parameter
function printInfo2(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

//es6 exercise
const double = (value: number) => value * 2;
console.log(double(10));

const greet = (name: string = 'max') => {
    console.log(`Hello,${name}`);
};
greet();
greet('anna');

const numbers: number[] = [1, 2, 3, 4];
console.log(Math.min(...numbers));

const newArray: number[] = [5, 6];
newArray.push(...numbers);
console.log(newArray);

const testResults: number[] = [1, 2, 3, 4];
const [result1, result2, result3, result4] = testResults;
console.log(result1, result2, result3, result4);

const scientist: { firstName: string; experience: number } = { firstName: 'Will', experience: 13 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
