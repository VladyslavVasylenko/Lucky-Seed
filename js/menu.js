"use strict";

const burger = document.querySelector(".burger");
const headerList = document.querySelector(".nav-bar__list");

burger.addEventListener( "click", () => {
    headerList.classList.toggle("open");
  }
);

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