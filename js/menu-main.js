"use strict";
const burgers = document.querySelector(".burger-main");
const headerLists = document.querySelector(".nav-bar-main__list");
const linkt = document.querySelectorAll(".nav-bar-main__link");

burgers.addEventListener("click", () => {
  headerLists.classList.toggle("opens");
  linkt.forEach(link => {
      link.classList.toggle("fade");
    });
  }
);