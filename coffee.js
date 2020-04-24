"use strict";
let state = "waiting";

let cupImg =document.querySelector(".coffee-cup img");
let progressBar = document.querySelector(".progress-bar");
let balanceInput=document.querySelector("input[placeholder='Баланс']");

cupImg.onclick = takeCoffee;
//this

// <div class 

/*сonsole.log(this);
let elem = document.querySelectorAll(".coffee-item");
elem[1].onclick = function() {
 buyCoffee('Американо', 50, this)"
}
*/
 function buyCoffee(name,price,element) {
  if (state != "waiting") {
   return;  
  }
   
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
                          //КУПЮРЫ 
  let bills = document.querySelectorAll(".bills img");
  for(let i =0; i<bills.length; i ++) {
   bills[i].onmousedown = takeMoney; //передается  в 83
   //bills[i].onmousedown = function (event){            ФУНКЦИЯ
   // takeMoney(event);        80-82 b 79-86 записи равнозначны
   // }ФУНКЦИЯ
 }
function takeMoney(event) {
  event.preventDefault();
  //console.log(this);
  let bill = event.target;
  
  bill.style.position ="absolute";
  bill.style.transform ="rotate(90deg)";
  bill.style.margin =0;
  
  let billCoords = bill.getBoundingClientRect();
 //console.log(billCoords);
  let billWidth = billCoords.width;
  let billHeight = billCoords.height;
  //console.log(event.clientX, event.clientY );
  /*bill.style.top = event.clientY -billHeight/2 + "px";
  bill.style.left = event.clientX -billWidth/2 + "px";*///изначально повернута купюра 
  bill.style.top = event.clientY - billWidth/2 + "px";
  bill.style.left = event.clientX- billHeight/2 + "px";
  
  window.onmousemove = function(event) {
  bill.style.top = event.clientY - billWidth/2 + "px";
  bill.style.left = event.clientX- billHeight/2 + "px";
    
  } 
  
   bill.onmouseup = function() {
   window.onmousemove = null;
    if( inAtm( bill) ){  // можно сюда музыку подключить
    let billCost = + bill.getAttribute('cost'); 
    balanceInput.value = +balanceInput.value +billCost;
    bill.remove();
    }
  }
  
 }

 function inAtm( bill){
 let atm = document.querySelector(".atm img");  
 
 let atmCoords = atm.getBoundingClientRect();
 let billCoords = bill.getBoundingClientRect();
 
 let billLeftTopCorner = {"x" : billCoords.x,"y" :billCoords.y};
 let billRightTopCorner = {"x" : billCoords.x +billCoords.width, "y" :billCoords.y};
 
 let atmLeftTopCorner = {"x" : atmCoords.x,"y" :atmCoords.y};
 let atmRightTopCorner = {"x" : atmCoords.x + atmCoords.width, "y" : atmCoords.y};
 let atmLeftBottomCorner = {"x" : atmCoords.x, "y": atmCoords.y + atmCoords.height/3};
 
 if ( billLeftTopCorner.x > atmLeftTopCorner.x //левый меньше центра/////
    && billRightTopCorner.x < atmRightTopCorner.x
    && billLeftTopCorner.y > atmLeftTopCorner.y
    && billLeftTopCorner.y < atmLeftBottomCorner.y 
   ) {
  return true; 
  } else {
  return false;      
 }

}

                           //СДАЧА
                           
  let changeButton =document.querySelector(".change-btn");
  
   changeButton.onclick = function() {
   let cnangeBox = document.querySelector(".change-box");
   let coins = cnangeBox.querySelectorAll ("img");
    if (coins.length == 0 ) {
    if(balanceInput.value == 0) {
     return;  
    }  
    changeButton.innerHTML = "Забрать сдачу";
     takeChange();
    } else {
    changeButton.innerHTML = "Сдача";
     for(let i = 0; i < coins.length; i++) {
      coins[i].remove(); 
     }
    }
   } 
  function takeChange() {
    if(balanceInput.value == 0) {
      return;
    }
    if(balanceInput.value >= 10) {
     balanceInput.value -=10;
     tossCoin("10");
     takeChange();
    }else if(balanceInput.value >= 5) {
     balanceInput.value -=5;
     tossCoin("5");
     takeChange();
    } else if(balanceInput.value >= 2){
     balanceInput.value -=2;
     tossCoin("2");
     takeChange();
    } else {
     balanceInput.value -= 1;
     tossCoin("1");
     takeChange();
    }
  }
  
 function tossCoin(cost) {
  let imgSrc = "";
  switch (cost) {
    case "10":
      imgSrc = "IMG/10rub.png";
      break;
    case "5":
     imgSrc = "IMG/5rub.png";
      break;
    case "2":
      imgSrc = "IMG/2rub.png";
      break;
    case "1":
     imgSrc = "IMG/1rub.png";
      break;
  }
  
  let cnangeBox = document.querySelector(".change-box"); //
  cnangeBox.style.position ="relative";
  
  let cnangeBoxCoords = cnangeBox.getBoundingClientRect(); //нашли координаты нашего cnangeBox
  let randomWidth = getRandomInt(0, cnangeBoxCoords.width  - 50);
  let randomHeigth = getRandomInt(0, cnangeBoxCoords.heigth -  50);
  
  
  let coin = document.createElement("img");
  coin.setAttribute('src', imgSrc);
  coin.style.width ="50px";
  coin.style.heigth ="50px";
  coin.style.cursor ="pointer";
  coin.style.position ="absolute";
  coin.style.top= randomHeigth +"px";
  coin.style.left = randomWidth +"px";
  cnangeBox.append(coin); 
  
  coin.onclick = function() {
    coin.remove();
  }
  
  
    //coin.style.display ="inline-block";
  
  //cnangeBox.prepend(coin);  // в начало элемента
  //cnangeBox.append(coin); // в конец элемента
  //cnangeBox.before(coin) //над элементом
  //cnangeBox.replaceWith (coin) //замена
  }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;//Максимум не включается, минимум включается
  }

  










