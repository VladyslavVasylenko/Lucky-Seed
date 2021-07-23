"use strict";

const burger = document.querySelector(".burger");
const headerList = document.querySelector(".nav-bar__list");
const links = document.querySelectorAll(".nav-bar__link");

burger.addEventListener("click", () => {
  headerList.classList.toggle("open");
  links.forEach(link => {
      link.classList.toggle("fade");
    });
  }
);