let allTasks = [];
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
]

/* 
 * Load the calendar in Add-Task-Form with min date current day 
 */
function loadDate() {
    let currentDay = new Date().toISOString().split('T')[0];
    document.getElementById('taskDate').setAttribute('min', currentDay);
}


function createTask() {
    let title = document.getElementById('taskTitle').value;
    let category = document.querySelector('.taskCategory').value;
    let description = document.getElementById('taskDescription').value;
    let date = document.getElementById('taskDate').value;
    let urgency = document.querySelector('.taskUrgency').value;
    let assignedAccount = document.getElementById('taskAssignedAccount').value;
    generateNewTask(title, category, description, date, urgency, assignedAccount);
}


function generateNewTask(title, category, description, date, urgency, assignedAccount) {
    let newTask = {
        'title': title,
        'category': category,
        'description': description,
        'date': date,
        'urgency': urgency,
        'assignedAccount': assignedAccount
    }
    allTasks.push(newTask);
    console.log(allTasks);
    cleanTaskForm();
}


function openTaskAccounts() {
    document.getElementById('taskAccountsContainer').classList.remove('d-none');
    for (let i = 0; i < taskAccounts.length; i++) {
        let taskAccount = taskAccounts[i];
        document.getElementById('taskAccount').innerHTML += generateHTMLTaskAccounts(taskAccount);    
    }
}


function closeTaskAccounts() {
    document.getElementById('taskAccountsContainer').classList.add('d-none');
}


function cleanTaskForm() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDescription').value = '';
}
