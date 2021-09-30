// All Variables 
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-pm');
const greeting = document.querySelector('.message');
const partyImg = document.getElementById("change_img");

const currentDate = new Date();
const currentSeconds = currentDate.getSeconds();
const currentMinute = currentDate.getMinutes();
const currentHour = currentDate.getHours(); 


const changeImg = document.getElementById("change_img");
const spanText = document.getElementById('ltext');
const partyText = document.getElementById("ptext");
const img = new Image();

const fun = document.querySelector(".party");


function takeZero(timeSpan) {
    return timeSpan < 10 ? '0'.concat(timeSpan) : timeSpan
}
function time() {
 
  const currentDate = new Date();
const currentSeconds = currentDate.getSeconds();
const currentMinute = currentDate.getMinutes();
const currentHour = currentDate.getHours(); 

     hourTime.innerHTML =    `${takeZero((currentHour % 12) || 12)}`;
     minTime.innerHTML  =    `${takeZero(currentMinute)}`;
     secTime.innerHTML  =    `${takeZero(currentSeconds)}`;
     aMpM.innerHTML     =    `${currentHour >= 12 ? 'PM' : 'AM'}`;
   


}
setInterval(time, 1000  );


// Image changing according to time



function wakeup(){
 
  img.src = "images/wakeUp.png";
  img.setAttribute("alt","wakeup_Img");
  img.setAttribute("id","wake");

  changeImg.appendChild(img);

  img.style.height = 608 + "px";
  img.style.width = 633 + "px";
  img.style.marginTop = "0";
  
  greeting.innerHTML = "Good Morning !!";
  spanText.innerHTML = "Wake Up !!";
}

function lunch(){
 
  img.src = "images/lunch.png";
  img.setAttribute("alt","Lunch_image");
  img.setAttribute("id","wake");
  
  changeImg.appendChild(img);

  img.style.height = "650px";
  img.style.width = "650px";

  greeting.innerHTML = "Good Afternoon !!";
  spanText.innerHTML = "Let's have some lunch !!";
}

function night(){
  
  img.src = "images/goodNight.png";
  img.setAttribute("alt","GoodNight_image");
  img.setAttribute("id","wake");
 
  changeImg.appendChild(img);

  greeting.innerHTML = "Good Night !!";
  spanText.innerHTML = "Good Night !!";
  
}


function party(){
  img.src = "./images/chill.png";
  changeImg.appendChild(img);
  img.style.height = "540px";
  img.style.width = "630px";
  img.style.marginTop = "40px";

  greeting.style.display = "none";
  spanText.innerHTML = "Amazing Party !!";
}


party();


//Party button

fun.addEventListener("click", ()=>{
  
  partyText.innerHTML = "End the Party";
  
  
  
  img.src =  "./images/party.png";
  changeImg.appendChild(img);

  img.style.height = "540px";
  img.style.width = "630px";
  img.style.marginTop = "40px";

  greeting.style.display = "block";
  greeting.innerHTML = "Let's Party !!";

  spanText.innerHTML = "Let's Have an Amazing Party !!";


});

  fun.addEventListener("dblclick", ()=>{
    partyText.innerHTML = "Party Time";
    greeting.style.display = "none";
    party();
    // currentState();
  });

//select Otion

let morning = document.querySelector(".morning-slot");
let Night = document.querySelector(".night-slot");
let noon = document.querySelector(".noon-slot");

let myDate = new Date();
  let myTime = myDate.getHours();


morning.addEventListener("change", function() {

  if(this.value == myTime){
    wakeup();
    greeting.style.display = "block";
  }
  else{
    party();
  }
});



noon.addEventListener("change", function() {
  if(this.value == myTime){
    lunch();
    greeting.style.display = "block";
  }
  else{
    party();
  }

});



Night.addEventListener("change", function() {
  if(this.value == myTime){
    night();
    greeting.style.display = "block";
  }
  else {
    party();
  }

});


