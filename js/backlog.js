"use strict";

function openDetails() {
  document.body.innerHTML += openDetailsHTML();
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.remove("d-none");
}

function closeDetails() {
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.add("d-none");
}

function clickToCopy() {
  let email = document.getElementById("copyEmail").innerText;
  email.textContent;
  navigator.clipboard.writeText(email);
  console.log(email);
}
