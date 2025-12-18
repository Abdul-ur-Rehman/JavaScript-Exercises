let person = {
    firstName: 'John', 
    lastName: 'Doe', 
    age: 25, 
    city: 'New York',
    fullName: function() {

        return this.firstName + ' ' + this.lastName
    }

};

console.log(person.fullName());

console.log("----- Javascript Object -----")
console.log(typeof(person))
console.log(person)


person.location = 'Pak'
console.log(person)
delete person.location
console.log(person)
for (let key in person){
    console.log(person[key])
}