export default class Person{

    age = 25
    get location(){
        return 'New York'
    }

    constructor(firstName, lastName){
       
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        return this.firstName + ' ' + this.lastName
    }
    get fullNamegetter(){
        return this.firstName + ' ' + this.lastName
    }
}

// const person = new Person('John', 'Doe')

// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person.fullNamegetter)