let firstCard = getRandomCard()
let secondCard = getRandomCard()
let newCard = 0
let sum = firstCard + secondCard
// let randomCard = 0

// ARRAY
let cards = [firstCard, secondCard]

// HTML DISPLAY
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// GAME STATE
let hasBlackjack = false
let isAlive = true

let message = ""

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    return randomCard
}

function startGame() {
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