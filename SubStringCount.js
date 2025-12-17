const sentence = "Emma is good developer. Emma is a writer"
const word = "Emma"

function substringCount(sentence, word){

    let count = 0

    newSen = sentence.split(" ")
    console.log(newSen)

    for (let i = 0; i < newSen.length; i++){

        if (newSen[i] == word){
            count++
        }
    }

    return count;

}

console.log(substringCount(sentence, word))