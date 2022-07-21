let taskAssignedAccounts = [];
let worker;
let taskCategory;
let taskUrgency;
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

setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');


let allTasks = [];


async function init() {
    loadNavBar();
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
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
        generateNewTask(title, category, description, date, urgency, assignedAccount);
        alert('You have create a task! You can find it in Backlog.');
}


/** 
 * Generate a Task, push the task in JSON-Array and clean the task-form
 */
async function generateNewTask(title, category, description, date, urgency, assignedAccount) {
    let newTask = {
        'title': title,
        'category': category,
        'description': description,
        'date': date,
        'urgency': urgency,
        'assignedAccount': assignedAccount
    }
    allTasks.push(newTask);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    cleanTaskForm();
    init();
}


function chooseAssignedAccount(position, name) {
    document.getElementById('worker-' + position).style.border = '1px solid red'; 
    worker = name;
}


function chooseCategory(position, name) {
    document.getElementById('category-' + position).style.background = 'grey';
    taskCategory = name;
}


function chooseUrgency(position, name) {
    document.getElementById('urgency-' + position).style.background = 'grey';
    taskUrgency = name;
}


function cleanTaskForm() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('worker-1').style.border = '1px solid white'; 
    document.getElementById('worker-2').style.border = '1px solid white'; 
    document.getElementById('worker-3').style.border = '1px solid white'; 
}
