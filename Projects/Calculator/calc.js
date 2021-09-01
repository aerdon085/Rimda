// VAR: Display

let initialResultEl = document.getElementById("initial-result")
let resultEl = document.getElementById("result")

// VAR: Data storage

let input = 0
let convertInput = 0
let input1 = 0
let sum = 0

// VAR: Math operation states

let operationAdd = false
let operationSub = false
let operationMul = false
let operationDiv = false

// this function is used to reset all operation states to false
function operationReset() {
    operationAdd = false
    operationSub = false
    operationMul = false
    operationDiv = false
}

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

// GENERAL OPERATION: It mainly converts string input from var:input to number data. It goes to var:convertInput during parseFloat(), then is stored to input1. Var:convertInput then zeroed.
// Overview: input > convertInput > input1
function conversionFunc() {
    // log for proof of operation functionality:
    console.log("Conversion in progress...")

    // REMINDER: syntax "convertInput = ???" will overwrite any existing data stored in it
    // convert var:input string data into number data, store new number data to var:convertInput, then log
    convertInput = parseFloat(input)
    console.log("Successfully converted string data " + input + " (var:input) to number data " + convertInput + " (var:convertInput)")

    // REMINDER: syntax "input1 = ???" will overwrite any existing data stored in it
    // REMINDER: data entered in var:input (string data) is now a number data in var:converInput to permit proper math function
    // transfer var:convertInput to var:input1 for storage
    input1 = convertInput
    console.log("Transferring var:convertInput number data to var:input1. Var:input1 = " + input1)

    // clear var:convertInput for new string-to-number conversion
    convertInput = 0
    console.log("Var:convertInput clear: " + convertInput)

    // display input1 to mini-display (input1) and log into console
    initialResultEl.textContent = input1

    // clear var:input for new data input after operation
    input = 0
    resultEl.textContent = input
    console.log("Var:input clear: " + input)

    // Confirm conversionFunction() completion
    console.log("Conversion complete!")
}

function add() {
    // log proof of function functionality :P
    console.log("Addition function activated.")

    // Use conversionFunction()
    conversionFunc()

    // REMINDER: After conversionFunc(), var:input is 0, var:convertInput is 0, and input1 has value

    // ensure that no other var:operationState is active
    // make var:operationAdd (or appropriate operation) true
    operationReset()
    operationAdd = true

    console.log("Please enter new data.")
}
function subtract() {
    console.log("Subtraction function activated.")
    conversionFunc()
    operationReset()
    operationSub = true
    console.log("Please enter new data.")
}
function multiply() {
    console.log("Multiplication function activated.")
    conversionFunc()
    operationReset()
    operationMul = true
    console.log("Please enter new data.")
}
function divide() {
    console.log("Division function activated.")
    conversionFunc()
    operationReset()
    operationDiv = true
    console.log("Please enter new data.")
}

// SECTION: = (equal) button

function equal() {
    // log for proof of functionality
    console.log("Summation")

    // log current var:input1 data
    console.log("Var:input1 (old data) = " + input1)

    // convert var:input, then store in var:convertInput, then log
    convertInput = parseFloat(input)
    console.log("New data = " + convertInput)

    // empty data of var:input to allow flowCalc() to function whenever the user decides to use current result as new input
    input = 0

    // Conditional operation
    if (operationAdd === true) {
        sum = input1 + convertInput
    } else if (operationSub === true) {
        sum = input1 - convertInput
    } else if (operationMul === true) {
        sum = input1 * convertInput
    } else {
        sum = input1 / convertInput
    }

    // then display
    resultEl.textContent = sum
    console.log("Result: " + sum)
}

// SECTION: clear button

function clearFunc() {
    // log proof of functionality
    console.log("Clearing all data...")
    // clear var:input, then log, then display
    input = 0
    resultEl.textContent = input
    console.log("Var:input: " + input)
    // clear var:convertInput, the log
    convertInput = 0
    console.log("Var:convertInput: " + convertInput)
    // clear var:input1, then log, then display
    input1 = 0
    console.log("Var:input1: " + input1)
    initialResultEl.textContent = input1
    // confirm clearFunc() success
    console.log("All data cleared.")
    // reset operation states
    operationReset()
    console.log("Please enter new data.")
}

// if there is value of var:sum, transfer it to var:convertInput for continuous flow of calculation
// if input has data, flowCalc will be ignored; if input has no data and a func button is used (add(), subtract(), etc.) and a sum currently possessing data, input will be === sum
// function flowCalc() {
//     if (convertInput > 0) {
//         sum = 0
//     } else {
//         input = sum
//         sum = 0
//     }
// }