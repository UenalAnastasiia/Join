"use strict";

let newTask = {
  title: '',
  category: '',
  description: '',
  date: '',
  urgency: '',
  assignedAccount: ''
};

/* let taskAccountProfile1 = [
  {
      'image': '../img/profile.jpg',
      'name': 'Leon Groschek',
      'e-mail': 'leon.groschek12@gmail.com',
      'job': 'Software Developer'
  }
];

let taskAccountProfile2 = [
  {
      'image': '../img/Anastasiia.jpg',
      'name': 'Anastasiia Ünal',
      'e-mail': 'velika908@gmail.com',
      'job': 'Software Developer'
  }
];

let taskAccountProfile3 = [
  {
      'image': '../img/man.png',
      'name': 'Max Mustermann',
      'e-mail': 'mustermann@gmail.com',
      'job': 'Administrator'
  }
]; */

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
  document.body.innerHTML += openDetailsHTML();
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.remove("d-none");
  openDetailTitle(i);
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

function openDetailTitle(i) {
  document.getElementById('inputDetailContainer').value = allTasks[i].title;
  document.getElementById('textareaDetailContainer').value = allTasks[i].description;
  document.getElementById('taskCategory').innerText = allTasks[i].category;
  document.getElementById('dateDetailContainer').value = allTasks[i].date;
  document.getElementById('urgencyDetailContainer').innerText = allTasks[i].urgency;
}

/* function showProfile() {
  let profile = document.getElementById('backlog-title').innerText;
  if (profile == 'Anastasiia Ünal') {
    document.getElementById('profile-image').innerHTML = `
      <img class="backlogImg" src="${taskAccountProfile2['image']}">
    `;
  }
} */