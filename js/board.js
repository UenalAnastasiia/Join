setURL('https://gruppe-276.developerakademie.net/smallest_backend_ever');

let allTasks = [];

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
                <div class="toDoTaskBox margin-box" id="toDoTask${i}">
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