// selectors - digits
let digit1 = document.querySelector('#digit1');
let digit2 = document.querySelector('#digit2');
let digit3 = document.querySelector('#digit3');
let digit4 = document.querySelector('#digit4');
let digit5 = document.querySelector('#digit5');
let digit6 = document.querySelector('#digit6');
let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');
let digit0 = document.querySelector('#digit0');

// selectors - operations
let additionButton = document.querySelector('#add');
let substractionButton = document.querySelector('#substract');
let equalButton = document.querySelector('#equal');
let multiplicationButton = document.querySelector('#multiply');
let deleteButton = document.querySelector('#delete');
let clearButton = document.querySelector('#clear');
let resultDisplay = document.querySelector('.result');

// initialization
resultDisplay.innerHTML = ' ';
let number1 = 0;
let number2 = 0;
let operator = '';
let operatorPressed = false;

/* F U N C T I O N S */

/* functions - create Input For Digit */

function createInputForDigit(initialInput, digit) {
  //--//number = number*10+digit;
  let createdInput = '' + initialInput + digit;
  console.log('::: createInputForDigit :::' +
    ' [' + initialInput + ' cre ' + digit + ']' +
    ' createdInput=' + createdInput);
  resultDisplay.innerHTML = createdInput;
  return createdInput;
}

/* functions - delete Last Digit From Input */

function deleteLastDigitFromInput() {
  let initialInput = resultDisplay.innerHTML.trim();
  let afterDeleteInput = ' ';
  //--//number = parseInt(number/10);
  let wholeNumber = initialInput;
  let lastDigit = wholeNumber.slice(-1);
  if (initialInput.length == 1) {
    afterDeleteInput = ' ';
  } else {
    afterDeleteInput = wholeNumber.slice(0, -1);
  }
  resultDisplay.innerHTML = afterDeleteInput;
  console.log('::: deleteLastDigitFromInput :::' +
    ' [' + wholeNumber + ' del ' + lastDigit + ']' +
    ' afterDeleteInput=' + afterDeleteInput //+
    //' [' + operatorPressed + ']'
  );
  if (operatorPressed == false) {
    number1 = afterDeleteInput;
  } else {
    number2 = afterDeleteInput;
  }
}

/* functions - clear All Input */

function clearAllInput() {
  resultDisplay.innerHTML = ' ';
  number1 = 0;
  number2 = 0;
  operatorPressed = false;
  operation = '';
  // console.log('clearInput ' + operatorPressed + ' ' + number1 + ' ' + number2);
}

/* functions - operations */

function add() {
  let sum = Number(number1) + Number(number2);
  // console.log('sum ' + sum);
  return sum;
}

function substract() {
  let subs = Number(number1) - Number(number2);
  //  console.log('subs ' + subs);
  return subs;
}

function multiply() {
  let multiple = Number(number1) * Number(number2);
  // console.log('multiply ' + multiple);
  return multiple;
}

/* L I S T E N E R S */

/* listeners - digits */
digit1.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  // console.log('digit1 ' + operatorPressed);
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 1);
    // console.log('EventListener ' + operatorPressed + ' ' + number1);
  } else {
    number2 = createInputForDigit(number, 1);
    // console.log('EventListener ' + operatorPressed + ' ' + number2);
  }
  // console.log('EventListener ' + operatorPressed + ' ' + number1 + ' ' + number2);
});

digit2.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 2);
  } else {
    number2 = createInputForDigit(number, 2);
  }
});

digit3.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 3);
  } else {
    number2 = createInputForDigit(number, 3);
  }
});

digit4.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 4);
  } else {
    number2 = createInputForDigit(number, 4);
  }
});

digit5.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 5);
  } else {
    number2 = createInputForDigit(number, 5);
  }
});

digit6.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 6);
  } else {
    number2 = createInputForDigit(number, 6);
  }
});

digit7.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 7);
  } else {
    number2 = createInputForDigit(number, 7);
  }
});

digit8.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 8);
  } else {
    number2 = createInputForDigit(number, 8);
  }
});

digit9.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 9);
  } else {
    number2 = createInputForDigit(number, 9);
  }
});

digit0.addEventListener('click', function () {
  let number = resultDisplay.innerHTML.trim();
  if (operatorPressed == false) {
    number1 = createInputForDigit(number, 0);
  } else {
    number2 = createInputForDigit(number, 0);
  }
});

/* listeners - operations */

additionButton.addEventListener('click', function () {
  resultDisplay.innerHTML = ' ';
  operator = '+';
  operatorPressed = true;
  console.log('additionButton ' + operator + ' [' + operatorPressed + ']');
});

substractionButton.addEventListener('click', function () {
  resultDisplay.innerHTML = ' ';
  operator = '-';
  operatorPressed = true;
  // console.log('substractionButton ' + substractionButton);
});

multiplicationButton.addEventListener('click', function () {
  resultDisplay.innerHTML = ' ';
  operator = '*';
  operatorPressed = true;
  // console.log('multiplicationButton ' + multiplicationButton);
});

/* listeners - equal */

equalButton.addEventListener('click', function () {
  //console.log('equalButton ' + operator);
  if (operator == '+') {
    resultDisplay.innerHTML = add();
    number1 = resultDisplay.innerHTML;
    number2 = 0;
    console.log('equalButton ' + number1 + ' ' + number2);
  }
  else if (operator == '-') {
    let substracted = substract();
    resultDisplay.innerHTML = substracted;
    number1 = substracted;
    number2 = 0;
  }
  else if (operator == '*') {
    let multiplied = multiply();
    resultDisplay.innerHTML = multiplied;
    number1 = multiplied;
    number2 = 0;
  }
});

deleteButton.addEventListener('click', deleteLastDigitFromInput);

clearButton.addEventListener('click', clearAllInput);