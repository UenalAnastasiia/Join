"use strict"

let users = [];

setURL('http://gruppe-276.developerakademie.net/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

async function deleteUser(name) {
    await backend.deleteItem('users');
}

async function addUser() {
    users.push('John');
    await backend.setItem('users', JSON.stringify(users));
}