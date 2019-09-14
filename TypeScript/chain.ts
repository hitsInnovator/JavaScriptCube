class Animal {
    name: string;
    isFly: boolean;
    isWalk: boolean;

    constructor (animalName: string) {
        this.name = animalName;
    }
    walk (): string {
        return this.isWalk ? this.name + " can walk." : this.name + " can't walk.";
    }
    fly () {
        return this.isFly ? this.name + " can fly." : this.name + " can't fly.";
    }
}

class Dog extends Animal {
    isFly = false;
    isWalk = true;

    constructor (name: string) {
        super (name);
    }
}

var leo = new Dog ("leo");
console.log (leo.walk (), leo.fly ());

