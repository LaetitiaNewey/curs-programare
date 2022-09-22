const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true){
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }

  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
      calculator.displayValue = "0."
      calculator.waitingForSecondOperand = false;
      return
    }

    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }

  function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }

    function calculate(firstOperand, secondOperand, operator) 
    {
      if (operator === '+') {
        return firstOperand + secondOperand;
      } else if (operator === '-') {
        return firstOperand - secondOperand;
      } else if (operator === '*') {
        return firstOperand * secondOperand;
      } else if (operator === '/') {
        return firstOperand / secondOperand;
      }
      return secondOperand;
    }

    function resetCalculator() {
      calculator.displayValue = '0';
      calculator.firstOperand = null;
      calculator.waitingForSecondOperand = false;
      calculator.operator = null;
      console.log(calculator);
    }

    function deleteLastDigit() {
      const display = document.querySelector('.calculator-screen');
      display.value = calculator.displayValue;
      console.log('::: ' + display.value + ' ' + display.value.length + ' ' + display.value.slice(-1));
      if (display.value.length == 1) {
        calculator.displayValue  = '0';
      } else {
        calculator.displayValue = display.value.slice(0, -1);
      }
      return;
    }
  
  function updateDisplay() {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('.calculator-screen');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
  }
  
  updateDisplay();

  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
  // Access the clicked element
     const { target } = event;
     const { value } = target;
  // Check if the clicked element is a button.
  // If not, exit from the function
    if (!target.matches('button')) {
      console.log(event);
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('delete-digit')) {
    deleteLastDigit();
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
