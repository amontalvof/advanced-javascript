//* IMPLICIT BINDING

const person = {
    name: "Bruce",
    sayMyName() {
        console.log(`My name is ${this.name}`);
    },
};
person.sayMyName();

//* EXPLICIT BINDING

const person2 = {
    name: "Clark",
};
function sayMyName() {
    console.log(`My name is ${this.name}`);
}
sayMyName.call(person2);

//* NEW BINDING

function Person(name) {
    this.name = name;
}
const person3 = new Person("John");
const person4 = new Person("Doe");
console.log(person3.name, person4.name);

//* DEFAULT BINDING

globalThis.name = "Peter";
sayMyName();