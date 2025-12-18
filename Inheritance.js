import Person from './Class.js';

export default class Pet extends Person{

    constructor(firstName, lastName){
        super(firstName, lastName)
    }

    get location(){

        return 'BlueCross Shelter'
    }

}

