"use strict";

let allTasks = [];
let taskCategoryBacklog;
let taskUrgencyBacklog;
let worker;
let taskEmail;

const colors = {
  'Software Development': 'green',
  'Sale': 'orange',
  'Product': 'blue',
  'Marketing': 'red',
}

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
        let imgName = allTasks[i].imgName;
        let emailBacklog = allTasks[i].mail;
        backlogArea.innerHTML += generateBacklogAreaHTML(emailBacklog, imgName, i);
        categoryBgColors(i);
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
  document.getElementById('backlogOpenDetails').innerHTML += openDetailsHTML(i);
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.remove("d-none");
  openDetailLoadContent(i);
}


function closeDetails() {
  let showDetails = document.getElementById("backlogDetailsContainer");
  let showDetailsContainer = document.getElementById('backlogOpenDetails');
  showDetailsContainer.innerHTML = '';
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
  let category = (taskCategoryBacklog == undefined) ? allTasks[i].category : taskCategoryBacklog;
  let date = document.getElementById('dateDetailContainer').value;
  let urgency = (taskUrgencyBacklog == undefined) ? allTasks[i].urgency : taskUrgencyBacklog;
  let assignedAccount = (worker == undefined) ? allTasks[i].assignedAccount : worker;
  let imgName = (assignedAccount == undefined) ? allTasks[i].imgName : assignedAccount.split(' ').slice(0, 1).join('');
  let mail = (taskEmail == undefined) ? allTasks[i].mail : taskEmail;
  pushEditContent(title, description, category, date, urgency, assignedAccount, imgName, mail, i)
}

async function pushEditContent(title, description, category, date, urgency, assignedAccount, imgName, mail, i) {
  let newTask = {
    'title': title,
    'category': category,
    'description': description,
    'date': date,
    'urgency': urgency,
    'assignedAccount': assignedAccount,
    'imgName': imgName,
    'mail': mail
  }
  afterPushEditContent(newTask, i);
}

async function afterPushEditContent(newTask, i) {
  await backend.deleteItem('allTasks'); 
  allTasks.splice(i, 1)
  allTasks.push(newTask); 
  await backend.setItem('allTasks', JSON.stringify(allTasks));
  init();
  clearOpenDetailTasks();
  closeDetails();
}

function clearOpenDetailTasks() {
  taskCategoryBacklog = undefined;
  taskUrgencyBacklog = undefined;
  worker = undefined;
  taskEmail = undefined;
}
 
function chooseCategoryBacklog(name) {
    taskCategoryBacklog = name;
}
 
function chooseUrgencyBacklog(name) {
    taskUrgencyBacklog = name;
}

function chooseAssignedAccountBacklog(position, name, email) {
  let border = document.getElementById('workerBacklog-' + position);
  if(border.style.border == '1px solid red') {
    border.style.border = 'none';
  } else {
    border.style.border = '1px solid red';
  }
  worker = name;
  taskEmail = email;
}

function categoryBgColors(i) {
  const currentCategory = allTasks[i].category;
  const color = colors[currentCategory]
  document.getElementById(`categoryBgColor${i}`).style.backgroundColor = color;
}