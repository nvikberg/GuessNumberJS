console.log("Numbers Game")

const randomNumber = Math.ceil(Math.random()*100)
console.log(randomNumber)

let guesses = 0

const form= document.querySelector('form')

console.log("here")


form.addEventListener('submit', handleGuess)

console.log("here2")


function handleGuess(event){
    event.preventDefault()

    const numberGuess = document.querySelector('input').value
    const resultE1 = document.querySelector("#result")

    guesses++

    if(numberGuess > randomNumber){
        resultE1.innerText = 'Gissning är för hög'
        console.log('gissning är för hög')
    } else if (numberGuess < randomNumber){
        resultE1.innerText = 'Gissning är för låg'
        console.log ("gissnigen är för låg")
    }  else {
        resultE1.innerText = `det tog dig ${guesses} gissningar.`

        document.querySelector('button').disabled=true
    }
}