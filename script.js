//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var QuestionCount = 0;
var InvisibilityScore = 0;
var FlyingScore =0;
var TelepathyScore =0;
var TeleportationScore =0;



//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Telepathy);
q1a2.addEventListener("click", Teleportation);
q1a3.addEventListener("click", Flying);
q1a4.addEventListener("click", Invisibility);

q2a1.addEventListener("click", Telepathy);
q2a2.addEventListener("click", Flying);
q2a3.addEventListener("click", Teleportation);
q2a4.addEventListener("click", Invisibility);

q3a1.addEventListener("click", Invisibility);
q3a2.addEventListener("click", Telepathy);
q3a3.addEventListener("click", Flying);
q3a4.addEventListener("click", Teleportation);

q4a1.addEventListener("click", Flying);
q4a2.addEventListener("click", Invisibility);
q4a3.addEventListener("click", Teleportation);
q4a4.addEventListener("click", Telepathy);


//#TODO: Define quiz functions here
function Invisibility(){
  InvisibilityScore+= 1;
  QuestionCount+= 1;  
//  alert("one point to invisibility");
  if(QuestionCount>=4){
    updateresult();
  }
}

function Flying(){
  FlyingScore+= 1;
  QuestionCount+= 1;
 // alert("one point to Flying");
  if(QuestionCount>=4){
    updateresult();
  }
}

function Telepathy(){
  TelepathyScore+= 1;
  QuestionCount+= 1;
 // alert("one point to Telepathy");
  if(QuestionCount>=4){
    updateresult();
  }
}

function Teleportation(){
  TeleportationScore+= 1;
  QuestionCount+= 1;
 // alert("one point to Teleportation");
  if(QuestionCount>=4){
    updateresult();
  }
}

function updateresult(){
  if (InvisibilityScore >= 3){
result.innerHTML = "Invisibility!";
 }
 else if(FlyingScore >=3){
result.innerHTML = "Flying!";
 }
 else if(TelepathyScore >=3){
result.innerHTML = "Telepathy!";
 }
 else if (TeleportationScore>= 3){
result.innerHTML = "Teleportation!";
 }
 else{
result.innerHTML = "WOW! You are gifted! Go again later!"
 }
}