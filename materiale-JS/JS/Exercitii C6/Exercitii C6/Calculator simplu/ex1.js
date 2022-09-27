let number1=document.querySelector('#firstNumber');
//console.log(number1.value);
let number2=document.querySelector('#secondNumber');
let result= document.querySelector('.result');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');

function add(){
  let number3= Number(number1.value) + Number(number2.value);
  result.innerHTML = number3;
  // return number3;  NUU PUNEM RETURN NR3 pt ca nu ne ajuta deloc rezultatul aici, noi trebuie sa il afisam undeva, in HTML-> de aceea comanda de mai sus cu innerHTML
  }
  addButton.addEventListener('click', add);

function subtract(){  
  let number4= Number(number1.value) - Number(number2.value);
  result.innerHTML = number4;
  }


subtractButton.addEventListener('click', subtract);
