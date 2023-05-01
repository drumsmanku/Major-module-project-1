const myimg=document.querySelector("#rules-img");
const closebtn=document.querySelector("#my-btn");
const ruleOpen=document.querySelector("#rule-btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissor");

ruleOpen.addEventListener("click", ()=>{
  myimg.classList.add("appear");
  closebtn.classList.add("appear");
  myimg.classList.remove("disappear");
  closebtn.classList.remove("disappear");
});
closebtn.addEventListener("click", ()=>{
  myimg.classList.add("disappear");
  closebtn.classList.add("disappear");
  myimg.classList.remove("appear");
  closebtn.classList.remove("appear");
});



