let allTasks = [];
let taskAssignedAccounts = [];
let taskAccounts = [
    {
        'image': '../img/profile.jpg',
        'name': 'Leon Groschek',
        'e-mail': 'leon.groschek12@gmail.com',
        'job': 'Software Developer'
    },
    {
        'image': '../img/Anastasiia.jpg',
        'name': 'Anastasiia Ünal',
        'e-mail': 'velika908@gmail.com',
        'job': 'Software Developer'
    },
    {
        'image': '../img/man.png',
        'name': 'Max Mustermann',
        'e-mail': 'mustermann@gmail.com',
        'job': 'Administrator'
    }
];

/* 
 * Load the calendar in Add-Task-Form with min date current day 
 */
function loadDate() {
    let currentDay = new Date().toISOString().split('T')[0];
    document.getElementById('taskDate').setAttribute('min', currentDay);
}


/* 
 * Generate a new Task with Date from the Task-Form and push the task in JSON-Array
 */
function createTask() {
    let title = document.getElementById('taskTitle').value;
    let category = document.querySelector('.taskCategory').value;
    let description = document.getElementById('taskDescription').value;
    let date = document.getElementById('taskDate').value;
    let urgency = document.querySelector('.taskUrgency').value;
    /* let assignedAccount = document.getElementById('taskAssignedAccount').value; */
    generateNewTask(title, category, description, date, urgency, /* assignedAccount */);
}


function generateNewTask(title, category, description, date, urgency, /* assignedAccount */) {
    let newTask = {
        'title': title,
        'category': category,
        'description': description,
        'date': date,
        'urgency': urgency,
        'assignedAccount': taskAssignedAccounts
    }
    allTasks.push(newTask);
    console.log(allTasks);
    cleanTaskForm();
}


/* 
 * Generate Task-Accounts (assigned to) and open the window with Account-Date (plus-image)
 */
function openAssignedAccounts() {
    document.getElementById('taskAccountsContainer').classList.remove('d-none');
    for (let i = 0; i < taskAccounts.length; i++) {
        let taskAccount = taskAccounts[i];
        document.getElementById('taskAccount').innerHTML += generateHTMLassignedAccounts(taskAccount);    
    }
}


function closeAssignedAccounts() {
    document.getElementById('taskAccountsContainer').style.display = 'none';
}


/* function chooseAssignedAccount() {
    chooseAccount = document.getElementById('taskAssignedAccount');
    taskAssignedAccounts.push(chooseAccount);
}
 */

function cleanTaskForm() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDescription').value = '';
}


/* 
 * Show alert-text when a task-account was clicked 
 */
function taskAccountCheckboxAlert(checkboxElem) {
    if (checkboxElem.checked) {
      alert ("You've add an employee to the task. Click on the arrow to continue the task.");
    }
  }