let age = 203924_7328_8347_9834;
console.log(`Age is: ${age}`);
console.log(`Type of age is: ${typeof(age)}`);

let leve;

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(`Reversed numbers are: ${numbers}`);


const enum Sizes {
    Small = 1,
    Medium,
    Large
}

let mySize =  Sizes.Medium
console.log(`My size is: ${mySize}`);


function calculateTax(income: number): string | number {
    if(income < 50000){
        return income * 0.05;
    }
    return income * 0.10;
}

let income = 900000
console.log(`Tax on ${income} is: ${calculateTax(income)}`); 