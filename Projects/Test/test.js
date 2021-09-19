let fruit = ["Apple", "Orange", "Orange", "Apple", "Orange", "Apple"]
let appleShelf = document.querySelector("#apple-shelf")
let orangeShelf = document.querySelector("#orange-shelf")
function sort() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "Apple") {
            appleShelf.textContent += " " + fruit[i]
        } else if (fruit[i] === "Orange") {
            orangeShelf.textContent += " " + fruit[i]
        }
        console.log("Fruit shelved: " + fruit[i])
        // fruit.shift()
    }
}
sort()
console.log("Fruits left unshelved: " + fruit)