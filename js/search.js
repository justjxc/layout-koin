"use strict";

const searchForm = document.querySelector(".search-form"),
  searchFormEmail = document.querySelector(".search-form__search"),
  searchFormSubmit = document.querySelector(".search-form__submit");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

searchFormSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const email = searchFormEmail.value;
  const url = "https://jsonplaceholder.typicode.com/posts";

  if (email.match(mailFormat)) {
    fetch(url, {
      method: "POST",
      body: email,
    }).then((response) => {
      console.log(response.status);
    });
  } else {
    alert("Email adress is not correct");
  }
});
