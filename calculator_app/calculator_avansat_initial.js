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
  number = number*10+digit;
  resultDisplay.innerHTML=number;
  return number;
}

function add(){
  let sum = Number(number1)+Number(number2);
 return sum;
}

function substract(){
 let subs = Number(number1)-Number(number2);
  return subs;
}

function multiply(){
  let multiple = Number(number1)*Number(number2);
  return multiple;
}

function del(){
  let number = resultDisplay.innerHTML;
  number = parseInt(number/10);
  resultDisplay.innerHTML=number;
  if(operationPressed==false)
    number1=number;
  else
    number2=number;
}

function clear(){
  resultDisplay.innerHTML=' ';
  operationPressed=false;
    number1=0;
    number2=0;
}

digit0.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 0);
  else
  number2=createNumber(number2, 0);
});

digit1.addEventListener('click', function(){
  let number = resultDisplay.innerHTML;
  if(operationPressed==false)
     number1=createNumber(number1, 1);
  else
    number2=createNumber(number2, 1);
  });

digit2.addEventListener('click', function(){
  if(operationPressed==false)
     number1=createNumber(number1, 2);
  else
    number2=createNumber(number2, 2);
});
digit3.addEventListener('click', function(){
  if(operationPressed==false)
     number1=createNumber(number1, 3);
else
    number2=createNumber(number2, 3);
});

digit4.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 4);
else
 number2=createNumber(number2, 4);
});

digit5.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 5);
else
 number2=createNumber(number2, 5);
});

digit6.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 6);
else
 number2=createNumber(number2, 6);
});

digit7.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 7);
else
 number2=createNumber(number2, 7);
});

digit8.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 8);
else
 number2=createNumber(number2, 8);
});

digit9.addEventListener('click', function(){
  if(operationPressed==false)
  number1=createNumber(number1, 9);
else
 number2=createNumber(number2, 9);
});

additionButton.addEventListener('click', function(){
  resultDisplay.innerHTML=' ';
  operationPressed = '+';
});

substractionButton.addEventListener('click', function(){
  resultDisplay.innerHTML=' ';
  operationPressed = '-';
});

multiplicationButton.addEventListener('click', function(){
  resultDisplay.innerHTML=' ';
  operationPressed = '*';
});

equalButton.addEventListener('click', function(){
  if(operationPressed=='+')
    {
      resultDisplay.innerHTML = add();
    number1 = resultDisplay.innerHTML;
    number2 = 0;
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

deleteButton.addEventListener('click', del);
clearButton.addEventListener('click', clear);


