const myimg=document.querySelector("#rules-img");
const closebtn=document.querySelector("#my-btn");
const ruleOpen=document.querySelector("#rule-btn");

closebtn.addEventListener("click", ()=>{
  myimg.classList.add("disappear");
  closebtn.classList.add("disappear");
});
ruleOpen.addEventListener("click", ()=>{
  myimg.classList.remove("disappear");
  closebtn.classList.remove("disappear");
})

