class Stamp {
    name: string
    constructor (name: string) {
        this.name = name;
    }
    getDeps (): string[] {
        return [this.name];
    }
}

var rsiStamp = new Stamp ("RSI");
console.log (rsiStamp.getDeps ());

var cdsStamp = new Stamp ("CDS");
console.log (cdsStamp.getDeps ());