function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

function SuperHero(fName, lName) {
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
    console.log("Fighting crime!");
};
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

const batman = new SuperHero("Bruce", "Wayne");

console.log(batman.getFullName());