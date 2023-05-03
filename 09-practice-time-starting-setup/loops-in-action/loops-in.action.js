// First Example: Sum number

const calcSumBtn = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    document.getElementById('calculated-sum').style.display = 'block';
}

calcSumBtn.addEventListener('click', calculateSum);

// Highlight-links

const HighlightLinksButtonElement = document.querySelector('#highlight-links button');

function HighlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

HighlightLinksButtonElement.addEventListener('click', HighlightLinks);

// Display user data

const dummyUserData = {
    firstName: 'Jiho',
    lastName: 'Song',
    age: 32
};

const userDataButton = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = '';
    for(const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key]; 
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

userDataButton.addEventListener('click', displayUserData);

// Statistics / Roll the Dice

const rollDiceBuntton = document.querySelector('#sraristics button');

function rollDice() {
    return Math.floor(Math.random()*6)+1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if(rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber == true;
        // }
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollListElement.append(newRollListElement);
        hasRolledTargetNumber =  rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

     outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceBuntton.addEventListener('click', deriveNumberOfDiceRolls);
