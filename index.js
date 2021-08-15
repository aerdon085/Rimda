let countEl = document.getElementById("count-el")

let lapEl = document.getElementById("lap-el")

let pressEl = document.getElementById("press-el")

let saveEl = document.getElementById("save-el")

// document.getElementById("save-el").innerText = 5

let count = 0

let storeLap = 0

let saveLap = 0

let logTimes = 0

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
    console.log(storeLap)
    // adding number of times button is pressed and display
    logTimes = logTimes + 1
    pressEl.innerText = logTimes
    // console.log(logTimes)
}

function reset() {
    // reset count, if any, then display
    count = 0
    countEl.innerText = count
    // reset storeLap, if any, then display
    storeLap = 0
    lapEl.innerText = storeLap
    // reset logTimes, if any, then display
    logTimes = 0
    pressEl.innerText = logTimes
    console.log(count)
}

function save() {
    // record count and storeLap data to saveLap
    saveLap = saveLap + count + storeLap
    saveEl.innerText = saveLap
    console.log(saveLap)
}

let name = "Adrian"
let greeting = "Hello, my name is"
let myGreeting = greeting + " " + name + "."
