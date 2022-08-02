function generateToDoAreaHTML(imgName, element) {
  return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div class="onclickOpenTaskBoard" onclick="openTaskBoard(${element.id})">
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt=""> 
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                      </div>
                  </div>
                  <img onclick="deleteBoardTask(${element.id})" class="deleteBtn" src="../img/delete.png">
              </div>
              `;
}

function generateInProgressAreaHTML(imgName, element) {
  return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div class="onclickOpenTaskBoard" onclick="openTaskBoard(${element.id})">
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                      </div>
                  </div>
                  <img onclick="deleteBoardTask(${element.id})" class="deleteBtn" src="../img/delete.png">
              </div>
              `;
}

function generateTestingAreaHTML(imgName, element) {
  return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div class="onclickOpenTaskBoard" onclick="openTaskBoard(${element.id})">
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                      </div>
                  </div>
                  <img onclick="deleteBoardTask(${element.id})" class="deleteBtn" src="../img/delete.png">
              </div>
              `;
}

function generateDoneAreaHTML(imgName, element) {
  return /*html*/ `
                <div draggable="true" ondragstart="startDragging(${element.id})" class="toDoTaskBox margin-box" id="toDoTask${element.id}">
                  <div class="onclickOpenTaskBoard" onclick="openTaskBoard(${element.id})">
                      <div class="toDoTaskHeader">
                        <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        <span id="backlog-title" title="${element["assignedAccount"]}">${element["assignedAccount"]}</span>
                      </div>
                      <div class="toDoTaskTitle">
                          <span>Task: ${element["title"]}</span>
                          <span>Deadline: ${element["date"]}</span>
                      </div>
                  </div>
                  <img onclick="deleteBoardTask(${element.id})" class="deleteBtn" src="../img/delete.png">
              </div>
              `;
}

function generateOpenTaskHTML(imgName, element) {
  return /*html*/ `
              <div class="openTaskBoardContent">
                <img onclick="closeOpenTaskBoard()" class="boardBackIcon" src="../img/back.png">
                <div class="openTaskBoardLeftRight">
                  <!-- ====== LEFT ====== -->
                  <div class="openTaskLeft">
                    <div class="openTaskLeftImg">
                       <img src="../img/${imgName}.jpg">
                    </div>
                    <div class="openTaskLeftContact">
                      <h3>Kontakt</h3>
                      <ul>
                        <li>
                          <span class="gif class="gif""><img src="../gifs/id.gif" alt=""></span>
                          <span>${allTasks[element].assignedAccount}</span>
                        </li>
                        <li>
                          <span class="gif"><img src="../gifs/workplace.gif"" alt=""></span>
                          <span>${allTasks[element].category}</span>
                        </li>
                        <li>
                          <span class="gif"><img src="../gifs/mailing.gif"" alt=""></span>
                          <a href="mailto:${allTasks[element].mail}" class="openTaskMail">${allTasks[element].mail}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                    <!-- ====== RIGHT ====== -->
                    <div class="openTaskRight">
                      <div class="openTaskRightContent">
                        <h3><u>Title</u></h3>
                        <span>${allTasks[element].title}</span>
                      </div>
                      <div class="openTaskRightContent">
                        <h3><u>Category</u></h3>
                        <span>${allTasks[element].category}</span>
                      </div>
                      <div class="openTaskRightContent">
                        <h3><u>Description</u></h3>
                        <span>${allTasks[element].description}</span>
                      </div>
                      <div class="openTaskRightContent">
                        <h3><u>Due</u>-Date</h3>
                        <span>${allTasks[element].date}</span>
                      </div>
                      <div class="openTaskRightContent">
                        <h3><u>Urgency</u></h3>
                        <span>${allTasks[element].urgency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
}

function toastHTML() {
  return /*html*/ `
  <!-- Toast Container -->
  <div id="toastContainer" class="toastContainer">
     <strong>Success</strong>
     Your task has been deleted!
  </div>`;
}
