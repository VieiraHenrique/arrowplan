const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll('.header__nav--menu a');
const toggle = document.getElementById('toggle');

hamburger.addEventListener("click", () => {
  body.classList.toggle("noscroll");
});

menuItems.forEach((item)=>{
  item.addEventListener('click', ()=>{
    body.classList.remove('noscroll');
    toggle.checked = false;
  })
})
