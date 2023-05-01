const myimg=document.querySelector("#rules-img");
const closebtn=document.querySelector("#my-btn");

closebtn.addEventListener("click", ()=>{
  myimg.classList.add("disappear");
  closebtn.classList.add("disappear");
});

