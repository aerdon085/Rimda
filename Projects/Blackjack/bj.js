let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true

let message = ""

if (sum <= 20) {
    message = "New card?"
} else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
} else {
    message = "Game over!"
    isAlive = false
}

console.log(message)
console.log("Still alive? - " + isAlive)
console.log("Are ya winning son? - " + hasBlackjack)