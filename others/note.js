//SECTION: Variables


let firstBatch = 5
let secondBatch = 7

let count = firstBatch + secondBatch
console.log(count)

count = count + firstBatch
console.log(count)

count = count + firstBatch
console.log(count)


//SECTION: Basic Calc with Variables


let score = 0
let scoreMultiplier = score * 0.001
console.log(scoreMultiplier)

let scoreInitialMultiplier = 1 + scoreMultiplier
console.log(scoreInitialMultiplier)

totalScore = score * scoreInitialMultiplier
console.log(totalScore)


// SECTION: Function


function nice() {
    console.log(42)
}

nice()


// SECTION: Calc Function


let lap1 = 34
let lap2 = 33
let lap3 = 36

function total() {
    let lapInitial = lap1 + lap2 + lap3

    console.log(lapInitial)
}

total()


// SECTION: Increment that results the sum per increment


let lapsCompleted = 0

function lapIncrement() {
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}

lapIncrement() // === 1
lapIncrement() // === 2
lapIncrement() // === 3


// SECTION: Increment that results the sum of all increments combined


let lapsCompleted = 0

function lapIncrement() {
    lapsCompleted = lapsCompleted + 1
}

lapIncrement()
lapIncrement()
lapIncrement()

console.log(lapsCompleted) // === 3


// SECTION: MOD


// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

let lapEl = document.getElementById("lap-el")

// console.log(countEl)

let count = 0

let storeLap = 0

function increment() {
    // add and display count
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function lap() {
    // move count into lap and display
    storeLap = storeLap + count
    lapEl.innerText = storeLap
    // then delete current data of count and display for full effect of the technical term used: "move"
    count = 0
    countEl.innerText = count
    console.log(count)
}

function reset() {
    // reset count, if any, then display
    count = 0
    countEl.innerText = count
    // reset storeLap, if any, then display
    storeLap = 0
    lapEl.innerText = storeLap
    console.log(count)
}


// SECTION: Strings


let notif = ", you have three new messages."

let user = "Adrian"

console.log(user + notif) // === Adrian, you have three new messages.


// SECTION: Strings pt.2


let username = "aerdon085"

let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser) // === You have three new notifications, aerdon085!


// SECTION: Numbers vs Strings


console.log(4 + 5) // === 9

console.log("2" + "4") // === 24

console.log("5" + 1) // === 51

console.log(100 + "100") // === 100100


// SECTION: += concatenation


// document.getElementById("welcome-el").innerText = "Hello"

let welcomeEl = document.getElementById("welcome-el")

let name = "Adrian"

let greeting = "Hello"

welcomeEl.innerText = greeting + ", " + name

console.log(welcomeEl.innerText) // === Hello, Adrian

welcomeEl.innerText += " " + ":)"

console.log(welcomeEl.innerText) // === Hello, Adrian :)

// NOTE: count = count + 1 is the same as count += 1


// SECTION: Recap (of all sections above)


// script tag
// variables
// numbers
// stirngs
// console.log()
// functions
// the DOM
// getElementById("")
// innerText
// textContent


// SECTION: if... else


let age = 21

function check() {
    if (age > 20) {
    console.log("Welcome!")
    } else {
    console.log("F*ck off!")
    }
}


// SECTION: more if... else


let age = 100

function gift() {
    if (age < 100) {
        console.log("Not eligible.")
    } else if (age === 100) {
        console.log("A gift card from the King!")
    } else {
        console.log("You've already received one.")
    }
}


// SECTION: Boolean


let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "New card?"
} else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
} else {
    message = "Game over!"
    isAlive = false
}

console.log(message)
console.log("Are you still alive? - " + isAlive)
console.log("Are ya winning son? - " + hasBlackjack)


// SECTION: Arrays - ordered list of items (0-indexed)


let hobbies = [
    "Japanese learning", // 0
    "Programming", // 1
    "Reading", // 2
    "Drawing" // 3
]

console.log(hobbies[2]) // === Reading
console.log(hobbies.length) // === Drawing


// SECTION: Arrays - push


let aboutMe = [
    "Adrian",
    19
]
console.log(aboutMe) // === [Adrian, 19]
aboutMe.push("March" + " " + 25 + " " + 2002)
console.log(aboutMe) // === [Adrian, 19, March 25 2002]


// SECTION: Arrays - remove items


let messages = [
    "Hello!",
    "Hi!",
    "Umm..."
]
let newMessage = "So.."
console.log(messages) // === [Hello!, Hi!, Umm...]
messages.push(newMessage)
console.log(messages) // === [Hello!, Hi!, Umm..., So...]
messages.pop()
console.log(messages) // === [Hello!, Hi!, Umm...]
messages.shift()
console.log(messages) // === [Hi!, Umm...]
messages.splice(1, 1) // NOTE: (1, 1) means starting from index position 1, remove 1 data, left to right
console.log(messages) // === [Hi!]


