var Stamp = /** @class */ (function () {
    function Stamp(name) {
        this.name = name;
    }
    Stamp.prototype.getDeps = function () {
        return [this.name];
    };
    return Stamp;
}());
var rsiStamp = new Stamp("RSI");
console.log(rsiStamp.getDeps());
var cdsStamp = new Stamp("CDS");
console.log(cdsStamp.getDeps());
