
function xEqualO(word){

    let countX = 0
    let countO = 0

    
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++){

        if (word[i] === 'x'){
            countX++
        }
        else if (word[i] === 'o') {
            countO++
        }
    }

    if (countO === countX){
        return true;
    }
    else{
        return false;
    }
}

word = 'aaabbxxiiooxxooqwerodasfjkhxASFEYOWEJ'

console.log(xEqualO(word))