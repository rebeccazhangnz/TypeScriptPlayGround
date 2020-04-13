var myMap = /** @class */ (function () {
    function myMap() {
        this.map = {};
    }
    myMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    myMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    myMap.prototype.clear = function () {
        this.map = {};
    };
    myMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return myMap;
}());
var numberMap = new myMap();
numberMap.setItem('spark', 10);
numberMap.getItem('spark');
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
