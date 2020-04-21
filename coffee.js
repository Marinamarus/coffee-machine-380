"use strict";
let state = "waiting";

let cupImg =document.querySelector(".coffee-cup img");
let progressBar = document.querySelector(".progress-bar");

cupImg.onclick = takeCoffee;
//this

// <div class 

/*console.log(this);
let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function() {
 buyCoffee('Американо', 50, this)"
}
*/
function buyCoffee(name,price,element) {
  if (state != "waiting") {
   return;  
  }
    let balanceInput=document.querySelector("input[placeholder='Баланс']");
    if (+balanceInput.value < price) {  //и 
    changeDisplayText ("Недостаточно средств"); 
    balanceInput.style.border =" 2px solid red";
  } else { //если
    balanceInput.value -= price;
    balanceInput.style.border = "";
    state ="cooking";
    cookCoffee(name, element);
  }
}
function cookCoffee(name, buttonElement) {
  changeDisplayText ("Ваш" + name +   "готовится"); 
  
  let buttonImg = buttonElement.querySelector("img");
  let cupSrc = buttonImg.getAttribute('src');
  
 
  cupImg.setAttribute('src', cupSrc);
  cupImg.classList.remove('d-none');
  
  let i = 0;
  let interval =setInterval(function() {
    i++;
    progressBar.style.width = i +"%"; //width-10%
    cupImg.style.opacity = i + "%";
    if (i == 110) {
      clearInterval(interval)
    changeDisplayText ("Ваш кофе готов");  
    cupImg.style.cursor = "pointer"
    state ="ready"
    }
  }, 100)
}

function takeCoffee() {
  if  (state !="ready") {
    return;
  }
  state = "waiting";
  cupImg.style.opacity = 0;
  cupImg.style.cursor = "";
  cupImg.classList.add("d-none");
  changeDisplayText ("Выберите кофе");
  progressBar.style.width = 0;
}

function changeDisplayText(text) {
  let displayText = document.querySelector(".display-text");
  displayText.innerHTML =text;
}





