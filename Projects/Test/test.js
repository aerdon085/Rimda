let pOneDis = document.querySelector("#pOne")
let pTwoDis = document.querySelector("#pTwo")

let handSign = ""

function start() {
    let playerOne = draw()
    let playerTwo = draw()
    // display to HTML
    pOneDis.textContent = "Player 1: " + playerOne
    pTwoDis.textContent = "Player 2: " + playerTwo
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