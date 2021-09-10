let newCard = 0
let sum = 0
// let randomCard = 0

// ARRAY
// let cards = [firstCard, secondCard]
let cards = []

// HTML DISPLAY
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let startGameBtn = document.querySelector("#start-game")

// GAME STATE
// both booleans below (hasBlackjack and isAlive) is for giveNewCard() eiligibility 
let hasBlackjack = false
let isAlive = false
let gameOngoing = false // boolean for startGame() button eligibility
let endGameState = false // boolean for replaying game WHEN true

let message = ""

// Player data
let player = {
    name: "Aerdon",
    chips: 145
}
// let playerName = "Aerdon"
// let playerChips = 145
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": " + player.chips

// function for restarting game data and states; returning values to initial state as is the state of the variables above
function restartGame() {
    // log functionality
    console.log("Resetting data and parameters...")
    // reset all data (variables) found above document
    newCard = 0
    sum = 0
    cards = []
    hasBlackjack = false
    isAlive = false
    gameOngoing = false
    endGameState = false
    message = ""
}

// function for randomizing card pulled
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        console.log("Check: " + randomCard)
        randomCard = 11
        return randomCard
    } else if (randomCard > 10) {
        console.log("Check: " + randomCard)
        randomCard = 10
        return randomCard
    } else {
        return randomCard
    }
}

// function for starting game
function startGame() {
    // log functionality
    console.log("Starting game...")
    
    // conditional to only allow function when game has not begun, and prevent further clicks (and mess the game up) during active play
    if (gameOngoing === true && endGameState === false) {
        // game is already ongoing, inform player
        messageEl.textContent = "Game is ongoing!"
        console.log("Failed. The game is already ongoing!")
    } else if (gameOngoing === true && endGameState === true) {
        // log restart game functionality
        console.log("A new game has been started.")
        // reset data
        restartGame()
        // activate startGame() function to start again
        startGame()
    } else if (gameOngoing === false) {
        // this conditional is for when game had never begun
        // game shall begin this way, set states:
        gameOngoing = true
        isAlive = true

        // log functionality
        console.log("Success! Is game active?: " + gameOngoing)

        // pull random card
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
    
        // NOTE: Below is AMAZING. I found out that you can "push" (or "log" them, in console.log()) more than one item by separating them with a comma.
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard
    
        renderGame()
    }
}

function renderGame() {
    // display current cards
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // NOTE: Below are variations of ways to display list of cards.
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // cardsEl.textContent = "Cards: " + cards
    // display current sum

    // display new sum
    sumEl.textContent = "Sum: " + sum

    // CONDITIONAL: Message and BJ win-loss state.
    if (sum <= 20) {
    message = "New card?"
    } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
    endGame()
    } else {
    message = "Game over!"
    isAlive = false
    endGame()
    }

    // display prompt/hint for next step
    messageEl.textContent = message

    // log for functionality
    console.log(message)
    console.log("Still alive? - " + isAlive)
    console.log("Are ya winning son? - " + hasBlackjack)
}

function giveNewCard() {
    // log for function functionality
    console.log("Drawing new card...")

    // conditional to only be able to get new card if:
    if (isAlive === true && hasBlackjack === false) {
        // log conditional success
        console.log("Success! New card is...")
        newCard = getRandomCard()
        cards.push(newCard)
        // Display new card
        cardsEl.textContent += " " + newCard
        // Hardcode value of sum with new card
        sum += newCard
        // Display new sum
        sumEl.textContent = sum
        console.log(sum)

        renderGame()
    } else if (endGameState === true) {
        messageEl.textContent = "Click on Play Again!"
        console.log("Failed. You have to play again, dummy!")
    } else {
        messageEl.textContent = "Click on Start Game!"
        console.log("Failed. You have to start the game, dummy!")
    }
}

// function when game is finished
function endGame() {
    if (message === "Blackjack!" || message === "Game over!") {
        console.log("You have reached the end of the game. You may choose to play again.")
        startGameBtn.textContent = "PLAY AGAIN"
        endGameState = true
    }
}