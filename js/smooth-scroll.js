"use strict";

const headerLinksList = document.querySelector(".header__list");

headerLinksList.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;

  const ID = target.getAttribute("href").slice(1);

  document.getElementById(ID).scrollIntoView({
    behavior: "smooth",
  });

  closeHamburgerMenu();
});
