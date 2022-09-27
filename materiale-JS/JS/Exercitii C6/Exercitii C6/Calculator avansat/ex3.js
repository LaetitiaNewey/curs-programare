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

let resultDisplay= document.querySelector('.result');
let additionButton=document.querySelector('#add');
let subtractButton=document.querySelector('#subtract');
let multiplyButton=document.querySelector('#multiply');
let equalButton=document.querySelector('#equal');
let deleteButton=document.querySelector('#del');
let clearButton=document.querySelector('#clear');


let number1 = 0;
let number2=0;
let operationPressed = false;


function createNumber (number, digit) {
  number = number *10+digit; 
  resultDisplay.innerHTML = number;
  return number;
}

digit0.addEventListener('click', function (){
  if(operationPressed==false)
  number1=createNumber(number1, 0);
    else
  number2=createNumber(number2, 0);
});

digit1.addEventListener('click', function (){
  if(operationPressed==false)
  number1=createNumber(number1, 1);
    else
  number2=createNumber(number2, 1);
}); //fct nu are param dar facem un artificiu cu o funct in alta funct. 

digit2.addEventListener('click', function (){ 
  if(operationPressed==false)
  number1=createNumber(number1, 2);
     else
  number2=createNumber(number2, 2);                                       
});

digit3.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 3);
else
  number2=createNumber(number2, 3);  
});

digit4.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 4);
else
  number2=createNumber(number2, 4);  
});

digit5.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 5);
else
  number2=createNumber(number2, 5);  
});

digit6.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 6);
else
  number2=createNumber(number2, 6);  
});

digit7.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 7);
else
  number2=createNumber(number2, 7);  
});

digit8.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 8);
else
  number2=createNumber(number2, 8);  
});

digit9.addEventListener('click', function (){
  if(operationPressed==false)
    number1=createNumber(number1, 9);
else
  number2=createNumber(number2, 9);  
});


function add(){
  let sum= number1+number2;
  resultDisplay.innerHTML=sum;
}

function multiply() {
  let multiplication = number1*number2;
  resultDisplay.innerHTML=multiplication;
}

function subtract(){
  let difference= number1-number2;
  resultDisplay.innerHTML=difference;
}


function del() {
  let number = resultDisplay.innerHTML;
  number = parseInt (number/10);
  resultDisplay.innerHTML=number;
  if (operationPressed == false)
    number1=number;
  else 
    number2=number;
}

function clear() {
  resultDisplay.innerHTML='';
  operationPressed=false;
  number1=0;
  number2=0;
}

additionButton.addEventListener('click', function () {
  resultDisplay.innerHTML='';
  operationPressed='+'; 
}); //initial era operationPressed=true, dar cu semnul plus e acelasi lucru, tot dif de false este

multiplyButton.addEventListener('click', function () {
  resultDisplay.innerHTML='';
  operationPressed='*'; 
});
subtractButton.addEventListener('click', function () {
  resultDisplay.innerHTML='';
  operationPressed='-'; 
});

equalButton.addEventListener('click', function() {
  
      if (operationPressed == '+') {
          add(); 
        }
        else if (operationPressed == '*') { 
          multiply();
        } 
        else if (operationPressed == '-') {
          subtract();
        }
         number1 = 0;
         number2= 0;
         operationPressed = false;
    });

deleteButton.addEventListener('click', del);
clearButton.addEventListener('click', clear);

