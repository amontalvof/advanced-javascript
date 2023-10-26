class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true;
    }

    fightCrime() {
        console.log("Fighting crime!");
    }
}

const batman = new SuperHero("Bruce", "Wayne");

console.log(batman.getFullName());