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
    for (let i = 0; i < allTasks.length; i++) {
      const task = allTasks[i];
      document.getElementById('backlog-noTask').classList.add('d-none');
      document.getElementById('backlogContainerHeadline').classList.remove('d-none');
      backlogArea.innerHTML += generateBacklogAreaHTML(task);
    }
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

/* function showProfile() {
  let profile = document.getElementById('backlog-title').innerText;
  if (profile == 'Anastasiia Ünal') {
    document.getElementById('profile-image').innerHTML = `
      <img class="backlogImg" src="${taskAccountProfile2['image']}">
    `;
  }
} */