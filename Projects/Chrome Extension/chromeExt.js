let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const listEl = document.querySelector("#list-el")
const ulEl = document.querySelector("#ul-el")

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

        // TEMPORARY: delete current ulEl list in order to prevent accumulation and repetition of past input
        ulEl.textContent = ""

        // list current array items
        console.log("Input saved! Current items:")
        for (let i = 0; i < myLeads.length; i++) {
            // console.log(myLeads[i])
            // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
            const li = document.createElement("li")
            li.textContent = myLeads[i]
            ulEl.append(li)
        }

        // remove current input entry
        inputEl.value = ""
    }
})