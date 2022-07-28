setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');

let allTasks = [];

const colors = {
    'Software Development': '#0080006e',
    'Sale': '#ffa50066',
    'Product': '#0000ff80',
    'Marketing': '#ff00005e',
}


async function init() {
    loadNavBar();
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks'));
    console.log(allTasks);
    renderBoardToDo()
}


function renderBoardToDo() {
    let toDoArea = document.getElementById('toDo');
    toDoArea.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {
        let imgName = allTasks[i].imgName;
        toDoArea.innerHTML += generateToDoAreaHTML(imgName, i);
        categoryBgColors(i);
    }
}


function categoryBgColors(i) {
    const currentCategory = allTasks[i].category;
    const color = colors[currentCategory]
    document.getElementById(`toDoTask${i}`).style.background = color;
}


function generateToDoAreaHTML(imgName, i) {
    return /*html*/ `
                <div class="toDoTaskBox" id="toDoTask${i}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="Leon Groschek">${allTasks[i]["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${allTasks[i]["title"]}</span>
                          <span>Deadline: ${allTasks[i]["date"]}</span>
                          <span>Description: ${allTasks[i]["description"]}</span>
                      </div>
                  </div>
              </div>
              `;
}