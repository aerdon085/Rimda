let pOneDis = document.querySelector("#pOne")
let pTwoDis = document.querySelector("#pTwo")
let greetingEl = document.querySelector("#greeting-el")

let playerOne = 0
let playerTwo = 0
let handSign = ""

// function that starts the game when pressed #start-btn
function start() {
    playerOne = draw()
    playerTwo = draw()
    // display to HTML
    pOneDis.textContent = "Player 1: " + playerOne
    pTwoDis.textContent = "Player 2: " + playerTwo
    // display winner of game
    checkWin()
}

function draw() {
    // represent hand signs with numbers
    let drawValue = Math.floor(Math.random() * 3) + 1
    console.log("Drawing... " + drawValue)
    // translate number to hand sign
    if (drawValue === 1) {
        handSign = "Rock"
    } else if (drawValue === 2) {
        handSign = "Paper"
    } else {
        handSign = "Scissors"
    }
    console.log(handSign)
    return handSign
}

function checkWin() {
    if (playerOne === "Rock" && playerTwo === "Scissors" || playerOne === "Paper" && playerTwo === "Rock" || playerOne === "Scissors" && playerTwo === "Paper") {
        greetingEl.textContent = "Player 1 won!"
    } else if (playerOne === "Rock" && playerTwo === "Rock" || playerOne === "Paper" && playerTwo === "Paper" || playerOne === "Scissors" && playerTwo === "Scissors") {
        greetingEl.textContent = "It's a tie!"
    } else {
        greetingEl.textContent = "Player 2 won!"
    }
}