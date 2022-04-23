"use strict";

const socialMediaBnt = document.querySelector(".socialMedia");
const modalCloseBtn = document.querySelector(".modal-close-btn");

socialMediaBnt.addEventListener("click", () => {
  const notifi = document.getElementById("Up").play();
});

modalCloseBtn.addEventListener("click", () => {
  const donwNotifi = document.getElementById("Down").play();
});
