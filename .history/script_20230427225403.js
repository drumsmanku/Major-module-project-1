const myimg=document.querySelector("#rules-img");
const closebtn=document.querySelector("#my-btn");
const ruleOpen=document.querySelector("#rule-btn");

ruleOpen.addEventListener("click", ()=>{
  myimg.classList.add("appear");
  closebtn.classList.add("appear");
});
closebtn.addEventListener("click", ()=>{
  myimg.classList.remove("disappear");
  closebtn.classList.remove("disappear");
});

