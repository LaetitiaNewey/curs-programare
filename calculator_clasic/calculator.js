const calculator = {
  displayValue: "0",
  firstNumber: null,
  startBuildingSecondNumber: false,
  operation: null,
};

function buildNumber(digit) {
  const { displayValue, startBuildingSecondNumber } = calculator;

  if (startBuildingSecondNumber === true) {
    calculator.displayValue = digit;
    calculator.startBuildingSecondNumber = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}

function handleDecimalClick(dot) {
  if (calculator.startBuildingSecondNumber === true) {
    calculator.displayValue = "0.";
    calculator.startBuildingSecondNumber = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstNumber, displayValue, operation } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operation && calculator.startBuildingSecondNumber) {
    calculator.operation = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstNumber == null && !isNaN(inputValue)) {
    calculator.firstNumber = inputValue;
  } else if (operation) {
    const result = calculate(firstNumber, inputValue, operation);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstNumber = result;
  }

  calculator.startBuildingSecondNumber = true;
  calculator.operation = nextOperator;
  console.log(calculator);
}

function calculate(firstNumber, secondNumber, operation) {
  if (operation === "+") {
    return firstNumber + secondNumber;
  } else if (operation === "-") {
    return firstNumber - secondNumber;
  } else if (operation === "*") {
    return firstNumber * secondNumber;
  } else if (operation === "/") {
    return firstNumber / secondNumber;
  }
  return secondNumber;
}

function handleClearClick() {
  calculator.displayValue = "0";
  calculator.firstNumber = null;
  calculator.startBuildingSecondNumber = false;
  calculator.operation = null;
  console.log(calculator);
}

function handleDeleteClick() {
  const { displayValue, startBuildingSecondNumber } = calculator;
  if (startBuildingSecondNumber === true) {
    return;
  } else {
    calculator.displayValue = calculator.displayValue.slice(0, -1);
  }
}

function handleUpdateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

handleUpdateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  const { value } = target;
  if (!target.matches("button")) {
    console.log(event);
    return;
  }

  if (target.classList.contains("operation")) {
    handleOperator(target.value);
    handleUpdateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    handleDecimalClick(target.value);
    handleUpdateDisplay();
    return;
  }

  if (target.classList.contains("delete-digit")) {
    handleDeleteClick();
    handleUpdateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    handleClearClick();
    handleUpdateDisplay();
    return;
  }

  buildNumber(target.value);
  handleUpdateDisplay();
});
