let initialResultEl = document.getElementById("initial-result")

let resultEl = document.getElementById("result")

let input = 0

let convertInput = 0

let input1 = 0

// SECTION: num buttons
// javascript operation of functions explanation will only be explained in one function to avoid unnecessary repetition of content and length of document
// for num buttons section, explanation is to be found in "function one()"

function one() {
    // from zero value of input, increment value in one press of button's value
    input += 1
    resultEl.textContent = input
    console.log(input)

    // then convert number to string to avoid further increment (1>2), and instead add another of button's value NEXT to the initially logged value (1>11)
    input = input + ""
}
function two() {
    input += 2
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function three() {
    input += 3
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function four() {
    input += 4
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function five() {
    input += 5
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function six() {
    input += 6
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function seven() {
    input += 7
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function eight() {
    input += 8
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function nine() {
    input += 9
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}
function zero() {
    input += 0
    resultEl.textContent = input
    console.log(input)
    input = input + ""
}

// SECTION: func buttons
// javascript operation of functions explanation will only be explained in one function to avoid unnecessary repetition of content and length of document
// for func buttons section, explanation is to be found in "function add()"

function add() {
    // log for proof of operation functionality:
    console.log("Addition")

    // convert var:input string data into number data
    convertInput = parseFloat(input)

    // confirm new data and log
    // REMINDER: data entered in var:input (string data) is now a number data in var:converInput to permit proper math function
    console.log("New input: " + convertInput)
    console.log("Old input: " + input1)

    // MAIN OPERATION: add (unless math function says otherwise) var:convertInput to var:input1
    console.log("Formula: " + input1 + " + " + convertInput)
    input1 += convertInput

    // display operation result to mini-display (input1) and log into console
    initialResultEl.textContent = input1
    console.log("Result: " + input1)

    // clear var:convertInput for new string-to-number conversion
    convertInput = 0
    console.log("var:convertInput clear: " + convertInput)

    // clear var:input for new data input after operation
    input = 0
    resultEl.textContent = input
    console.log("var:input clear: " + input)

    console.log("Please enter new data.")
}
function subtract() {
    console.log("Subtraction")
    convertInput = parseFloat(input)
    console.log("New input: " + convertInput)
    console.log("Old input: " + input1)
    console.log("Formula: " + input1 + " - " + convertInput)
    input1 -= convertInput
    initialResultEl.textContent = input1
    console.log("Result: " + input1)
    convertInput = 0
    console.log("var:convertInput clear: " + convertInput)
    input = 0
    resultEl.textContent = input
    console.log("var:input clear: " + input)
    console.log("Please enter new data.")
}
function multiply() {
    console.log("Multiplication")
    convertInput = parseFloat(input)
    console.log("New input: " + convertInput)
    console.log("Old input: " + input1)
    console.log("Formula: " + input1 + " * " + convertInput)
    input1 *= convertInput
    initialResultEl.textContent = input1
    console.log("Result: " + input1)
    convertInput = 0
    console.log("var:convertInput clear: " + convertInput)
    input = 0
    resultEl.textContent = input
    console.log("var:input clear: " + input)
    console.log("Please enter new data.")
}
function divide() {
    console.log("Division")
    convertInput = parseFloat(input)
    console.log("New input: " + convertInput)
    console.log("Old input: " + input1)
    console.log("Formula: " + input1 + " / " + convertInput)
    input1 /= convertInput
    initialResultEl.textContent = input1
    console.log("Result: " + input1)
    convertInput = 0
    console.log("var:convertInput clear: " + convertInput)
    input = 0
    resultEl.textContent = input
    console.log("var:input clear: " + input)
    console.log("Please enter new data.")
}

// SECTION: clear button

function clearFunc() {
    input = 0
    resultEl.textContent = input
    convertInput = 0
    input1 = 0
    initialResultEl.textContent = input1
    console.log("All data cleared.")
    console.log("Please enter new data.")
}