"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 203924_7328_8347_9834;
console.log(`Age is: ${age}`);
console.log(`Type of age is: ${typeof (age)}`);
let leve;
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(`Reversed numbers are: ${numbers}`);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
})(Sizes || (Sizes = {}));
let mySize = Sizes.Medium;
console.log(`My size is: ${mySize}`);
function calculateTax(income) {
    if (income < 50000) {
        return income * 0.05;
    }
    return income * 0.10;
}
let income = 900000;
console.log(`Tax on ${income} is: ${calculateTax(income)}`);
//# sourceMappingURL=test.js.map