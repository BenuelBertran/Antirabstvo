"use strict";

(function() {
  const userButton = document.querySelector(".nav__btn--user");
  const userModal = document.querySelector(".page__user");
  const fade = document.querySelector(".fade");
  const escKeycode = 27;

  function closeModal(e) {
    if (e.keyCode === escKeycode) {
      userModal.setAttribute("hidden", "");
      fade.setAttribute("hidden", "");
      window.removeEventListener("keydown", closeModal);
    }
  }

  userButton.addEventListener("click", function(e) {
    e.preventDefault();
    fade.removeAttribute("hidden");
    userModal.removeAttribute("hidden");
    window.addEventListener("keydown", closeModal);
  });
}());