// SECTION: For loop


for (count = 1; count < 11; count += 1) {
    console.log(count)
}


// SECTION: More For loop


let messages = [
    "Nice",
    "Very nice",
    "Awesome",
    "Okay",
    "Hahaha",
    "Hmmm"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}


// SECTION: More For loop


let weirdCards = [7, 3, 9]
for (let i = 0; i < weirdCards.length; i++) {
    console.log(weirdCards[i])
}
// NOTE: i++ === i+=1


// SECTION: More For loop


let greetingEl = document.querySelector("#greeting-el")
let sentence = [
    "Hello",
    "my",
    "name",
    "is",
    "Adrian"
]
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}


// SECTION: Math object (Math.random)


let randomNumber = Math.random()
console.log(randomNumber) // numbers generated between 0 and 0.9


// SECTION: Math object (Math.floor)


let floorNumber = Math.floor(3.644)
console.log(floorNumber) // number generated removes decimal places if any (basically rounding down a number) === 3


// SECTION: Combined Math.random and .floor


let randomNumber = Math.floor(Math.random() * 6)
console.log(randomNumber) // generates number from 0 to 5
// NOTE: only 0|1|2|3|4|5 because Math.random can only generate up to 0.999 and multiplying it by 6 will only make it 5.994 which Math.floor will return 5


// SECTION: Roll dice function using Math.random and .floor


