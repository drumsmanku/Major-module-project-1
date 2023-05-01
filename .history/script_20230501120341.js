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
const compScore=document.getElementById('comp-score');
const myScore=document.getElementById('my-score');
const cont=document.getElementById('close-everything');
const tri=document.getElementById('back-tri')

let Myscore=localStorage.getItem('Mscore')||0;
let Compscore=localStorage.getItem('Cscore')||0;
myScore.innerText=Myscore;
compScore.innerText=Compscore;

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
    allThree.classList.add("display-none");
    rockImg.classList.remove("display-none");
    youPicked.classList.remove("display-none");
    pcPicked.classList.remove("display-none");
    const res = playGame(choice);
    console.log(res);
    if (res === "rock") {
      rockCompBtn.classList.remove("display-none");
      document.getElementById("you-win").innerHTML = "TIE UP";
      youWon.classList.remove("display-none");
      againBtn.innerText = "Replay";
      againBtn.classList.remove("display-none");
    } else if (res === "scissors") {
      scissorCompBtn.classList.remove("display-none");
      youWon.classList.remove("display-none");
      aginstPC.classList.remove("display-none");
      againBtn.classList.remove("display-none");
      nextBtn.classList.remove('display-none');
      Myscore++;
      localStorage.setItem("Mscore", Myscore);
      myScore.innerText = Myscore;
    } else {
      paperCompBtn.classList.remove("display-none");
      document.getElementById("you-win").innerHTML = "YOU LOST";
      youWon.classList.remove("display-none");
      aginstPC.classList.remove("display-none");
      againBtn.classList.remove("display-none");
      Compscore++;
      localStorage.setItem("Cscore", Compscore);
      compScore.innerText = Compscore;
    }
  } else if (choice === "paper") {
    allThree.classList.add("display-none");
    paperImg.classList.remove("display-none");
    youPicked.classList.remove("display-none");
    pcPicked.classList.remove("display-none");
    const res = playGame(choice);
    console.log(res);
    if (res === "paper") {
      paperCompBtn.classList.remove("display-none");
      document.getElementById("you-win").innerHTML = "TIE UP";
      youWon.classList.remove("display-none");
      againBtn.innerText = "Replay";
      againBtn.classList.remove("display-none");
    } else if (res === "rock") {
      rockCompBtn.classList.remove("display-none");
      youWon.classList.remove("display-none");
      aginstPC.classList.remove("display-none");
      againBtn.classList.remove("display-none");
      nextBtn.classList.remove('display-none');
      Myscore++;
      localStorage.setItem("Mscore", Myscore);
      myScore.innerText = Myscore;
    } else {
      scissorCompBtn.classList.remove("display-none");
      document.getElementById("you-win").innerHTML = "YOU LOST";
      youWon.classList.remove("display-none");
      aginstPC.classList.remove("display-none");
      againBtn.classList.remove("display-none");
      nextBtn.classList.add("display-none");
      Compscore++;
      localStorage.setItem("Cscore", Compscore);
      compScore.innerText = Compscore;
    }
  } else {
    allThree.classList.add("display-none");
    scissorImg.classList.remove("display-none");
    youPicked.classList.remove("display-none");
    pcPicked.classList.remove("display-none");
    const res = playGame(choice);
    console.log(res);
    if (res === "scissors") {
      scissorCompBtn.classList.remove("display-none");
      document.getElementById("you-win").innerHTML = "TIE UP";
      youWon.classList.remove("display-none");
      againBtn.innerText = "Replay";
      againBtn.classList.remove("display-none");
    } else if (res === "paper") {
      paperCompBtn.classList.remove("display-none");
      youWon.classList.remove("display-none");
      aginstPC.classList.remove("display-none");
      againBtn.classList.remove("display-none");
      nextBtn.classList.remove('display-none');
      Myscore++;
      localStorage.setItem("Mscore", Myscore);
      myScore.innerText = Myscore;
    } else {
      rockCompBtn.classList.remove("display-none");
      document.getElementById("you-win").innerHTML = "YOU LOST";
      youWon.classList.remove("display-none");
      aginstPC.classList.remove("display-none");
      againBtn.classList.remove("display-none");
      Compscore++;
      localStorage.setItem("Cscore", Compscore);
      compScore.innerText = Compscore;
    }
  }
  
}

function playAgain(){
  location.reload();
}

