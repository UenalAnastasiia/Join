"use strict";

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
  allTasks.splice(i, 1)
  await backend.setItem('allTasks', JSON.stringify(allTasks));
  init();
}

function openDetails(i) {
  document.body.innerHTML += openDetailsHTML(i);
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.remove("d-none");
  openDetailLoadContent(i);
}


function closeDetails() {
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.add("d-none");
}


function clickToCopy() {
  let email = document.getElementById("copyEmail").innerText;
  email.textContent; 
  navigator.clipboard.writeText(email); 
}

function openDetailLoadContent(i) {
  document.getElementById('inputDetailContainer').value = allTasks[i].title;
  document.getElementById('textareaDetailContainer').value = allTasks[i].description;
  document.getElementById('taskCategory').innerText = allTasks[i].category;
  document.getElementById('dateDetailContainer').value = allTasks[i].date;
  document.getElementById('urgencyDetailContainer').innerText = allTasks[i].urgency;
  document.getElementById('assignedToDetailContainer').innerText = allTasks[i].assignedAccount;
}

function openDetailGetEditContent(i) {
  let title = document.getElementById('inputDetailContainer').value;
  let description = document.getElementById('textareaDetailContainer').value;
  let category = document.getElementById('taskCategory').innerText;
  let date = document.getElementById('dateDetailContainer').value;
  let urgency = document.getElementById('urgencyDetailContainer').innerText;
  let assignedAccount = document.getElementById('assignedToDetailContainer').innerText;
  pushEditContent(title, description, category, date, urgency, assignedAccount)
}

async function pushEditContent(title, description, category, date, urgency, assignedAccount, i) {
  let newTask = {
    'title': title,
    'category': category,
    'description': description,
    'date': date,
    'urgency': urgency,
    'assignedAccount': assignedAccount
  }
  await backend.deleteItem('allTasks'); 
  allTasks.splice(i, 1)
  allTasks.push(newTask); 
  await backend.setItem('allTasks', JSON.stringify(allTasks));
  init();
  closeDetails();
}


/* function showProfile() {
  let profile = document.getElementById('backlog-title').innerText;
  if (profile == 'Anastasiia Ünal') {
    document.getElementById('profile-image').innerHTML = `
      <img class="backlogImg" src="${taskAccountProfile2['image']}">
    `;
  }
} */