let digit0=document.querySelector('#digit0');
let digit1=document.querySelector('#digit1');
let digit2=document.querySelector('#digit2');
let digit3=document.querySelector('#digit3');
let digit4=document.querySelector('#digit4');
let digit5=document.querySelector('#digit5');
let digit6=document.querySelector('#digit6');
let digit7=document.querySelector('#digit7');
let digit8=document.querySelector('#digit8');
let digit9=document.querySelector('#digit9');


let additionButton=document.querySelector('#add');
let substractionButton=document.querySelector('#substract');
let equalButton=document.querySelector('#equal');
let multiplicationButton=document.querySelector('#multiply');
let deleteButton = document.querySelector('#delete');
let clearButton = document.querySelector('#clear');
let resultDisplay = document.querySelector('.result');

let number1 = 0;
let number2 = 0;
let operationPressed = false;

function createNumber(number, digit){
  // console.log('createNumber ' + number + ' ' + digit);
  //--//number = number*10+digit;
  number = number*10+digit;
  console.log('createNumber number=' + number + ' adaugat=' + digit);
  resultDisplay.innerHTML=number;
  return number;
}

function deleteNumber(){
  let number = resultDisplay.innerHTML;
  // console.log('del ' + number);
  //--//number = parseInt(number/10);
  let lastNumber = number.slice(-1);
  number = number.slice(0, -1);
  // console.log('del ' + number);
  resultDisplay.innerHTML=number;
  console.log('deleteNumber ' + operationPressed + ' number=' + number + ' sters=' + lastNumber);
  if(operationPressed==false)
    number2=number;
  else
    number1=number;
}

function clearNumber(){
  resultDisplay.innerHTML=' ';
  operationPressed=false;
    number1=0;
    number2=0;
    // console.log('clearNumber ' + operationPressed + ' ' + number1 + ' ' + number2);
}

function add(){
  let sum = Number(number1)+Number(number2);
  // console.log('sum ' + sum);
 return sum;
}

function substract(){
 let subs = Number(number1)-Number(number2);
//  console.log('subs ' + subs);
  return subs;
}

function multiply(){
  let multiple = Number(number1)*Number(number2);
  // console.log('multiply ' + multiple);
  return multiple;
}

digit0.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 0);
  else
  number2=createNumber(number, 0);
});

digit1.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  // console.log('digit1 ' + operationPressed);
  if(operationPressed==false)
     number1=createNumber(number, 1);
  else
    number2=createNumber(number, 1);
  console.log('EventListener ' + operationPressed + ' ' + number1 + ' ' + number2);
  });

digit2.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
     number1=createNumber(number, 2);
else
    number2=createNumber(number, 2);
});
digit3.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
     number1=createNumber(number, 3);
else
    number2=createNumber(number, 3);
});

digit4.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 4);
else
 number2=createNumber(number, 4);
});

digit5.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 5);
else
 number2=createNumber(number, 5);
});

digit6.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 6);
else
 number2=createNumber(number, 6);
});

digit7.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 7);
else
 number2=createNumber(number, 7);
});

digit8.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 8);
else
 number2=createNumber(number, 8);
});

digit9.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
  number1=createNumber(number, 9);
else
 number2=createNumber(number, 9);
});

additionButton.addEventListener('click', function(){
  resultDisplay.innerHTML=' ';
  operationPressed = '+';
  console.log('additionButton ' + operationPressed);
});

substractionButton.addEventListener('click', function(){
  resultDisplay.innerHTML=' ';
  operationPressed = '-';
  // console.log('substractionButton ' + substractionButton);
});

multiplicationButton.addEventListener('click', function(){
  resultDisplay.innerHTML=' ';
  operationPressed = '*';
  // console.log('multiplicationButton ' + multiplicationButton);
});

equalButton.addEventListener('click', function(){
  console.log('equalButton ' + operationPressed);
  if(operationPressed=='+')
    {
      console.log('equalButton ' + add());
      resultDisplay.innerHTML = add();
    number1 = resultDisplay.innerHTML;
    number2 = 0;
    console.log('equalButton ' + number1 + ' ' + number2);
    }
   else if (operationPressed == '-')
    {
    resultDisplay.innerHTML= substract();
    number1 = resultDisplay.innerHTML;
    number2 = 0;
    }
    else if (operationPressed == '*')
    {
      resultDisplay.innerHTML= multiply();
      number1 = resultDisplay.innerHTML;
      number2 = 0;
    }
});


deleteButton.addEventListener('click', deleteNumber);
clearButton.addEventListener('click', clearNumber);


