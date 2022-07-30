setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');

let allTasks = [];
let currentDraggedElement;

const colors = {
    'Software Development': 'radial-gradient(rgb(182 227 211), #8bc34a)', 
    'Sale': 'radial-gradient(#ffeb3b, #ff9800)',
    'Product': 'radial-gradient(rgb(82 241 255), rgb(3 144 223))',
    'Marketing': 'radial-gradient(rgb(231 194 191), rgb(201 44 32 / 81%))',
}


async function init() {
    loadNavBar();
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks'));
    console.log(allTasks);
    renderBoardToDo();
    renderBoardInProgress();
    renderBoardTesting();
    renderBoardDone();
}


function renderBoardToDo() {
    let toDo  = allTasks.filter(a => a['board'] == 'toDo');
    let toDoArea = document.getElementById('toDo')
    toDoArea.innerHTML = '';
    for (let i = 0; i < toDo.length; i++) {
        let imgName = toDo[i].imgName;
        toDoArea.innerHTML += generateToDoAreaHTML(imgName, i);
        categoryBgColors(i);
    }
}

function renderBoardInProgress() {
    let inProgress  = allTasks.filter(a => a.board == 'inProgress');
    let inProgressArea = document.getElementById('inProgress');
    inProgressArea.innerHTML = '';
    for (let i = 0; i < inProgress.length; i++) {
        let imgName = inProgress[i].imgName;
        inProgressArea.innerHTML += generateInProgressAreaHTML(imgName, i);
        categoryBgColors(i);
    }
}

function renderBoardTesting() {
    let testing  = allTasks.filter(a => a.board == 'testing');
    let testingArea = document.getElementById('testing');
    testingArea.innerHTML = '';
    for (let i = 0; i < testing.length; i++) {
        let imgName = testing[i].imgName;
        testingArea.innerHTML += generateTestingAreaHTML(imgName, i);
        categoryBgColors(i);
    }
}

function renderBoardDone() {
    let done  = allTasks.filter(a => a.board == 'done');
    let doneArea = document.getElementById('done');
    doneArea.innerHTML = '';
    for (let i = 0; i < done.length; i++) {
        let imgName = done[i].imgName;
        doneArea.innerHTML += generateDoneAreaHTML(imgName, i);
        categoryBgColors(i);
    }
}

function categoryBgColors(i) {
        const currentCategory = allTasks[i].category;
        const color = colors[currentCategory]
        document.getElementById(`toDoTask${i}`).style.background = color;
}

function startDragging(i) {
    currentDraggedElement = i;
}

async function moveTo(board) {
    allTasks[currentDraggedElement].board = board;
    await backend.deleteItem('allTasks'); 
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    init();
}

function allowDrop(ev) {
    ev.preventDefault();
  }