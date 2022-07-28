"use strict"

/* 
 * Login to Join
 */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginGuestBtn = document.getElementById('login-guest');


// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        // If the credentials are valid, show an alert box and reload the page
        toggleModal();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})


/* 
 * Show Modal Window after Login
 */
function toggleModal() {
    let modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
}


loginGuestBtn.addEventListener('click', () => {
    openJoin();
});


function openJoin() {
    window.location.href = '../html/main.html';
}


/* 
 * Load Page Transition
 */
window.addEventListener('beforeunload', () => {
    document.body.classList.add("animate-out");
  });