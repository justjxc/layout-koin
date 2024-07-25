"use strict";

const hamburgerBtn = document.querySelector(".hamburger-btn"),
  headerNavMenu = document.querySelector(".header__nav"),
  headerContent = document.querySelector(".header__content");

function closeHamburgerMenu() {
  headerNavMenu.classList.remove("header__nav--active");
  headerContent.classList.remove("header__content--active");
}

hamburgerBtn.addEventListener("click", () => {
  headerNavMenu.classList.toggle("header__nav--active");
  headerContent.classList.toggle("header__content--active");
});
