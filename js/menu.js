"use strict";

const burger = document.querySelector(".burger");
const headerList = document.querySelector(".nav-bar__list");

const toggleMenu = function() {
  headerList.classList.toggle('open');
}

burger.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_headerList = target == headerList || headerList.contains(target);
  const its_burger = target == burger;
  const headerList_is_active = headerList.classList.contains('open');
  
  if (!its_headerList && !its_burger && headerList_is_active) {
    toggleMenu();
  }
});

// Active
let ulContainer = document.getElementById("active");

let li = ulContainer.getElementsByClassName("nav-bar__link");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}