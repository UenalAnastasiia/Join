setURL("https://gruppe-276.developerakademie.net/smallest_backend_ever");

let allTasks = [];
let currentDraggedElement;

const colors = {
  "Software Development": "radial-gradient(rgb(182 227 211), #8bc34a)",
  Sale: "radial-gradient(#ffeb3b, #ff9800)",
  Product: "radial-gradient(rgb(82 241 255), rgb(3 144 223))",
  Marketing: "radial-gradient(rgb(231 194 191), rgb(201 44 32 / 81%))",
};

async function init() {
  loadNavBar();
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem("allTasks"));
  console.log(allTasks);
  renderBoardToDo();
  renderBoardInProgress();
  renderBoardTesting();
  renderBoardDone();
}

function renderBoardToDo() {
  let toDo = allTasks.filter((a) => a["board"] == "toDo");
  let toDoArea = document.getElementById("toDo");
  toDoArea.innerHTML = "";
  for (let i = 0; i < toDo.length; i++) {
    let element = toDo[i];
    let imgName = toDo[i].imgName;
    toDoArea.innerHTML += generateToDoAreaHTML(imgName, element);
    categoryBgColors(element);
  }
}

function renderBoardInProgress() {
  let inProgress = allTasks.filter((a) => a.board == "inProgress");
  let inProgressArea = document.getElementById("inProgress");
  inProgressArea.innerHTML = "";
  for (let i = 0; i < inProgress.length; i++) {
    let element = inProgress[i];
    let imgName = inProgress[i].imgName;
    inProgressArea.innerHTML += generateInProgressAreaHTML(imgName, element);
    categoryBgColors(element);
  }
}

function renderBoardTesting() {
  let testing = allTasks.filter((a) => a.board == "testing");
  let testingArea = document.getElementById("testing");
  testingArea.innerHTML = "";
  for (let i = 0; i < testing.length; i++) {
    let element = testing[i];
    let imgName = testing[i].imgName;
    testingArea.innerHTML += generateTestingAreaHTML(imgName, element);
    categoryBgColors(element);
  }
}

function renderBoardDone() {
  let done = allTasks.filter((a) => a.board == "done");
  let doneArea = document.getElementById("done");
  doneArea.innerHTML = "";
  for (let i = 0; i < done.length; i++) {
    let element = done[i];
    let imgName = done[i].imgName;
    doneArea.innerHTML += generateDoneAreaHTML(imgName, element);
    categoryBgColors(element);
  }
}

function categoryBgColors(element) {
  const currentCategory = element.category;
  const color = colors[currentCategory];
  document.getElementById(`toDoTask${element.id}`).style.background = color;
}

function startDragging(id) {
  currentDraggedElement = id;
}

function openTaskBoard(element) {
    let openTask = document.getElementById('openTaskBoard');
    openTask.classList.remove('d-none');
    let imgName = allTasks[element].imgName;
    openTask.innerHTML = generateOpenTaskHTML(imgName, element);
}

function closeOpenTaskBoard() {
    let openTask = document.getElementById('openTaskBoard');
    openTask.classList.add('d-none');
}

async function moveTo(board) {  
  allTasks[currentDraggedElement].board = board;
  await backend.deleteItem("allTasks");
  await backend.setItem("allTasks", JSON.stringify(allTasks));
  removeHighlight(board);
  init();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function highlight(id) {
  document.getElementById(id).classList.add("dragoverHighlight");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("dragoverHighlight");
}

async function deleteTask(i) {
  await backend.deleteItem('allTasks'); 
  allTasks.splice(i, 1)
  await backend.setItem('allTasks', JSON.stringify(allTasks));
  init();
}
