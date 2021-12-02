// this file is a demonstration that the function here can be used on the file where it is required even though it has not been exported

const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`The sum is ${num1 + num2}.`);
}
addValues();

// when required, the running main file will invoke the function here because in this very file it is, as well, invoked unlike the function in module2.js