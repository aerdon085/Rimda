let myLeads = [];
let localLeads; // variable reserved for array from stored localStorage key called "myLeads" (as string data type) whihc already has a square bracket [] and would turn var:localLeads into array immediately after assignment
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
// const listEl = document.querySelector("#list-el");
const ulEl = document.querySelector("#ul-el");

// notify attempt to retrieve data from localStorage key "myLeads" if any
console.log("Retrieving data...");
// assign var:localLeads to stringified localStorage key "myLeads" data and then parse
localLeads = JSON.parse(localStorage.getItem("myLeads"));
// conditional if localLeads' value becomes null after assignment parse
if (localLeads !== null) {
    // loop for putting localLeads data to myLeads to avoid data conflict
    for (let i = 0; i < localLeads.length; i++) {
    // push found localLeads data to myLeads
    myLeads.push(localLeads[i]);
    // display
    listDisplay(myLeads);
    }
} else {
    console.log("No data to retrieve.");
}

// BUTTONS
// event listener for pushing textarea value to myLeads
inputBtn.addEventListener("click", function () {
    // log out functionality
    console.log("Saving input...");
    
    // conditional to prevent empty input entry
    if (inputEl.value === "") {
        console.log("No input found!")
    } else {
        // push data input to array myLeads
        myLeads.push(inputEl.value);
        // save locally
        saveLocal(myLeads);
        // remove current input entry
        inputEl.value = "";
        // display
        listDisplay(myLeads);
    }
})

// event listener function for deleting/clearing everything
deleteBtn.addEventListener("dblclick", function() {
    // log functionality
    console.log("Clearing data...")
    // clear localStorage
    localStorage.clear();
    // clear myLeads
    myLeads = [];
    // clear ulEl
    // ulEl.innerHTML = "";
    listDisplay(myLeads);
    // log completion
});

// event listener function for save tab
tabBtn.addEventListener("click", function() {
    // get link of current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        // push link object to myLeads
        myLeads.push(tabs[0].url);
        // store to localStorage
        saveLocal(myLeads);
        // display
        listDisplay(myLeads);
    });
});

// PROCESSES/FUNCTIONS
// function for saving to localStorage
function saveLocal(leads) {
    // store new myLeads array to localStorage key "myLeads"
    localStorage.setItem("myLeads", JSON.stringify(leads)); // NOTE: data assigned to the same key will always be overwritten
    // log to confirm content of localStorage
    console.log("Input saved! Current list of items: " + localStorage.getItem("myLeads"));
}

// function for listing to display
function listDisplay(leads) {
    // variable and loop for displaying array items
    let listItems = "" // is made empty
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>`
    }
    // display
    ulEl.innerHTML = listItems;
}
