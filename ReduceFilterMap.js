var grades = [92, 88, 91, 70, 55, 86, 100]

console.log("Original Grades: ", grades)

console.log("--------------------------")

console.log("---Reuce Method---")

var total = grades.reduce((sum, grade) => sum + grade, 0)

console.log("Total Grades: ", total)

console.log("---Filter Method---")
var evenGrades = grades.filter(grade => grade % 2 === 0)

console.log("Even Grades: ", evenGrades) 

console.log("---Map Method---")

var sqauredGrades = grades.map(grade => grade * grade)

console.log("Squared Grades: ", sqauredGrades)


console.log("--------------------------")
console.log("Chaining Methods")

let result = grades.filter(grade => grade % 2 === 0).map(grade => grade * grade).reduce((sum, grade) => sum + grade, 0)

console.log("Result after chaining: ", result)