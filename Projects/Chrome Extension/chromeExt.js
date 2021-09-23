let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const listEl = document.querySelector("#list-el")

// event listener for pushing textarea value to myLeads
inputBtn.addEventListener("click", function() {
    // log out functionality
    console.log("Saving input...")

    // conditional to prevent empty input entry
    if (inputEl.value === "") {
        console.log("No input found!")
    } else {
        // push to array
        myLeads.push(inputEl.value)

        // list current array items
        for (let i = 0; i < myLeads.length; i++) {
            console.log(myLeads[i])
        }

        console.log("Input saved!")
    }
})