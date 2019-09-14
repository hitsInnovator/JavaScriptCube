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
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    Animal.prototype.walk = function () {
        return this.isWalk ? this.name + " can walk." : this.name + " can't walk.";
    };
    Animal.prototype.fly = function () {
        return this.isFly ? this.name + " can fly." : this.name + " can't fly.";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.isFly = false;
        _this.isWalk = true;
        return _this;
    }
    return Dog;
}(Animal));
var leo = new Dog("leo");
console.log(leo.walk(), leo.fly());
