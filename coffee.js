"use strict";
//this

// <div class 

/*console.log(this);
let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function() {
 buyCoffee('Американо', 50, this)"
}
*/
function buyCoffee(name,price,element) {
    
  let balanceInput=document.querySelector("input[placeholder='Баланс']");
  
  if (+balanceInput.value < price) {  //и 
    changeDisplayText ("Недостаточно средств"); 
    balanceInput.style.border =" 2px solid red";
  } else { //если
    balanceInput.value -= price;
    balanceInput.style.border = "";
    cookCoffee(name, element);
  }
}

function cookCoffee(name, buttonElement) {
  changeDisplayText ("Ваш" + name +   "готовится"); 
  let progressBar = document.querySelector(".progress-bar");
  console.log(progressBar);
}

function changeDisplayText(text) {
  let displayText = document.querySelector(".display-text");
  displayText.innerHTML =text;
}





