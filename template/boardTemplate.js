function generateToDoAreaHTML(imgName, element) {
  return /*html*/ `
                <div onclick="openTaskBoard(${element.id})" draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                          <span>Description: ${element["description"]}</span>
                      </div>
                  </div>
              </div>
              `;
}

function generateInProgressAreaHTML(imgName, element) {
  return /*html*/ `
                <div onclick="openTaskBoard(${element.id})" draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                          <span>Description: ${element["description"]}</span>
                      </div>
                  </div>
              </div>
              `;
}

function generateTestingAreaHTML(imgName, element) {
  return /*html*/ `
                <div onclick="openTaskBoard(${element.id})" draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                          <span>Description: ${element["description"]}</span>
                      </div>
                  </div>
              </div>
              `;
}

function generateDoneAreaHTML(imgName, element) {
  return /*html*/ `
                <div onclick="openTaskBoard(${element.id})" draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div>
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                          <span>Description: ${element["description"]}</span>
                      </div>
                  </div>
              </div>
              `;
}

function generateOpenTaskHTML(imgName, element) {
  return /*html*/ `
              <div class="openTaskBoardContent">
                <img onclick="closeOpenTaskBoard()" class="boardBackIcon" src="../img/back.png">
                <div class="openTaskBoardLeftRight">
                  <div class="openTaskLeft">
                    <div class="openTaskLeftImg">
                       <img src="../img/${imgName}.jpg">
                    </div>
                    <div class="openTaskLeftWorker">
                      <div class="openTaskLeftWorkerSize">
                        <span>Mitarbeiter:</span> 
                        <span>${allTasks[element].assignedAccount}</span>
                      </div>
                      <div class="openTaskLeftWorkerSize">
                        <span>Beruf: </span>
                        <span>${allTasks[element].category}</span>
                      </div>
                      <div class="openTaskLeftWorkerSize">
                        <span>E-Mail: </span>
                        <span>${allTasks[element].mail}</span>
                      </div>
                    </div>
                  </div>
                  <div class="openTaskRight"></div>
                </div>
              </div>
            `;
}
