//typeScript offers us to import namespace from other files use ///<reference path = ""/>
///<reference path="rectangleMaths.ts"/>
///<reference path="circleMaths.ts"/>

console.log('This is the area of the Rectangle:  ');
console.log(Maths.calcRectangle(10, 20));

//we can use the import keywork support by ts to setup an alias of a namespace. the import below is not the es6 import. it creates an alias , so that we don't have to type Maths.Circle.calcCircle everytime we access to the method.

import circleMaths = Maths.Circle;
console.log('This is the area of the circle:  ');
console.log(circleMaths.calcCircle(15));
