import Person from './Class.js';
import Pet from './Inheritance.js';

let test = 'Hello World!';
let test1 = 20
console.log(`${test}`);
console.log(test1.parseInt)
let num1 = 50
console.log(parseInt(`${1 + 1}`))

console.log(typeof(num1.toString()))

console.log(

    "test"
)


const person = new Person('John', 'Doe')
console.log(person.fullName())

const pet = new Pet('Buddy', 'Dog')
console.log(pet.fullName())
console.log(pet.location)


