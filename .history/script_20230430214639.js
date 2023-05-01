const myimg=document.querySelector("#rules-img");
const closebtn=document.querySelector("#my-btn");
const ruleOpen=document.querySelector("#rule-btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissor");
const nextBtn=document.getElementById('next-btn');
const rockImg=document.getElementById('first-img');
const scissorImg=document.getElementById('second-img');
const paperImg=document.getElementById('third-img');
const youPicked=document.getElementById('you-picked');
const youWon=document.getElementById('you-win');
const aginstPC=document.getElementById('against-pc');
const againBtn=document.getElementById('play-again');
const pcPicked=document.getElementById('pc-picked');
const rockCompBtn=document.getElementById('fourth-img');
const scissorCompBtn=document.getElementById('fifth-img');
const paperCompBtn=document.getElementById('sixth-img');
const allThree=document.getElementById('all-three-imgs');
const twoBtns=document.getElementById('two-btns');


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


function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function choose(choice) {
  if (choice === "rock") {
    allThree.classList.add('display-none');
    rockImg.classList.remove('display-none')
  } else if (choice === "paper") {
    rockBtn.style.display = "none";
    scissorsBtn.style.display = "none";
  } else {
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
  }
  
}


