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
// a class can be use as a blueprint for objects, public property can be access by outside of the class. A private property can only be consumed inside the class/instance/object that is created, it cant be set or read outside of these. This public private properties are only supported by ts, not js. Protected property can be access inside the class and also any objects which inherit from this class. Any extends properties within an inheritated class/object and not access to private properties of the origin class, but it can consume protected properties.
var PersonClass = /** @class */ (function () {
    //we can assigned constructor arguments and create a public property at the same time:
    // public name:string;
    // constructor(name:string){
    //     this.name = name
    // }
    // is equal to
    // constructor(public name:string){}
    //the above code creates an public property, assigned as an construtor argument, and points to itself (ie.this.name) in one goal.
    function PersonClass(name, username) {
        this.name = name;
        this.username = username;
        this.age = 20;
    }
    PersonClass.prototype.printAge = function () {
        console.log(this.age);
        this.setType('woman'); //we could access to an private method from the inside of the class,
        /***********
         when access method or property inside of the class/instance/object, we have to use 'this' key word, to point to itself.
         ************/
    };
    //within the class, we could have methods or properties that consumes the private/protected properties in the class itself
    PersonClass.prototype.setType = function (type) {
        //we can also set an method as private property
        this.type = type;
        console.log(this.type);
    };
    return PersonClass;
}());
//below code creates an instance of the basic clasee, as the construtor expect two arguments(name, username), we passes 'Rebecca' as name and 'rebeccazhangnz' as an argument to create the new instance.
var personInstance = new PersonClass('Rebecca', 'rebeccazhangnz');
console.log(personInstance); //output: PersonClass {name: "Rebecca" , username:"rebeccazhangnz"}
console.log(personInstance.name, personInstance.username); //we can access the public properties
personInstance.printAge(); //this will return undefined as the age property method is protected
//console.log(personInstance.setType('Female'))<-- this will fail as settype is an private method, which can not be access from outside of the instance/object/class
//
/***********Inheritance************/
//use 'extends' keyword to take all the properties and constructor method from the class, and specifies new properties/methods, which gets appended,or overwritten the existing stuffs.
var RebeccaClass = /** @class */ (function (_super) {
    __extends(RebeccaClass, _super);
    function RebeccaClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Haixin'; // this will override name property of the original class
        return _this;
    }
    return RebeccaClass;
}(PersonClass));
var RebeccaInstance = new RebeccaClass('Rebecca', 'rebeccazhangnz'); //even tho we are passing 'Rebecca' as name into the constructor(as no constructor is defined in RebeccaClass, therefore the constructor is inherite from PersonClass, which takes two args, once the instance is construct, the name 'Haixin' will override the constructed name 'rebecca, therefore ,the instance will have name property = 'Haixin')
console.log(RebeccaInstance);
RebeccaInstance.printAge();
var RebeccaClassWithConstructor = /** @class */ (function (_super) {
    __extends(RebeccaClassWithConstructor, _super);
    function RebeccaClassWithConstructor(username) {
        return _super.call(this, 'Haixin', username) || this;
    }
    return RebeccaClassWithConstructor;
}(PersonClass));
var RebeccaInstanceWithConstructor = new RebeccaClassWithConstructor('HaixinNz');
console.log(RebeccaInstanceWithConstructor);
/***********Getter and Setter************/
var CountryClass = /** @class */ (function () {
    function CountryClass() {
        this._city = 'Auckland';
    }
    Object.defineProperty(CountryClass.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            if (value.length > 5) {
                this._city = value;
            }
            else {
                this._city = 'Auckland';
            }
        },
        enumerable: true,
        configurable: true
    });
    return CountryClass;
}());
var countryInstance = new CountryClass();
console.log(countryInstance.city); // calling getter
countryInstance.city = 'Wellington'; //triggers setter, as input.lenghth is > 5, return input
console.log(countryInstance.city);
countryInstance.city = 'akl'; // trigger setter, as input.lenth< return default value 'Auckland'
console.log(countryInstance.city);
/***********Static Properties and Methods************/
var HelpersClass = /** @class */ (function () {
    function HelpersClass() {
    }
    // we will not able to access property of a class unless we instantiated(create an instance) the class, however sometimes we might want to the class to bundle some helper properties or methods that we can use throught the application without creating an instance.
    //by adding the static keyword, we make the property open to be used anytime without instantiated the class, eg. HelperClass.data
    HelpersClass.data = 4;
    HelpersClass.showInput = function (input) {
        console.log(input);
    };
    return HelpersClass;
}());
console.log(HelpersClass.data);
HelpersClass.showInput('Hello');
/***********Abstract Classes************/
//abstract classes can not be instaniated directly but be inherited always.  This can be used as an template of that canbe extended for an more complicated classes which then will be instantiated further.
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    //we can also define normal methods inside abstract classes
    Project.prototype.showProjectName = function () {
        console.log(this.projectName);
    };
    return Project;
}());
var digitalProject = /** @class */ (function (_super) {
    __extends(digitalProject, _super);
    function digitalProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //if we don't implement the logic changeProjectName method here, this class will throw error.
    digitalProject.prototype.changeProjectName = function (name) {
        this.projectName = name;
    };
    return digitalProject;
}(Project));
var digitalProjectInstance = new digitalProject();
console.log(digitalProjectInstance);
digitalProjectInstance.changeProjectName('MySpark Digital');
digitalProjectInstance.showProjectName();
/***********Private Constructor and Singletons************/
//the following class is called an singleton class, which only has one instance. It looks confuse that we have private static property, which the static property can not be access from outside the class and private constructor as well. This allow us to setup a class that only allow one instance during runtime. For example we want to have an array of data in the class and this array has to be the same in the whole application. as we have put the constructor private, this class can no longer instantiated or inherite from outside, hence
var onlyOneClass = /** @class */ (function () {
    function onlyOneClass(name) {
        this.name = name;
    }
    onlyOneClass.getInstance = function () {
        if (!onlyOneClass.instance) {
            onlyOneClass.instance = new onlyOneClass('name of The instance');
        }
        return onlyOneClass.instance;
    };
    return onlyOneClass;
}());
//let onlyOneInstanceWrong = new onlyOneClass <---this code will not work and will throw an error because the class has an private constructor, and as the constructor can not be access outside the class therefore we can noly called static method (whcih available for external access): getInstance() to create an instance for the class.
//we can create an instance by calling the static getInstance methond, once the instance is created(onlyOneClass.instance === true) then no more instance will be created.
var onlyOneInstance = onlyOneClass.getInstance();
//in the above onlyOneClass, we can override the name property because it is pbulic. (remember defining a property in constructor arg means that it defines and assign the proberty to the class itself)
console.log(onlyOneInstance.name);
onlyOneInstance.name = 'new name';
console.log(onlyOneInstance.name);
//To make the above class property "name" not reasinable(can not be override externally )  we can assign readonly keyword to the property:
var onlyOneClassV2 = /** @class */ (function () {
    function onlyOneClassV2(name) {
        this.name = name;
    } //<-- like this
    onlyOneClassV2.getInstance = function () {
        if (!onlyOneClassV2.instance) {
            onlyOneClassV2.instance = new onlyOneClassV2('name of The instance');
        }
        return onlyOneClassV2.instance;
    };
    return onlyOneClassV2;
}());
var onlyOneInstanceV2 = onlyOneClassV2.getInstance();
//onlyOneInstanceV2.name = 'new name'; //<---now this command will throw an error
