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
let startNumberTwo = false;
let operation = '';

function createNumber(digit)
{
  if(startNumberTwo === false)
  {
    number1 = number1 * 10 + digit;
    resultDisplay.innerHTML = number1;
  }
  else
  {
    number2 = number2 * 10 + digit;
    resultDisplay.innerHTML = number2;
  }
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
  if(startNumberTwo==false)
    number1=number;
  else
    number2=number;
}

function clear(){
  resultDisplay.innerHTML='';
  startNumberTwo=false;
    number1=0;
    number2=0;
}

digit0.addEventListener('click', function(){
  createNumber(0);
});

digit1.addEventListener('click', function(){
  createNumber(1);
  });

digit2.addEventListener('click', function(){
  createNumber(2);
  });
digit3.addEventListener('click', function(){
  createNumber(3);
  });

digit4.addEventListener('click', function(){
  createNumber(4);
});

digit5.addEventListener('click', function(){
  createNumber(5);
});

digit6.addEventListener('click', function(){
  createNumber(6);
});

digit7.addEventListener('click', function(){
  createNumber(7);
});

digit8.addEventListener('click', function(){
  createNumber(8);
});

digit9.addEventListener('click', function(){
  createNumber(9);
});

additionButton.addEventListener('click', function(){
  resultDisplay.innerHTML='+';
  startNumberTwo = true;
  operation = '+';
});

substractionButton.addEventListener('click', function(){
  resultDisplay.innerHTML='-';
  startNumberTwo = true;
  operation = '-';
});

multiplicationButton.addEventListener('click', function(){
  resultDisplay.innerHTML='*';
  startNumberTwo = true;
  operation = '*';
});

equalButton.addEventListener('click', function()
{
  if(operation=='+')
    {
    resultDisplay.innerHTML = add();
    number1 = resultDisplay.innerHTML;
    }
  else if (operation == '-')
    {
    resultDisplay.innerHTML= substract();
    number1 = resultDisplay.innerHTML;
    }
  else if (operation == '*')
    {
      resultDisplay.innerHTML= multiply();
      number1 = resultDisplay.innerHTML;
    }
    startNumberTwo = false;
    operation = '';

});


deleteButton.addEventListener('click', del);
clearButton.addEventListener('click', clear);


