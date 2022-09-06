let digit0= document.querySelector('#digit0');
let digit1= document.querySelector('#digit1');
let digit2= document.querySelector('#digit2');
let digit3= document.querySelector('#digit3');
let digit4= document.querySelector('#digit4');
let digit5= document.querySelector('#digit5');
let digit6 = document.querySelector('#digit6');
let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');
// Operatiile
let multiply = document.querySelector('#multiply');
let add = document.querySelector('#add');
let minus = document.querySelector('#minus');
let equals = document.querySelector('#equals');
let result = document.querySelector('.result');
let del = document.querySelector('#delete');
let clear = document.querySelector('#clear');

// Initializam variabilele globale
// Cele doua numere implicate in operatie
let firstNumber = 0;
let secondNumber = 0;
// O variabila care sa ne indice ce numar construim
let startBuildingSecondNumber = false;
// Tipul operatiei pe care o aplicam
let operation = '';

// Functie care construieste numerele
function buildNumber(numberReceived) {
  if (startBuildingSecondNumber === false) {
    // Construim primul numar.
    firstNumber = firstNumber * 10 + numberReceived;
    // Afisam numarul in zona rezultatului.
    result.innerHTML = firstNumber;
  } else {
    // Construim cel de-al doilea numar.
    secondNumber = secondNumber * 10 + numberReceived;
    result.innerHTML = secondNumber;
  }
}

// Functie care se ocupa de click-ul pe multiply
function handleMultiplyClick() {
  // Cand dam click pe *, incepe constructia celui de-al doilea numar si se seteaza operatia care urmeaza sa fie executata.
  startBuildingSecondNumber = true;
  operation = 'multiply';
  // Afisam operatia in zona rezultatului.
  result.innerHTML = '*';
}
// Functie care se ocupa de click-ul pe add
function handleAddClick(){
  startBuildingSecondNumber = true;
  operation ='add';
  result.innerHTML = '+';
}
// Functie care se ocupa de click-ul pe minus
function handleMinusClick(){
  startBuildingSecondNumber = true;
  operation ='minus';
  result.innerHTML = '-';
}
// Functie care se ocupa de click-ul pe delete button
function handleDeleteClick(){
  let number = Number(result.innerHTML);
  number = parseInt(number/10);
  result.innerHTML=number;
  if(startBuildingSecondNumber==false)
    firstNumber=number;
  else
    secondNumber=number;
}
// Functie care se ocupa de click-ul pe clear button
function handleClearClick(){
  result.innerHTML='';
  startBuildingSecondNumber=false;
  firstNumber=0;
  secondNumber=0;
}

// Functie care se ocupa de opasarea butonului de =
function handleEqualsClick() {
  // Cand dam click pe '=', in functie de operatie, se face calculul intre cele doua numere si se adauaga la rezultat.
  if (operation === 'multiply') {
    let operationResult = firstNumber * secondNumber;
    result.innerHTML = operationResult;
  }
  else if (operation === 'add'){
    let operationResult = firstNumber + secondNumber;
    result.innerHTML = operationResult;
  }
  else if (operation ==='minus'){
    let operationResult = firstNumber - secondNumber;
    result.innerHTML = operationResult;
  };

  // Reinitializam valorile initiale pentru a face cacule multiple.
  firstNumber = '';
  secondNumber = '';
  startBuildingSecondNumber = false;
  operation = '';
}

// Cand dam click pe o cifra, construim un numar, deci apelam functia buildNumber, careia ii trimitem ca aparametru cifra pe care s-a dat click.
digit0.addEventListener('click', function() {
  buildNumber(0);
});
digit1.addEventListener('click', function() {
  buildNumber(1);
});
digit2.addEventListener('click', function() {
  buildNumber(2);
});
digit3.addEventListener('click', function() {
  buildNumber(3);
});
digit4.addEventListener('click', function() {
  buildNumber(4);
});
digit5.addEventListener('click', function() {
  buildNumber(5);
});
digit6.addEventListener('click', function() {
  buildNumber(6);
});
digit7.addEventListener('click', function() {
  buildNumber(7);
});
digit8.addEventListener('click', function () {
  buildNumber(8);
});
digit9.addEventListener('click', function () {
  buildNumber(9);
});

multiply.addEventListener('click', handleMultiplyClick);
add.addEventListener('click', handleAddClick);
equals.addEventListener('click', handleEqualsClick);
minus.addEventListener('click', handleMinusClick);
del.addEventListener('click', handleDeleteClick);
clear.addEventListener('click',handleClearClick);
