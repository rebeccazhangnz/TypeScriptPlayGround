/****************** Simple Generic Function***********************/
// Generic creates a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

// This example is a simple generic function which arg type is set to any and returns the input straight away 
function echo(data: any) {
    return data;
}

console.log(echo('Arun'));
console.log(echo(30));
console.log(echo({ name: 'Arun', age: 30 }));

//the following commands will not throw errors. However 2nd and 3rd line will return undefined, as number and object doesnt have property lenghth.

console.log(echo('Arun').length);
console.log(echo(30).length);
console.log(echo({ name: 'Arun', age: 30 }).length);

/****************** Better Generic Function ***********************/


//the example below  we state <T> and data: T as type. This syntax allows users to state a type when it is needed. 

function betterEcho<T>(data: T) {
    return data;
}

//Now the following commands will throw an compile error when the property is not exists for the current type. eg. Error : property length does not exist on type
console.log(betterEcho('Arun').length);
//following line states an type. When in throws an error it would say Error : property length does not exist on type 'number';

console.log(betterEcho<number>(30).length);
console.log(betterEcho({ name: 'Arun', age: 30 }.length);


/****************** Generic Array ***********************/
//array is built-in generic and we can use an generic type number for the array like the follow. and when we use the built in method push, if the number is not the defined type, then it throws an error.
const testResults: Array<number>=[1.2, 4.2, 5]
testResults.push(23);
testResults.push('a string');

function printAll<T>(args: T[]){
    args.forEach((element)=>console.log(element));
}

printAll<string>(["spark", "digital"]);
printAll<number>([3,5]);
printAll<string>([3,5]); //this will throw an error

/****************** Generic Types ***********************/
//Below we are creating a new constant and we are assigning a type <T>(data: T) => T to the constant, and it is a generic type. and echo is the function defined in line 5 in this file. This doesn't throw an error as function echo has the exactly same setup as the defining generic type. It takes a type, and the data tape is any and the return type is also the same as the inpu type.

const echo2: <T>(data:T)=>T = echo;
console.log(echo2<string>("echo2"));

/****************** Generic Class ***********************/
class SimpleMath<T extends number| boolean, U extends number | String>{
    baseValue: T;
    multiplyValue: U;
    calculate(): number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath()
simpleMath.baseValue = 434
simpleMath.multiplyValue = 'some value';
console.log(simpleMath.calculate())