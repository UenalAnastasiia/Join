"use strict"

function openDetails() {
    let details = document.getElementById('details').innerText;
    document.body.innerHTML += openDetailsHTML(details);
}

function closeDetails() {
    document.getElementById('backlogDetailsContainer').classList.add = 'd-none';
}