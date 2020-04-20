"use strict" //alert("Скрипт подключен");
 
 //window.document.documentElement.body
 
 //____________________Устаревшие методы_________________________
 /*let coffeeMachine = document.getElementById("coffee");//поиск по ID   
 console.log(coffeeMachine);                   
 let images = document.getElementsByTagName("img"); //поиск по тегу
 console.log(images);
 let coffeeItems = document.getElementsByClassName("coffee-item");//поиск по классу   
 console.log(coffeeItems); 
 let firstImage = coffeeItems[0].getElementsByTagName("img");
 console.log(firstImage[0]);*/
 //_______________________________________________________________
                     //современные методы
 /*let coffeeMachine = document.querySelector("#coffee");
 console.log(coffeeMachine); 
 let image = document.querySelector("img");
 console.log(image);
 let coffeeItems = document.querySelectorAll(".coffee-item");
 console.log(coffeeItems);
 let itemImages = document.querySelectorAll(".coffee-item img");
 console.log(itemImages);
 let cupImages = document.querySelectorAll(".coffee-item img,.coffee-cup img");
 console.log(cupImages);*/
  //_________________________________________________________
  //_______________________работа  сэлементами______________
  // CSS
 /*let cofeeMachine = document.querySelector(".coffee-machine");
 cofeeMachine.style.border = "10px solid red";
 cofeeMachine.style.borderRadius = "25px";
 cofeeMachine.style.position ="absolute";
 cofeeMachine.style.top  = "100px";
 cofeeMachine.style.left = "100px";
 let cofeeMachineTop = cofeeMachine.style.top; 
 console.log(parseInt(cofeeMachineTop) ); */
 // АТРИБУТЫ
 //let balance = document.querySelector("input[type= text]");
/* let balanceType = balance.getAttribute("type");
 console.log(balanceType);
 balance.setAttribute("type","date");
 
 console.log(balance.hasAttribute ("placeholder"));
 balance.removeAttribute("aria-label");*/
/* balance.value = 500;// ==balance.setAttribute("value", 500);
 console.log(balance.value); //==balance.getAttribute("value");
 */
/*                    // Классы
 let changeButton = document.querySelector(".btn");
 console.log(changeButton.classList);
 changeButton.classList.remove("btn-primary"); //убрать цвет
 changeButton.classList.add("btn-success");      //добавить цвет
 //changeButton.classList.toggle"btn-red" )     //кнопка вкл выкл
 */
     /*            //содержимое элементов
  
  let displayText= document.querySelector(".display-text");            
  console.log(displayText.innerHTML );               
  console.log(displayText.innerText );               
  displayText.innerText =  "<b>Готовим кофе</b>";             
                 
 let timeout = setTimeout(painBody, 5000, 'PaleTurquoise'); //либо с функцией обертки
 
 let changeButton = document.querySelector(".btn");
 changeButton.onclick = function (){
   clearTimeout(timeout);
 }
  function painBody(color) {
   document.body.style.background = color; 
 }
 */
 
 /*let coffeeMachine = document.querySelector(".cofee-machine");
 coffeeMachine.style.position ="absolute";
 */
 
  let interval = setInterval(trashConsole, 1000)
  
  let changeButton = document.querySelector(".btn");
  changeButton.onclick = function () {
   clearInterval (interval);
  }
 function trashConsole() {
  console.log(Math.random() );  
  
 }
 
 
 
 
 