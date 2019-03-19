"use strict";

(function() {
  const callButton = document.querySelector(".nav__btn--call");
  const callModal = document.querySelector(".page__call");
  const fade = document.querySelector(".fade");
  const escKeycode = 27;

  function closeModal(e) {
    if (e.keyCode === escKeycode) {
      callModal.setAttribute("hidden", "");
      fade.setAttribute("hidden", "");
      window.removeEventListener("keydown", closeModal);
    }
  }

  callButton.addEventListener("click", function(e) {
    e.preventDefault();
    fade.removeAttribute("hidden");
    callModal.removeAttribute("hidden");
    window.addEventListener("keydown", closeModal);
  });
}());
