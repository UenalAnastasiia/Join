function generateToDoAreaHTML(imgName, i) {
    return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${i})" class="toDoTaskBox margin-box" id="toDoTask${i}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${allTasks[i]["assignedAccount"]}">${allTasks[i]["assignedAccount"]}</span>
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

function generateInProgressAreaHTML(imgName, i) {
    return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${i})" class="toDoTaskBox margin-box" id="toDoTask${i}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${allTasks[i]["assignedAccount"]}">${allTasks[i]["assignedAccount"]}</span>
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

function generateTestingAreaHTML(imgName, i) {
    return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${i})" class="toDoTaskBox margin-box" id="toDoTask${i}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${allTasks[i]["assignedAccount"]}">${allTasks[i]["assignedAccount"]}</span>
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

function generateDoneAreaHTML(imgName, i) {
    return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${i})" class="toDoTaskBox margin-box" id="toDoTask${i}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${allTasks[i]["assignedAccount"]}">${allTasks[i]["assignedAccount"]}</span>
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