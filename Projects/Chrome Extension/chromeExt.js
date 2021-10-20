let myLeads = []
let localLeads; // variable reserved for array from stored localStorage key called "myLeads" (as string data type) whihc already has a square bracket [] and would turn var:localLeads into array immediately after assignment

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
// const listEl = document.querySelector("#list-el")
const ulEl = document.querySelector("#ul-el")

// check if myLeads is empty then check if there were previous entries saved in localStorage key "myLeads," then parse as it should have been stringified including square brackets []
// "if myLeads does not contain any strings, then check if localLeads has any data to push to it which is a local data storage that stored previous myLeads entry"
if (myLeads.includes("") === false) {
    // notify recognition of empty myLeads array data and attempt to retrieve data from localStorage key "myLeads" if any
    console.log("Retrieving data...");

    // NOTE: from this point on, the parent if conditional seems unnecessary
    // assign var:localLeads to stringified localStorage key "myLeads" data and then parse
    localLeads = JSON.parse(localStorage.getItem("myLeads"));
    // conditional if localLeads' value becomes null after assignment parse
    if (localLeads !== null) {
        // loop for putting localLeads data to myLeads to avoid data conflict
        for (let i = 0; i < localLeads.length; i++) {
        // push found localLeads data to myLeads
        myLeads.push(localLeads[i]);
        // display
        listDisplay();
        }
    } else {
        console.log("No data to retrieve.")
    }
}

// event listener for pushing textarea value to myLeads
inputBtn.addEventListener("click", function () {
    // log out functionality
    console.log("Saving input...")
    
    // conditional to prevent empty input entry
    if (inputEl.value === "") {
        console.log("No input found!")
    } else {
        // push data input to array myLeads
        myLeads.push(inputEl.value)
        // store new myLeads array to localStorage key "myLeads"
        localStorage.setItem("myLeads", JSON.stringify(myLeads)); // NOTE: data assigned to the same key will always be overwritten
        // log to confirm content of localStorage
        console.log("Input saved! Current list of items: " + localStorage.getItem("myLeads"));
        // remove current input entry
        inputEl.value = ""
        // display
        listDisplay();
    }
})

// function for listing to display
function listDisplay() {
    // variable and loop for displaying array items
    let listItems = "" // is made empty
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>`
    }
    // display
    ulEl.innerHTML = listItems
}