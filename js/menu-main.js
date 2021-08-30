"use strict";

const burgerMain = document.querySelector(".burger-main");
const headerListMain = document.querySelector(".nav-bar-main__list");
const closes = document.querySelector(".closes");

const toggleMenuMain = function() {
  headerListMain.classList.toggle('opens');
}

closes.onclick = function() {
  headerListMain.classList.toggle('opens');
}

burgerMain.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenuMain();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_headerListMain = target == headerListMain || headerListMain.contains(target);
  const its_burgerMain = target == burgerMain;
  const headerListMain_is_active = headerList.classList.contains('opens');
  
  if (!its_headerListMain && !its_burgerMain && headerListMain_is_active) {
    toggleMenuMain();
  }
});