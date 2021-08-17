let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

// document.getElementById("save-el").innerText = 5

let count = 0

let saveLap = 0

function increment() {
    // add and display count
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    // record count into saveLap
    saveLap += count
    saveLap += " - "
    // then display and log
    saveEl.innerText = saveLap
    console.log(saveLap)
    // then reset count and display
    count = 0
    countEl.innerText = count
}

let welcomeEl = document.getElementById("welcome-el")
let name = "Adrian Luis Luzon"
let greeting = "Hello"
welcomeEl.innerText = greeting + ", " + name
welcomeEl.innerText += " " + ":)"