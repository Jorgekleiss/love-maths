//waits for the DOM to finish loading before running the game
//get the button elements and adds event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer had been processed
 */
function runGame(gameType) {

    // creates a randon numbers betwen 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if
    (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if 
    (gameType === "subtract") {
        displaySubtractionQuestion(num1, num2);
    } else if 
    (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if 
    (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unkown Game Type: ${gameType}`);
        throw `Unkown Game Type: ${gameType}. Aborting!`;

    }
}
/** this will check the users answer agains the correct andswer and
 * go fromthere. 
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert('Well Done, you got that Right!')
        incrementScore();
    } else {
        alert(`Oh No, thats not quiet right, the correct andwer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}


/**Gets the Operands (Numbers) and the Operator(+ - * /)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if 
        (operator === "+"){
        return [operand1 + operand2, "addition"]
    } else if 
        (operator === "-"){
        return [operand1 - operand2, "subtract"]
    } else if 
        (operator === "*"){
        return [operand1 * operand2, "multiply"]
    } else if 
        (operator === "/"){
        return [operand1 / operand2, "division"]
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting`
    }
}

/** this fuction adds the score when answers are correct.  */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore
}

/** this fuction adds the score when answers are incorrect.  */
function incrementWrongAnswer() {
    let oldIncorrectScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldIncorrectScore
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "*";
}

function displayDivisionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}