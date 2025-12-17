const numbers = [1, 2, 3, 4, 5, 6, 7]
let squared = []

function squaredArray(numbers){
    for (let i =0; i < numbers.length; i++){

        squared.push(Math.pow(numbers[i],2))
    }

    return squared;

}

console.log(squaredArray(numbers))