let allTasks = [];


/* 
 * Load the calendar in Add-Task-Form with min date current day 
 */
function loadDate() {
    let currentDay = new Date().toISOString().split('T')[0];
    document.getElementById('taskDate').setAttribute('min', currentDay);
}


function createTask() {
    let title = document.getElementById('taskTitle').value;
    let category = document.getElementById('taskCategory').value;
    let description = document.getElementById('taskDescription').value;
    let date = document.getElementById('taskDate').value;
    let urgency = document.getElementById('taskUrgency').value;
    let assignedAccount = document.getElementById('taskAssignedAccount').value;
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
}
