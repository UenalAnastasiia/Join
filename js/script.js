"use strict"

let allTasks = [];

setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');

async function init() {
    loadNavBar();
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    console.log(allTasks);
}


async function deleteTask() {
    await backend.deleteItem('allTasks');
}


/* async function addUser() {
    users.push('John');
    await backend.setItem('users', JSON.stringify(users));
} */