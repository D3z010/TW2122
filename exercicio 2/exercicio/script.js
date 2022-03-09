 /* const oneSec = 1000;

var interval = setInterval(function (){
    alert("working")
}, oneSec * 1);

setTimeout(function (){
    clearInterval(interval);
}, oneSec * 5);


  */
 selectFood(
     document.getElementById('featured'),
     'featured'

 )
 function selectFood(btnClicked, type){

     let buttons = document.getElementsByClassName("menu-btn");
     let arrayButtons = Array.from(buttons);

     arrayButtons.forEach((btn)=> {
         if(btn===btnClicked){
             btn.className = 'menu-btn active-btn'
         } else {
             btn.className = 'menu-btn'
         }
     });



     let foods = document.getElementsByClassName("food-item");
     let arrayFoods = Array.from(foods);

     arrayFoods.forEach((food)=> {
         if(food.classList.contains(type)){
             food.style.display = 'grid';
         } else {
             food.style.display = 'none';
         }
     });
 }

