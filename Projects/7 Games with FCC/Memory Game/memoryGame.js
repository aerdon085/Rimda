document.addEventListener("DOMContentLoaded", function() {
    // cards array
    const cardArray = [
    {
        name: "redApple",
        img: "./redA.png"
    },
    {
        name: "redApple",
        img: "./redA.png"
    },
    {
        name: "greenApple",
        img: "./greenA.png"
    },
    {
        name: "greenApple",
        img: "./greenA.png"
    },
    {
        name: "purpleGrapes",
        img: "./grapes.png"
    },
    {
        name: "purpleGrapes",
        img: "./grapes.png"
    },
    {
        name: "greenGrapes",
        img: "./greenGrapes.png"
    },
    {
        name: "greenGrapes",
        img: "./greenGrapes.png"
    },
    {
        name: "peanutButter",
        img: "./lightPB.png"
    },
    {
        name: "peanutButter",
        img: "./lightPB.png"
    },
    {
        name: "peanutButterAndJelly",
        img: "lightPBJ.png"
    },
    {
        name: "peanutButterAndJelly",
        img: "lightPBJ.png"
    }
    ]

    // var:cardArray randomizer
    cardArray.sort(() => 0.5 - Math.random());

    // board
    const gridEl = document.querySelector("#grid-el");
    const resultDisplay = document.querySelector("#result-el");
    // below stores cards chosen
    let cardsChosen = [];
    let cardsChosenId = [];
    // below stores cards matched
    let cardsWon = [];

    // GAME FUNCTION: render board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            // create new element
            let card = document.createElement("img");

            // set attributes of element
            card.setAttribute("src", "./cover.png");
            card.setAttribute("style", "height: 100px; width: 100px");
            card.setAttribute("id", i);

            // add onclick listener to element
            card.addEventListener("click", flipCard);

            // append new element to gridEl as child
            gridEl.appendChild(card);
        }
    }

    // GAME FUNCTION: flip card
    function flipCard() {
        // gets attribute id of what photo was clicked
        let cardId = this.getAttribute("id"); // e.g. cardId = 0

        // push clicked photo's name to array of chosen cards (up to 2 only)
        cardsChosen.push(cardArray[cardId].name); // e.g. cardArray[0].name
        cardsChosenId.push(cardId); // e.g. cardsChosenId = [0]

        // set THIS chosen card's photo to its respective stored photo as object
        this.setAttribute("src", cardArray[cardId].img); // e.g. cardArray[0].img

        // if cardsChosen array reaches 2, check for match with delay of 100ms
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 100);
        }
    }

    // GAME FUNCTION: check for match
    function checkForMatch() {
        // put all selected elements into an array
        let cards = document.querySelectorAll("img");

        // assign array items from cardsChosenId to:
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        // conditional that sees if the name of cards pushed to cardsChosen array is the same
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You have found a match");
            // set default display (when not flipped) to done.png which signifies that these cards have been matched already
            cards[optionOneId].setAttribute("src", "./done.png");
            cards[optionTwoId].setAttribute("src", "./done.png");
            // push to cardsWon
            cardsWon.push(cardsChosen);
        } else {
            // set default display to intial display which signifies that the cards have not been matched correctly yet
            cards[optionOneId].setAttribute("src", "./cover.png");
            cards[optionTwoId].setAttribute("src", "./cover.png");
            alert("Sorry, try again");
        }

        // empty array that stores chosen cards for new attempt
        cardsChosen = [];
        cardsChosenId = [];

        // display cards won score if any
        resultDisplay.textContent = cardsWon.length;

        // check if all cards have been matched
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You have found them all!";
        }
    }

    createBoard();
})