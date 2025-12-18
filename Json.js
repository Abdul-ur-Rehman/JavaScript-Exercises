jsonObj = {"user": {"name": "John", "age": 30}}

console.log("----- JSON Object -----")
console.log(typeof(jsonObj))
console.log(jsonObj)

const jsonString = JSON.stringify(jsonObj)

console.log("----- JSON String -----")
console.log(typeof(jsonString))
console.log(jsonString)

console.log("----- Parsed JSON Object -----")
const parseObj = JSON.parse(jsonString)
console.log(typeof(parseObj))
console.log(parseObj)