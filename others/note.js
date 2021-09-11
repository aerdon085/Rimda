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


// SECTION: Arrays - push


let aboutMe = [
    "Adrian",
    19
]
console.log(aboutMe) // === [Adrian, 19]
aboutMe.push("March" + " " + 25 + " " + 2002)
console.log(aboutMe) // === [Adrian, 19, March 25 2002]


// SECTION: Arrays - remove items


let messages = [
    "Hello!",
    "Hi!",
    "Umm..."
]
let newMessage = "So.."
console.log(messages) // === [Hello!, Hi!, Umm...]
messages.push(newMessage)
console.log(messages) // === [Hello!, Hi!, Umm..., So...]
messages.pop()
console.log(messages) // === [Hello!, Hi!, Umm...]
messages.shift()
console.log(messages) // === [Hi!, Umm...]
messages.splice(1, 1) // NOTE: (1, 1) means starting from index position 1, remove 1 data, left to right
console.log(messages) // === [Hi!]


// SECTION: For loop


for (count = 1; count < 11; count += 1) {
    console.log(count)
}


// SECTION: More For loop


let messages = [
    "Nice",
    "Very nice",
    "Awesome",
    "Okay",
    "Hahaha",
    "Hmmm"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}


// SECTION: More For loop


let weirdCards = [7, 3, 9]
for (let i = 0; i < weirdCards.length; i++) {
    console.log(weirdCards[i])
}
// NOTE: i++ === i+=1


// SECTION: More For loop


let greetingEl = document.querySelector("#greeting-el")
let sentence = [
    "Hello",
    "my",
    "name",
    "is",
    "Adrian"
]
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}


// SECTION: Math object (Math.random)


let randomNumber = Math.random()
console.log(randomNumber) // numbers generated between 0 and 0.9


// SECTION: Math object (Math.floor)


let floorNumber = Math.floor(3.644)
console.log(floorNumber) // number generated removes decimal places if any (basically rounding down a number) === 3


// SECTION: Combined Math.random and .floor


let randomNumber = Math.floor(Math.random() * 6)
console.log(randomNumber) // generates number from 0 to 5
// NOTE: only 0|1|2|3|4|5 because Math.random can only generate up to 0.999 and multiplying it by 6 will only make it 5.994 which Math.floor will return 5


// SECTION: Roll dice function using Math.random and .floor


let randomNumber = 1
function rollDice() {
    randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log(rollDice())


// SECTION: Logical AND operator


let compCourse = true
let giveCert = true
if (compCourse === true) {
    if (giveCert === true) {
        genCert()
    }
}
function genCert() {
    console.log("Generating certificate...")
}

// logical operator can be EFFICIENTLY written in this way as well:

if (compCourse === true && giveCert ===true) {
    genCert()
}


// SECTION: Logical OR operator


let likeDoc = true
let likeStar = false
if (likeDoc === true || likeStar === true) {
    recMov()
}
function recMov() {
    console.log("Check this out!")
}


// SECTION: Objects (another way of storing variables)


// initial instance
let playerName = "Aerdon"
let playerChips = 145
let playerEl = document.getElementById("player-el")
playerEl.innerText = playerName + ": " + playerChips

// new instance
let player = {
    name: "Aerdon",
    chips: 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": " + player.chips


// SECTION: Objects (very much like arrays)


let course = {
    title: "CSS Grid",
    lessonNo: 16,
    teacher: "Per Borgen",
    length: 63,
    level: "Intermediate",
    isFree: true,
    tags: ["HTML", "CSS"]
}
console.log(course.tags)
console.log(course["tags"])


// SECTION: Objects


let listing = {
    compName: "Hemway",
    location: "London",
    price: 123,
    roomsAvailable: 23,
    nearYou: ["Burnham", "Ham", "Hemming"]
}
console.log("console.log command: " + listing.compName, listing.price, listing.nearYou)
// TEST: for looping an array inside an object
for (i = 0; i < listing.nearYou.length; i++) {
    console.log(listing.nearYou[i])
}