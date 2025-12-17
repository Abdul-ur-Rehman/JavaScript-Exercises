const numbers = [5, 2, 8, 1, 9]

function sortingNumbers(numbers){

    let temp = 0
    for (let i = 0; i < numbers.length-1; i++){
        for (let j = i+1; j < numbers.length; j++){

            if (numbers[i] > numbers[j] ){
                
                temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
             }

        }
    }

    return numbers
}

console.log(sortingNumbers(numbers))