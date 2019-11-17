//Everything define in a namespace is in its own scope, which means it doesnt affects the global scope. To consume variables or functions within a namespace , use [namespaceName].[variableName] or [namespaceName].[methodName]. In order to consume the namespace variable/methods from another file, will need to export it different files can share same namespace. 
var Maths;
(function (Maths) {
    function calcRectangle(width, length) {
        return width * length;
    }
    Maths.calcRectangle = calcRectangle;
})(Maths || (Maths = {}));
//Everything define in a namespace is in its own scope, which means it doesnt affects the global scope. To consume variables or functions within a namespace , use [namespaceName].[variableName] or [namespaceName].[methodName]. In order to consume the namespace variable/methods from another file, will need to export it different files can share same namespace.
var Maths;
(function (Maths) {
    var Pi = 3.14;
    var Circle;
    (function (Circle) {
        function calcCircle(diameter) {
            return diameter * Pi;
        }
        Circle.calcCircle = calcCircle;
    })(Circle = Maths.Circle || (Maths.Circle = {}));
})(Maths || (Maths = {}));
console.log('This is the area of the circle:  ');
console.log(Maths.Circle.calcCircle(34));
//typeScript offers us to import namespace from other files use ///<reference path = ""/>
///<reference path="rectangleMaths.ts"/>
///<reference path="circleMaths.ts"/>
console.log('This is the area of the Rectangle:  ');
console.log(Maths.calcRectangle(10, 20));
//we can use the import keywork support by ts to setup an alias of a namespace. the import below is not the es6 import. it creates an alias , so that we don't have to type Maths.Circle.calcCircle everytime we access to the method.
var circleMaths = Maths.Circle;
console.log('This is the area of the circle:  ');
console.log(circleMaths.calcCircle(15));
