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

// GAME STATE
let hasBlackjack = false
let isAlive = false

let message = ""

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

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    // NOTE: Below is AMAZING. I found out that you can "push" (or "log" them, in console.log()) more than one item by separating them with a comma.
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
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
    } else {
    message = "Game over!"
    isAlive = false
    }

    // display prompt/hint for next step
    messageEl.textContent = message

    // log for functionality
    console.log(message)
    console.log("Still alive? - " + isAlive)
    console.log("Are ya winning son? - " + hasBlackjack)
}

function giveNewCard() {
    // log functionality
    console.log("Action: Draw new card.")
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
}