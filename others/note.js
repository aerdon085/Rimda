//SECTION: Variables


let firstBatch = 5
let secondBatch = 7

let count = firstBatch + secondBatch
console.log(count)

count = count + firstBatch
console.log(count)

count = count + firstBatch
console.log(count)


//SECTION: Basic Calc with Variables


let score = 0
let scoreMultiplier = score * 0.001
console.log(scoreMultiplier)

let scoreInitialMultiplier = 1 + scoreMultiplier
console.log(scoreInitialMultiplier)

totalScore = score * scoreInitialMultiplier
console.log(totalScore)


// SECTION: Function


function nice() {
    console.log(42)
}

nice()


// SECTION: Calc Function


let lap1 = 34
let lap2 = 33
let lap3 = 36

function total() {
    let lapInitial = lap1 + lap2 + lap3

    console.log(lapInitial)
}

total()


// SECTION: Increment that results the sum per increment


let lapsCompleted = 0

function lapIncrement() {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}

lapIncrement() // === 1
lapIncrement() // === 2
lapIncrement() // === 3


// SECTION: Increment that results the sum of all increments combined


let lapsCompleted = 0

function lapIncrement() {
    lapsCompleted = lapsCompleted + 1
}

lapIncrement()
lapIncrement()
lapIncrement()

console.log(lapsCompleted) // === 3


// SECTION: MOD


// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

let lapEl = document.getElementById("lap-el")

// console.log(countEl)

let count = 0

let storeLap = 0

function increment() {
    // add and display count
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function lap() {
    // move count into lap and display
    storeLap = storeLap + count
    lapEl.innerText = storeLap
    // then delete current data of count and display for full effect of the technical term used: "move"
    count = 0
    countEl.innerText = count
    console.log(count)
}

function reset() {
    // reset count, if any, then display
    count = 0
    countEl.innerText = count
    // reset storeLap, if any, then display
    storeLap = 0
    lapEl.innerText = storeLap
    console.log(count)
}


// SECTION: Strings


let notif = ", you have three new messages."

let user = "Adrian"

console.log(user + notif) // === Adrian, you have three new messages.


// SECTION: Strings pt.2


let username = "aerdon085"

let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser) // === You have three new notifications, aerdon085!


// SECTION: Numbers vs Strings


console.log(4 + 5) // === 9

console.log("2" + "4") // === 24

console.log("5" + 1) // === 51

console.log(100 + "100") // === 100100


// SECTION: += concatenation


// document.getElementById("welcome-el").innerText = "Hello"

let welcomeEl = document.getElementById("welcome-el")

let name = "Adrian"

let greeting = "Hello"

welcomeEl.innerText = greeting + ", " + name

console.log(welcomeEl.innerText) // === Hello, Adrian

welcomeEl.innerText += " " + ":)"

console.log(welcomeEl.innerText) // === Hello, Adrian :)

// NOTE: count = count + 1 is the same as count += 1


// SECTION: Recap (of all sections above)

// script tag
// variables
// numbers
// stirngs
// console.log()
// functions
// the DOM
// getElementById("")
// innerText
// textContent


// SECTION: if... else


let age = 21

function check() {
    if (age > 20) {
    console.log("Welcome!")
    } else {
    console.log("F*ck off!")
    }
}


// SECTION: more if... else


let age = 100

function gift() {
    if (age < 100) {
        console.log("Not eligible.")
    } else if (age === 100) {
        console.log("A gift card from the King!")
    } else {
        console.log("You've already received one.")
    }
}


// SECTION: Boolean


let firstCard = 10
let secondCard = 12
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
console.log("Are you still alive? - " + isAlive)
console.log("Are ya winning son? - " + hasBlackjack)


// SECTION: Arrays - ordered list of items (0-indexed)


let hobbies = [
    "Japanese learning", // 0
    "Programming", // 1
    "Reading", // 2
    "Drawing" // 3
]

console.log(hobbies[2]) // === Reading
console.log(hobbies.length) // === Drawing