let randomNumber = 1
function rollDice() {
    randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log(rollDice())


// SECTION: Logical AND operator


let compCourse = true
let giveCert = true
if (compCourse === true) {
    if (giveCert === true) {
        genCert()
    }
}
function genCert() {
    console.log("Generating certificate...")
}

// logical operator can be EFFICIENTLY written in this way as well:

if (compCourse === true && giveCert ===true) {
    genCert()
}


// SECTION: Logical OR operator


let likeDoc = true
let likeStar = false
if (likeDoc === true || likeStar === true) {
    recMov()
}
function recMov() {
    console.log("Check this out!")
}


// SECTION: Objects (another way of storing variables)


// initial instance
let playerName = "Aerdon"
let playerChips = 145
let playerEl = document.getElementById("player-el")
playerEl.innerText = playerName + ": " + playerChips

// new instance
let player = {
    name: "Aerdon",
    chips: 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": " + player.chips


// SECTION: Objects (very much like arrays)


let course = {
    title: "CSS Grid",
    lessonNo: 16,
    teacher: "Per Borgen",
    length: 63,
    level: "Intermediate",
    isFree: true,
    tags: ["HTML", "CSS"]
}
console.log(course.tags)
console.log(course["tags"])


// SECTION: Objects


let listing = {
    compName: "Hemway",
    location: "London",
    price: 123,
    roomsAvailable: 23,
    nearYou: ["Burnham", "Ham", "Hemming"]
}
console.log("console.log command: " + listing.compName, listing.price, listing.nearYou)
// TEST: for looping an array inside an object
for (i = 0; i < listing.nearYou.length; i++) {
    console.log(listing.nearYou[i])
}


// SECTION: Methods on objects 


let something = {
    nothing: function() {
        console.log("Okay.")
    }
}
something.nothing() // Okay.

// NOTE: METHODS are functions that are attached to objects; ex: console.log() with console being the object and log() being the function


// SECTION: Recap

// arrays
// objects
// booleans
// if... else statements
// logical and (&&) operations
// logical or (||) operations
// comparison operators (sum <= 20)
// for loops
// Math object (Math.random or .floor)
// return statements


// SECTION: objects and functions


let person = {
    name: "Adrian Luzon",
    age: 19,
    country: "Philippines"
}
function logData() {
    return person.name + " is " + person.age + " and lives in the " + person.country
}


// SECTION: if else


let age = 0
let discount = ""
function randomStranger() {
    age = Math.floor(Math.random() * 70) + 1
}
function actInstance() {
    randomStranger()
    if (age <= 6) {
        discount = "Free"
    } else if (age >= 7 && age <= 17) {
        discount = "Child discount"
    } else if (age >= 18 && age <= 26) {
        discount = "Student discount"
    } else if (age >= 27 && age <= 66) {
        discount = "Full price"
    } else {
        discount = "Senior citizen discount"
    }
    console.log(age, discount)
}
actInstance()


// SECTION: for loop


let largeCount = ["China", "India", "USA", "Indonesia", "Pakistan"]
for (i = 0; i < largeCount.length; i++) {
    console.log(largeCount[i])
}


// SECTION: pop, push, shift, unshift


let largeCount = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCount.pop() // removes Monaco
largeCount.shift() // removes Tuvalu
largeCount.push("Pakistan") // adds Pakistan at the end
largeCount.unshift("China") // adds China at the start
// Check:
for (let i = 0; i < largeCount.length; i++) {
    console.log(largeCount[i])
}


// SECTION: logical operator AND


let day = 13
let dayWeek = "Tuesday"
if (day === 13 && dayWeek === "Friday") {
    console.log(":O")
} else {
    console.log("You are safe :>")
}


// SECTION: Event listener (new technique)


// old is below; where in html, you use onclick="saveIput()"
function saveInput() {
    console.log("Input saved.")
}
// new is below where no onclick="" is needed, and its event listener is all in JS making documents more organized and clean
let inputBtn = document.querySelector("#input-btn")
inputBtn.addEventListener("click", function() {
    console.log("Input saved.")
})


// SECTION: New event listener technique


let boxArea = document.querySelector("#box-area")
boxArea.addEventListener("click", function() {
    console.log("Opening the box...")
})


// SECTION: let vs const

let firstName = "Adrian"
const lastName = "Luzon"
firstName = "Luis" // let can allow variable value reassignment
lastName = "Luzon" // const variable's value cannot be reassigned
// "If possible, use const. If not, use let"


// SECTION: let vs const (2)


const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"
shippingCost = 15
shippingTime = "7-14 days"
const fullPrice = basePrice - discount + shippingCost
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


// SECTION: HTML DOM Input Text .value


// only for HTML elements that have input
document.querySelector("#input-el").value = "Johnny Bravo" //content of input/text area will be "Johnny Bravo"


// SECTION: innerHTML


let someText = "Search/buy!"
let searchBtn = document.querySelector("#div1-el")
let buyBtn = document.querySelector("#div2-el")
searchBtn.textContent = "<button>" + someText + "</button>" // this will only display the supposed html element as text
buyBtn.innerHTML = "<button>" + someText + "</button>" // this will read its value as an html element and thus a button
buyBtn.addEventListener("click", function() {
    buyBtn.innerHTML += "<br><p>Thank you for your purchase!</p>"
})


// SECTION: another method of adding HTML element other than innerHTML (.append and .createElement)


const greetingEl = document.querySelector("div#greeting-el")
const p = document.createElement("p") // this creates the element
p.textContent = "Hello world!" // element's content
greetingEl.append(p) // appends element's content in specified parent element (in this case, in this line's DOM's greetingEl)


// SECTION: .createElement
// I do not know what to call this as a section but I think it has something to do with the DOM and manipulation of objects (due to the periods to refer to it)


const el = document.createElement("p");
el.textContent = "Nice";
el.style.color = "blue";
document.body.appendChild(el);


// SECTION: multiple assignment operator


let i = j = k = l = 9 * (h = 2);
console.log(h, i, j, k, l);


// SECTION: negation operator


let someNumber = 100;
if (!(someNumber !== 100)) {
    console.log("It is equal!");
}


// SECTION: more negation operator


let isHappy = true;
isHappy = !isHappy;
console.log(isHappy); // isHappy === false


// SECTION: event listener for keyboard control


document.addEventListener('keydown', sendKeyDown);
    function sendKeyDown(event) {
        alert(event.code);
    }


// SECTION: new if conditional (if only true or false/have value or not)


let hasNum = 9; // as long as has value === true
if (hasNum) {
    console.log("hasNum has value");
}
if (hasNum) console.log("hasNum has value"); // this is shorter version of if (as long as no need for else if)
hasNum = 0; // if no value or equal to zero is === false
if (hasNum) {
    console.log("hasNum has value");
}
if (hasNum) console.log("hasNum has value");


// SECTION: ternary operator (new if...else conditional)


let isMember = false;
(isMember === true) ? console.log("Discounted.") : console.log("Full price.");


// SECTION: more ternary operator


let waifu = 0;
(waifu === 0)? (waifu += 1): (waifu += waifu);
console.log(waifu);

// so that var:waifu will not be typed over and again, a more concise version:

waifu += (waifu === 0)? (1): (waifu);
console.log(waifu);


// SECTION: pre/post increment/decrement operator


let h = 2, i = 2, j = 5, n, m;
n = h++ * j; // post-increment operator
console.log(n); // "10"
m = ++i * j; // pre-increment operator
console.log(m); // "15"

// NOTE: prefix operator increments variable accordingly before any other operation, while postfix increments variable only after operation is finished


// SECTION: switch statement


console.log("Hello world!");
let caseChoice = 2;
switch (caseChoice) {
    case (1): console.log(caseChoice);
    break;
    case (2): console.log(caseChoice);
    break;
    case (3): console.log(caseChoice);
}


// SECTION: template strings/template literals using backticks (``)


let myLeads = []
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // instead of using this, which is hard to interpret as HTML:
    listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
    // we use this:
    listItems += /*backtick ->*/ `
        <li>
            <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
        </li>
        ` /*<- backtick*/
}
ulEl.innerHTML = listItems


// SECTION: storing data on localStorage
/* related functions are as follows:
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.clear()
*/


localStorage.setItem("someStuff", "This is the stuff");
console.log(localStorage.getItem("someStuff"));
localStorage.clear();


// SECTION: JSON.parse() and JSON.stringify()
// converting data type using JSON. because data can only be stored to localStorage as strings


let myName = `["Adrian"]` // if array is string use JSON.parse to remove it as string
console.log("Data type is: " + typeof myName); // confirm data type first === string
myName = JSON.parse(myName); // converts string to array
console.log("Data type is: " + typeof myName); // confirm data type === array
myName.push("Adrian"); // then push new data
console.log("Array content: " + myName); // confirm data content
myName = JSON.stringify(myName); // convert to string again so that it may be stored to localStorage through .setItem
console.log("Data type is: " + typeof myName); // confirm data type again
console.log(myName); // log array string (not string array)


// SECTION: truthy and falsy; Boolean()
// falsy === any variable that has no value (false, 0, "", null, undefined, NaN)
// truthy === any variable that has value


console.log(Boolean("")) // false
console.log(Boolean("0")) // true
console.log(Boolean(100)) // true
console.log(Boolean(null)) // false
console.log(Boolean([0])) // true
console.log(Boolean(-0)) // false


// SECTION: parameters vs arguments


function add(num1, num2) /*These are parameters*/ {
    return num1 + num2;
}
add(1, 2); // These are arguments


// SECTION: RECAP


// const
// addEventListener()
// innerHTML
// input.value
// function parameters and arguments
// template strings
// localStorage
// JSON object
// objects in arrays


// SECTION: Math.PI


console.log(Math.PI * 2); // 2 radians (2*Math.PI) is equal to 360 degrees


// SECTION: Date()


let date = new Date();
if (date.getFullYear() === (date.getYear() + 1900)) console.log("It is equal!");


// SECTION: let vs var


function run() {
    {
        var cow = "Moo"; // function scope
        let dog = "Bark"; // block scope
    }
    console.log(cow); // Moo
    console.log(dog); // Error
}


// SECTION: arrays containing objects and objects containing arrays


let some = [
        {
            number: [10, 11, 12],
            number1: [20, 21]
        },
        {
            alpha: ['A', 'B']
        }
    ]
    console.log(some[0]["number1"][1]); // 21
    console.log(some[0].number[1]); // 11


// SECTION: for loop with objects


let entity = {
    name: "Adrian", // key === name
    age: 19, // key === age
    student: true, // key === student
    hobbies: ["drawing", "programming"] // key === hobbies
}
for (let key in entity) {
    console.log(key + ": " + entity[key]);
}


// SECTION: setTimeout()
// delays trigger of something


document.querySelector("button").addEventListener("click", function() {
    setTimeout(logSomething, 1000); // trigger function after 1000ms
});
function logSomething() {
    console.log("This is something.");
}


// SECTION function declaration vs function expression


// function declaration: load before any code is executed
function funcDeclaration() {
    console.log("This is a function declaration.");
}
// function expression: loads only when interpreter reaches its line of code
let funcExpression = function() {
    console.log("This is a function expression");
}


// SECTION: arrow function vs normal/regular function


let something = "something.";
// regular function/normal function (includes function declaration and function)
function hmm0(something) {
    return `This is ${something}`;
}
// arrow function
let hmm1 = (something) => {
    return `This is ${something}`;
}


// SECTION: callback
// callbacks are, in oversimplified terms, functions called by functions and thus a relationship between functions


let order = (call_production) => {
    console.log("Order placed. Please call production");
    call_production();
};
let production = () => {
    console.log("Order received. Starting production");
};
order(production);


// SECTION: callback hell
// callback hell is, due to the demand of needing async processes (processes that do not stop the main thread) to depend on the completion of other async processes, the accumulation and almost unreadable format of callbacks
// this is where promises enter


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Container: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}
let order = (fruit_num, call_produce) => {
    setTimeout(() => {
        console.log(`The selection was ${stocks.Fruits[fruit_num]}.`);
        call_produce();
    }, 2000);
}
let produce = () => {
    setTimeout(() => {
        console.log("Production has started.");
        setTimeout(() => {
            console.log("The fruit has been chopped.");
            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added.`);
                setTimeout(() => {
                    console.log("The machine has been started.");
                    setTimeout(() => {
                        console.log(`You have chosen ${stocks.Container[0]}.`);
                        setTimeout(() => {
                            console.log(`Your toppings: ${stocks.Toppings[0]}.`);
                            setTimeout(() => {
                                console.log("Ice cream, ready to serve.");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}
order(0, produce);


// SECTION: promises
// call Promise function => if true then resolve(), otherwise reject() => if resolve() .then, but if reject() .catch => .finally
// NOTE: notice that after the call of promise function, I must not put semi-colon (;) so that .then, .catch, and .finally will work unless I want to put order().then() in each line


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Container: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}
let isShopOpen = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Our shop is closed."));
        }
    });
}
// initial function call
order(2000, ()=>console.log(`Your chosen flavor is ${stocks.Fruits[0]}.`))
.then(()=>{
    return order(0, ()=>console.log("Production has started."));
})
.then(()=>{
    return order(2000, ()=>console.log("The fruit was chopped."));
})
.then(()=>{
    return order(1000, ()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been put in.`));
})
.then(()=>{
    return order(1000, ()=>console.log("Machine has started."));
})
.then(()=>{
    return order(2000, ()=>console.log(`Your chosen container is ${stocks.Container[0]}.`));
})
.then(()=>{
    return order(3000, ()=>console.log(`Processing ${stocks.Toppings[0]}.`));
})
.then(()=>{
    return order(1000, ()=>console.log("Ice cream ready to be served."));
})
// error handler
.catch(()=>console.log("Customer cannot be served."))
.finally(()=>console.log("Day has ended, shop is closed."));


// SECTION: async/await


let patient = true;
let waitSuccess = (ms)=>{
	return new Promise((resolve, reject)=>{
		if (patient) {
			// NOTE: resolution is only executed (using arrow func) after ms by the following structure:
			setTimeout(()=>resolve(console.log("Waiting successful.")), ms);
			// ...rather than setTimeout(resolve(()=>console.log()), ms)
		} else {
			reject(console.log("You are impatient"));
		}
	});
}
async function order0() {
	try {
		console.log("Waiting...");
		await waitSuccess(3000);
		console.log("Trying something else...");
		await abc; // abc does not exist, so will go to catch{}
		console.log("Successful.");
	} catch(error) {
		console.log(error)
	} finally {
		console.log("Bye.");
	}
}
// execute
order0()
// after main func execution, .then
.then(()=>{
	// use RETURN func() if you want to reuse its resolve/reject logic in following .then, .catch, and .finally
	return waitSuccess(3000);
})


// SECTION: map()
// maps returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making a new one


const people = [
	{
		name: "Bob",
		age: 20,
	},
	{
		name: "Anna",
		age: 25,
	},
	{
		name: "Sussy",
		age: 30,
	},
	{
		name: "John",
		age: 26,
	}
];
// different ways to use map():
const getAges = (person)=>{return person.age}
const ages = people.map(getAges);
// or
const names = people.map((person)=>person.name);
// result
console.log(ages);  // [20, 25, 30, 26]
console.log(names); // ["Bob", "Anna", "Sussy", "John"]
// and create new object array
const newList = people.map((item)=>{
			return {
				firstName: item.name.toUpperCase(),
				newAge: item.age + 10
			}
		});
		// render on page
		document.querySelector("div").innerHTML = newList.map((newAge)=>`<h4>${newAge.newAge}</h4>`).join("");
		// .join("") removes space and/or comma that is included when rendering array raw
		// if resultList = newList.map((newAge)=>`<h4></h4>`) and .join("") is to be used, then: resultList.join("");
		
		
// SECTION:  making a new array using map but only those that are unique values (ES6), categorizing them, using: new Set()
// let n = [...] is called the spread operator which, so far, converts objects into an array


const menu = [
{
	name: "pancakes",
	category: "breakfast"
},
{
	name: "burger",
	category: "lunch"
},
{
	name: "steak",
	category: "dinner"
},
{
	name: "bacon",
	category: "breakfast"
},
{
	name: "eggs",
	category: "breakfast"
},
{
	name: "pasta",
	category: "dinner"
}];
const categories = ["all", ...new Set(menu.map((uniqueItem)=>uniqueItem.category))];
document.querySelector("div#el").innerHTML = categories.map((category)=>{
	return `<button style="height: 100px; width: 100px; margin: 4px;">${category}</button>`
}).join("");
		
		
// SECTION: dynamic object keys/dynamic object property using square bracket notation ([])


let items = {
	"featured-items": ["item1", "item2"],
	extras: ["item3", "item4"]
}
console.log(items["featured-items"][0]); // item1
console.log(items["extras"][1]); // item4

const powerState = "on";
let computer = {
	[powerState]: true,
}
console.log(computer.on); // true
const somethingLol = "model";
computer[somethingLol] = "hp"; // adds a new key to object array using what the variable enclosed in square braclet is equal to
// somethingLol === "model" therefore it is equal to computer["model"] the way it has been demonstrated earlier
console.log(computer); // {on: "true", model: "hp"}


// SECTION: updating objects using square bracket notation


let state = {
	loading: true
}
function updateState(key, value) {
	state[key] = value;
}
updateState("loading", false); // for an existing key, it only changes its value
console.log(state.loading); // therefore loading === false
// to make a new key and value:
updateState("browser", "chrome");
console.log(state); // {loading: false, browser: "chrome"}


// SECTION: .filter()
// returns a new array, can manipulate the size of array (unlike map)
// returns an empty array if no match
		
		
const staff = [
	{name: "Bob", age: 20, position: "developer"},
	{name: "Anna", age: 25, position: "designer"},
	{name: "Sussy", age: 30, position: "intern"},
	{name: "Peter", age: 35, position: "boss"},
];
const youngPeople = staff.filter((person)=>person.age < 30); // .filter only wants a boolean value returned and so will log youngPeople when true by condition
console.log(youngPeople); // logs object array of those whose age are below 30

// can also be written as:
const staffPosition = staff.filter((person)=>{
	if (person.position === "boss" || person.position === "intern") return true;
});
console.log(staffPosition); // logs object array of Peter and Sussy

// because .filter() will always return an array even if it will only be one object, index position must always be defined before accessing key:
console.log(staffPosition[0].position); // logs position of Sussy


// SECTION: using .filter on arrays


const progLang = ["java", "js", "c", "py"];
let knownLang = progLang.filter((lang)=>lang === "js" || lang === "c");
console.log(knownLang);


// SECTION: find
// almost the same as .filter()
// returns a single instance (objects), returns only first match even if multiple matches, if no match then undefined

const family = [
	{name: "Adrian", age: 19},
	{name: "Emily", age: 47},
]
const familyMember = family.find((member)=>member.name === "Adrian");
console.log(familyMember); // { name: "Adrian", age: 19 }

//unlike filter, find will only return one match, the first if among many, and will not be an array and can thus be accessed like so:
console.log(familyMember.name); // "Adrian"


// SECTION: reduce basics
// reduces objects within an array to a single value
// second parameter can have an initial value of {} or 0 for object or integer respectively


const playTech = [
    {name: "Alan", salary: 100},
    {name: "Adam", salary: 300},
    {name: "Rowan", salary: 400},
    {name: "Ben", salary: 10}
]
const dailyTotal = playTech.reduce((total, person)=>{
    // .reduce() automatically iterates through the now-individual values and as evident when console.log() logs them individually
    console.log(person.salary); // 100, 300, 400, 10
    total += person.salary;
    return total; // must always have a return value or will return undefined by default
}, 0); // on second parameter, like setTimeout(), must have initial value; in this case, 0, because what values that will be reduced into are integers
console.log(dailyTotal); // 810


// SECTION: reduce pt2


// only made var so no conflict with cart array found below in section "reduce pt3"
var cart = [
    {brand: "Samsung Galaxy S7", price: 599.99, amount: 1},
    {brand: "Google Pixel", price: 499.99, amount: 2},
    {brand: "Xiaomi Redmi Note 3", price: 699.99, amount: 4},
    {brand: "Xiaomi Redmi Note 5", price: 399.99, amount: 3},
];
// reducing values of key "brand" and then returning a concatenation of strings with initial value of Samsung A50 in second parameter
let totalItem = cart.reduce((total, cartItem)=>{
    total += ", " + cartItem.brand;
    return total;
}, "Samsung A50");
console.log(totalItem); // Samsung A50, Samsung Galaxy S7, Google... so on and forth


// SECTION: reduce pt3


// only made var so no conflict with cart array found above, section "reduce pt2"
var cart = [
    {brand: "Samsung Galaxy S7", price: 599.99, amount: 1},
    {brand: "Google Pixel", price: 499.99, amount: 2},
    {brand: "Xiaomi Redmi Note 3", price: 699.99, amount: 4},
    {brand: "Xiaomi Redmi Note 5", price: 399.99, amount: 3},
];

// if reducing key values from objects within an array into mere individually iterated values but wanting to return it as an object with given key names and initial value appropriate to values that will be returned:
let payCart = cart.reduce((total, cartInfo)=>{
    // NOTE: parameters contained in .reduce() are as follows: first accesses cart only as an alternative name and second is required as a "destructuring declaration"

    // below accesses the keys as indicated inside curly braces from cart in every iteration
    // for explanation, please refer to section "dumb reduce pt4"
    const {amount, price} = cartInfo;

    // count amount of items and add it to cartQuantity in every iteration
    total.cartQuantity += amount;
    // because values are obtained only within the object in every iteration, the amount will always be multiplied to price within that respective object (e.g. Samsung Galaxy S7's price multiplied by amount only)
    total.cartTotal += amount * price;
    return total;
}, {
    cartQuantity: 0,
    cartTotal: 0
});
console.log(payCart); // {cartQuantity: 10, cartTotal: 5599.900000000001}
// to fix that "funky, jibberish" number:
// toFixed() however returns a string, so must be parsed
payCart.cartTotal = parseFloat(payCart.cartTotal.toFixed(2));
console.log(payCart.cartTotal); // 5599.9


// SECTION: reduce pt4
// NOTE: an explanation for all this will be found at section "dumb reduce pt4"


// below is an async function that fetches my repositories from var:url as of 2021/11/06
const url = "https://api.github.com/users/aerdon085/repos?per_page=100";
const fetchRepos = async () => {
    const response = await fetch(url); // fetches repo from var:url
    const data = await response.json(); // returns array of objects to var:data

    const newData = data.reduce((total, repo)=>{
        const {language} = repo;

        // to avoid inclusion of null in object, return only when language only has value
        if (language) total[language] = total[language] + 1 || 1;
        // above if statement has been written intially, alternatively, and raw-ly below:
        /*
        if (language) {
            // if total object (the data object used in data.reduce() alternatively now as total parameter) in the array has 
            if (total[language]) total[language] += 1;
            else total[language] = 1;
        } */
        return total;
    }, {})
    console.log(newData); // {C: 1, JavaScript: 1}
}
fetchRepos();


// SECTION: dumb reduce pt 4
// simplified and modified version of section "reduce pt4"
// a more simplified version for easier understanding


// for example, the data returned is as follows from an imaginary url like the one above:
const hiddenRepos = [
    {name: "Rimda", author: "aerdon085", extension: "html"},
    {name: "cProjects", author: "aerdon085", extension: "c"},
    {name: "coiloverPage", author: "aerdon085", extension: "html"},
    {name: "eulaPage", author: "aerdon085", extension: "html"},
    {name: "PYrojects", author: "aerdon085", extension: "py"},
    {name: "Big-epic-VN", author: "aerdon085", extension: "py"}
]
const fetchedRepo = hiddenRepos.reduce((total, repo)=>{
    const {extension} = repo;
    // first iteration: {extension} === hiddenRepos[0].extension === "html"
    // second iteration: {extension} === hiddenRepos[1].extension === "c"
    // and so on...

    console.log(extension); // html, c, html, html, ...

    // if extension has value, which obviously it does (e.g. hiddenRepos.extension === "html"), then execute:
    if (extension) {
        // total[extension] === a dynamic object property
        // in every iteration, it refers to key "extension" and looks at its value
        // if throughout the iteration the value of a key in the object has been encountered more than once (e.g. that of {extention: "html"}), then keep adding 1; otherwise just 1
        if (total[extension]) total[extension] += 1;
        else total[extension] = 1;
    }

    // if still confused for why total[extension]:
    // in every iteration total[extension] might be equal to total.html or total.c
    // observe, in every iteration:
    console.log(total); // {html: 1}, {html: 1, c: 1};
    // because extension is equal to "html", or "c", or "py" in some parts of the iteration (refer to instantiated console.log(extension) before if(extension){} statement)...
    // as such, then, total[extension] === total["html"] in some part of the iteration
    // and making total["html"] equal to 1 will be {html: 1} as instantiated just recently above

    return total;
}, {});
console.log(fetchedRepo); // {html: 3, c: 1, py: 2}


// SECTION: variable assignment in destructuring
// faster/easier way to access/unpack variables from arrays


// initially, to assign an array element to a variable for whatever purpose
const fruits = ["orange", "banana", "lemon"];
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

// but in destructuring:
const friends = ["John", "Peter", "Bob", "Anna", "Kelly"];
// destructuring logic/structure/method:
// let [variable_name] = array_name;
const [enemy, peter] = friends;
console.log(enemy, peter); // "John", "Peter"

// it can be inferred that destructuring operates by order, that's why in definition there was no need to use subscripts (i.e. [0])
// thus in order to refer to elements of the array in the middle, as destructuring is by order, leave empty to skip an array element then comma:
const [friend, , bob, , kelly] = friends;
console.log(friend, bob, kelly); // "John" "Bob" "Kelly"


// SECTION: destrcuturing array


let friends0 = ["John", "Peter", "Bob", "Anna", "Kelly"];

console.log(friends0[0], friends0[1]); // "Bob" "John"
// in basic variable swapping, it is done an extra variable (named temp) that holds value temporarily so that not one of the two will be overwritten during swap
let tempVal = friends0[0];
friends0[0] = friends0[1];
friends0[1] = tempVal;
console.log(friends0[0], friends0[1]); // "John" "Bob"

// by destructuring, we swap them then and there without the need for a variable that holds data temporarily
// declare var:bob for friends0[2] and var:anna for friends0[3]
let [ , , index2, index3] = friends0;
console.log(index2, index3); // "Bob" "Anna"
// swap
[index2, index3] = [index3, index2];
console.log(index2, index3); // "Anna" "Bob"


// SECTION: destructuring variables
// concept of destructuring instantiated simpler by not using array variables


let waifu0 = "Ayaka";
let waifu1 = "Ganyu";
console.log(waifu0, waifu1); // Ayaka Ganyu
// swap them by destructuring
// (because, tho I love them both and the rest unmentioned, another demands from me a hierarchy)
[waifu0, waifu1] = [waifu1, waifu0];
console.log(waifu0, waifu1); // Ganyu Ayaka


// SECTION: destructuring objects


let aerdon = {
    first: "Adrian Luis",
    middle: "Lorenzo",
    last: "Luzon",
    address: {
        street: "Via Corte Del Roda",
        subdivision: "Citta Italia",
        city: "Bacoor City"
    }
}
// assignment of variables and its access on objects by destructuring is different from destructuring arrays
// the order does not matter, and so in order to access it, the right object key name must be used
let myFirstName = aerdon.first; // regular variable assignment
let {first} = aerdon; // destructuring object variable assignment
if (myFirstName === first) console.log("Adrian Luis"); // "Adrian Luis"
// if a different variable name is desired, an alias, then:
let {last, middle:middleName} = aerdon; // as instantiated here, order is not observed
console.log(middleName, last); // "Lorenzo Luzon"

// in order to access objects within objects
let {address:{city:myCity}} = aerdon;
console.log(myCity); // "Bacoor City"
// because var:city has already been given an alternate name, var:myCity, it can be used as a variable
let city = aerdon.address.city; // or aerdon["address"]["city"]
if (myCity === city) console.log("Bacoor City"); // "Bacoor City"


// SECTION: destructuring objects in functions


const adrian = {
    hobbies: {
        hOne: "Drawing",
        hTwo: "Programming",
        hThree: "Japanese"
    }
}
// how it is initially and basically done
function printHobby1(person) {
    console.log(person.hobbies.hOne);
}
printHobby1(adrian); // "Drawing"

// using destructuring inside functions
function printHobby2(person) {
    const {hobbies:{hTwo:progHobby}} = person;
    console.log(progHobby);
}
printHobby2(adrian); // "Programming"
// using destructuring as parameter
function printHobby3({hobbies:{hThree:japHobby}}) {
    console.log(japHobby);
}
printHobby3(adrian); // "Japanese"


// SECTION: rest operator (...)
// gathers and collects items
// as opposed to the spread operator which spreads and copies the items, the rest operator gathers them back into an array
// placement is important where it must only be used at the end of a parameter
// used in function declaration


const fruits10 = ["Apple", "Orange", "Lemon", "Banana", "Melon"];
// syntax of the rest operator is [(operator)(variable_name)]
const [notApple, , notLemon, ...remainingStuff] = fruits10;
console.log(notApple, remainingStuff); // Apple ['Banana', 'Melon]
// as can be seen, the ... operator only takes hold of values that are to the right of the last declared variable on index position n and if unassigned as variables, unless they are skipped like index position 1 ("Orange")

// var:remainingStuff is now a new array, which is an array of the "rest" of the undeclared and unskipped elements as variables
let specificFruit = remainingStuff.find((fruit)=>fruit === "Melon");
console.log(specificFruit); // "Melon"


// SECTION: rest operator on objects


const person10 = {name: "Adrian Luzon", age: 19, waifu: {first: "Ganyu", second: "Ayaka"}}
const {age, ...waifu} = person10;
console.log(age, waifu); // 19 {name: 'Adrian Luzon', waifu: {…}}
// because order does not matter, object values skipped over will still be included by the rest operator unlike in arrays


// SECTION: rest operator in functions


const person20 = {
    student: "Adrian Luzon",
    grades: {
        math: 85,
        science: 90,
        english: 90,
        filipino: 75
    }
}
let {grades:{math}, grades:{science}, grades:{english}, grades:{filipino}} = person20;
// function for computing for average
// the second parameter seeks for the REST of the given argument during invocation
let getAveGrade = (student, ...aveGrade)=>{
    console.log(student); // "Adrian Luzon"
    console.log(aveGrade); // [85, 90, 90, 75]

    // .reduce iterates through the passed array argument of var:aveGrade and returns a total sum
    let total = aveGrade.reduce((aveGrade, total)=>{
        return total += aveGrade;
    })
    console.log(total/aveGrade.length); // 85
}
// for some reason, based on the parameter during function declaration of getAveGrade, ...aveGrade treats the REST of the input except person20.student which corresponds to func:getAveGrade's student parameter the same way a rest operator treats an array whose elements are unassigned or unskipped
getAveGrade(person20.student, math, science, english, filipino);


// SECTION: spread operator (...)
// same syntax as the rest operator except it is used in function invocation


// rest operator (...) is used in parameters, during function declarations
function aveTestScores(student_name, ...test_scores) {
    console.log(student_name);
    console.log(test_scores); // [11, 22, 33, 44, 55]
}
// the rest operator, used in parameter, treats the rest of the function arguments as the REST of an array element, therefore putting them in new array with a new array name "test_scores"
aveTestScores("Adrian Luzon", 11, 22, 33, 44, 55); // Adrian Luzon, [11, 22, 33, 44, 55]

// if in the function argument, it already is an array, however:
const testScores = [10, 20, 30, 40, 50];
aveTestScores("Adrian Luzon", testScores); // Adrian Luzon, [[11, 22, 33, 44, 55]]

// this is where the spread operator comes in (...) and is used in the function invocation, as an argument
aveTestScores("Adrian Luzon", ...testScores); // Adrian Luzon, [10, 20, 30, 40, 50]
