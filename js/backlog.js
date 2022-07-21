"use strict";

let newTask = {
  title: '',
  category: '',
  description: '',
  date: '',
  urgency: '',
  assignedAccount: ''
};

let allTasks = [];

setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');

async function init() {
    loadNavBar();
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks'));
    console.log(allTasks);
    renderBacklog();
}


function renderBacklog() {
  let backlogArea = document.getElementById('backlog-area');
    for (let i = 0; i < allTasks.length; i++) {
      const task = allTasks[i];
      backlogArea.innerHTML += generateBacklogAreaHTML(task);
    }
}

function generateBacklogAreaHTML(task) {
    return /*html*/ `
    <div>
      <h2>title: ${task['title']}</h2>
    </div>
    <div>
      <h2>category: ${task['category']}</h2>
    </div>
    <div>
      <h2>description: ${task['description']}</h2>
    </div>
    <div>
      <h2>date: ${task['date']}</h2>
    </div>
    <div>
      <h2>urgency: ${task['urgency']}</h2>
    </div>
    <div>
      <h2>assignedAccount: ${task['assignedAccount']}</h2>
    </div>
    `;
}



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