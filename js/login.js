"use strict"

/* 
 * Login to Join
 */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        // If the credentials are valid, show an alert box and reload the page
        /* alert("You have successfully logged in."); */
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})


/* 
 * Show Modal Window after Login
 */
let modal = document.querySelector(".modal");
let trigger = document.querySelector(".example");
/* let closeButton = document.querySelector(".close-button"); */
function toggleModal() {
  modal.classList.toggle("show-modal");
}


function windowOnClick(event) {
  if(event.target === modal) {
    toggleModal();
  }
}


trigger.addEventListener("click", toggleModal);
/* closeButton.addEventListener("click", toggleModal); */
window.addEventListener("click", windowOnClick);


function openJoin() {
    window.location.href = '../html/main.html';
}