function generateToDoAreaHTML(imgName, element) {
    return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
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
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
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
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
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
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
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