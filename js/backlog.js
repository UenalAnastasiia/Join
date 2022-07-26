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
  backlogArea.innerHTML = '';
    if(allTasks !== null) {
      for(let i = 0; i < allTasks.length; i++) {
        document.getElementById('backlog-noTask').classList.add('d-none');
        document.getElementById('backlogContainerHeadline').classList.remove('d-none');
        backlogArea.innerHTML += generateBacklogAreaHTML(i);
      }
    }
}

async function deleteTask(i) {
  await backend.deleteItem('allTasks');
  allTasks.splice(i, 1);
  await backend.setItem('allTasks', JSON.stringify(allTasks));
  init();
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