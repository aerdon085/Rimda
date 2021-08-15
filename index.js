// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

let lapEl = document.getElementById("lap-el")

// console.log(countEl)

let count = 0

let storeLap = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function lap() {
    storeLap = storeLap + count
    count = 0
    lapEl.innerText = storeLap
    countEl.innerText = count
    console.log(storeLap)
}

function reset() {
    count = 0
    storeLap = 0
    countEl.innerText = count
    lapEl.innerText = storeLap
    console.log(count)
    console.log(storeLap)
}