const myimg=document.querySelector("#rules-img");
const closebtn=document.querySelector("#my-btn");
const ruleOpen=document.querySelector("#rule-btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissor");
const nextBtn=document.getElementById('next-btn');

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
    rockBtn.classList.remove('display-none');
  } else if (choice === "paper") {
    rockBtn.style.display = "none";
    scissorsBtn.style.display = "none";
  } else {
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
  }
  buttonContainer.removeEventListener("click", choose);
  const result = playGame(choice);
  resultText.innerText = result;
}


