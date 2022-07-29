let taskAssignedAccounts = [];
let allTasks = [];
let newWorkers = [];
let worker;
let taskCategory;
let taskUrgency;
let taskEmail;
let board = 'toDo';
let modal = false;
let newWorkerWindow = false;

setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');

async function init() {
    loadNavBar();
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    console.clear();
    console.log(allTasks);
}


/** 
 * Load the calendar in Add-Task-Form with min date current day 
 */
function loadDate() {
    let currentDay = new Date().toISOString().split('T')[0];
    document.getElementById('taskDate').setAttribute('min', currentDay);
}


/** 
 * Create a new Task with Date from the Task-Form and push the task in JSON-Array
 */
function createTask() {
    let title = document.getElementById('taskTitle').value;
    let category = taskCategory || '';
    let description = document.getElementById('taskDescription').value;
    let date = document.getElementById('taskDate').value;
    let urgency = taskUrgency || '';
    let assignedAccount = worker || '';
    let imgName = assignedAccount.split(' ').slice(0, 1).join('');
    let mail = taskEmail;
    generateNewTask(title, category, description, date, urgency, assignedAccount, imgName, mail);
}


/** 
 * Generate a Task, push the task in JSON-Array and clean the task-form
 */
async function generateNewTask(title, category, description, date, urgency, assignedAccount, imgName, mail) {
    let newTask = {
        'title': title,
        'category': category,
        'description': description,
        'date': date,
        'urgency': urgency,
        'assignedAccount': assignedAccount,
        'imgName': imgName,
        'mail': mail,
        'board': board
    }
    allTasks.push(newTask);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    showPopUpWindow();
    cleanTaskForm();
    init();
}


function chooseAssignedAccount(position, name, email) {
    workerBorder = document.getElementById('worker-' + position);
    if (workerBorder.style.border == '1px solid red') {
        workerBorder.style.border = '1px solid white';
    } else {
        workerBorder.style.border = '1px solid red';
    }
    worker = name;
    taskEmail = email;
}


function chooseCategory(position, name) {
    document.getElementById('category-' + position).style.background = 'grey';
    taskCategory = name;
}


function chooseUrgency(position, name) {
    document.getElementById('urgency-' + position).style.background = 'grey';
    taskUrgency = name;
}

/* Show a Modal Popup Box when a task was created */
function showPopUpWindow() {
    if (modal === false) {
        document.getElementById("popUpBox").style.display = "block";
        modal = true;
    } else {
        document.getElementById("popUpBox").style.display = "none";
        modal = false;
    }
}


/* 
 * Create a new Worker in "Assigned To"
 */
function windowAddNewWorker() {
    if (newWorkerWindow === false) {
        document.getElementById("newWorkerWindow").style.display = "flex";
        newWorkerWindow = true;
    } else {
        document.getElementById("newWorkerWindow").style.display = "none";
        newWorkerWindow = false;
    }
}


async function createNewWorker() {
    windowAddNewWorker();
    let newFirstName = document.getElementById('newWorkerFirstName').value;
    let newLastName = document.getElementById('newWorkerLastName').value;
    let newJobPosition = document.getElementById('newWorkerJobPosition').value;
    let newWorker = {
        'newWorkerFirstName': newFirstName,
        'newWorkerLastName': newLastName,
        'newWorkerJobPosition': newJobPosition
    }
    newWorkers.push(newWorker);
    console.log(newWorkers);
    await backend.setItem('newWorkers', JSON.stringify(newWorkers));
    document.getElementById('new-worker-box').innerHTML = '';
    for (let i = 0; i < newWorkers.length; i++) {
        const worker = newWorkers[i];
        document.getElementById('new-worker-box').innerHTML += generateHTMLNewWorker(worker);
    }
    document.getElementById('newWorkerFirstName').value = '';
    document.getElementById('newWorkerLastName').value = '';
    document.getElementById('newWorkerJobPosition').value = '';
}


function generateHTMLNewWorker(worker) {
    return /*html*/ `
        <div class="taskAccount-box taskAccount-newWorker-box" id="worker">
            <div class="taskAccountImg cursor">
                <img src="../img/Max.jpg">
            </div>
            <div class="cursor">
                <span>${worker["newWorkerFirstName"]} ${worker["newWorkerLastName"]}</span>
                <br>
                <br>
                <span>${worker["newWorkerJobPosition"]}</span>
            </div>
        </div>
    `;
}


function cleanTaskForm() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('worker-1').style.border = '1px solid white';
    document.getElementById('worker-2').style.border = '1px solid white';
    document.getElementById('worker-3').style.border = '1px solid white';
    init();
}


/* async function deleteTask() {
    await backend.deleteItem('allTasks');
} */