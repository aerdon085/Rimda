let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let card = 0

let cards = [firstCard, secondCard]

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let hasBlackjack = false
let isAlive = true

let message = ""

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
    message = "New card?"
    } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
    } else {
    message = "Game over!"
    isAlive = false
    }

    messageEl.textContent = message

    console.log(message)
    console.log("Still alive? - " + isAlive)
    console.log("Are ya winning son? - " + hasBlackjack)
}

function newCard() {
    console.log("Action: Draw new card.")
    card = 1
    cardsEl.textContent += " " + card
    sum += card
    sumEl.textContent = sum
    console.log(sum)

    renderGame()
}