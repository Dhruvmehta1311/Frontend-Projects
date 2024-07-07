let randomNumber = parseInt(Math.random()*100 + 1);

const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")
const previousGuesses = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")

const p = document.createElement('p')

let prevGuesses = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        let guess = userInput.value
        console.log(guess);
        validateGuess(guess)

    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Kindly Enter Valid Number")
    }
    else if(guess < 1){
        alert("Your number should be greater than 0")
    } else if(guess > 100){
        alert("Your number should be less than 100")
    }
    else{
        prevGuesses.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(randomNumber === guess){
        displayMessage(`You Guessed it right.`)
    }
    else if(guess < randomNumber){
        displayMessage(`Your Guess is too Low.`)
    }
    else if(guess > randomNumber){
        displayMessage(`Your Guess is too High.`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    previousGuesses.innerHTML += `${guess}   `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', (e)=>{
        let randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled', '')
        startOver.removeChild(p)

        playGame = true
}
