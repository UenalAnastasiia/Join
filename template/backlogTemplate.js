function generateBacklogAreaHTML(emailBacklog, imgName, i) {
  return /*html*/ `
              <div class="backlogContainerContent">
                <div class="backlogContent">
                    <div class="assignedTo">
                        <div class="categoryBgColor"></div>
                        <div>
                            <img class="backlogImg" src="../img/${imgName}.jpg" alt="">
                        </div>
                        <div class="assignedToProfile">
                            <span id="backlog-title" title="Leon Groschek">${allTasks[i]["assignedAccount"]}</span>
                            <span id="copyEmail" onclick="clickToCopy()" title="Click to copy">${emailBacklog}</span>
                        </div>
                    </div>
                    <div class="marketing">
                        <span>${allTasks[i]["category"]}</span>
                    </div>
                    <div class="details">
                        <button class="detailsBtn" onclick="openDetails(${i})">Details lesen</button>
                    </div>
                    <button class="deleteTaskBtn" onclick="deleteTask(${i})">Delete</button>
                </div>
            </div>`;
}

function openDetailsHTML(i) {
  return /*html*/ `
    <div id="backlogDetailsContainer" class="backlogDetailsContainer d-none">
        <div id="backlogDeatailsInfoBox" class="backlogDeatailsInfoBox">
            <!-- ====== CLOSE BUTTON ====== -->
            <div>
                <img onclick="closeDetails()" class="backlogBackIcon" src="../img/back.png" alt="">
            </div>
            <!-- ====== TITLE ====== -->
            <div class="openDetailContainer">
                <h3>Titel</h4>
                <input id="inputDetailContainer" autocomplete="off" minlength="3" type="text">
            </div>
            <!-- ====== CATEGORY ====== -->
            <div class="openDetailContainer">
                <h3>Category</h3>
                    <div class="list-choice">
                        <div id="taskCategory" class="list-choice-title"></div>
                            <div required class="list-choice-objects">
                                <label>
                                    <input class="taskCategory" value="Software Development" onclick="chooseCategoryBacklog('Software Development')" type="radio"/>
                                    <span>Software Development</span>
                                </label>
                                <label>
                                    <input class="taskCategory input-taskform" value="Marketing" onclick="chooseCategoryBacklog('Marketing')" type="radio"/>
                                    <span>Marketing</span>
                                </label>
                                <label>
                                    <input class="taskCategory input-taskform" value="Product" onclick="chooseCategoryBacklog('Product')" type="radio"/>
                                    <span>Product</span>
                                </label>
                                <label>
                                    <input class="taskCategory input-taskform" value="Sale" onclick="chooseCategoryBacklog('Sale')" type="radio"/>
                                    <span>Sale</span>
                                </label>
                            </div>
                        </div>
                    </div>
            <!-- ====== DESCRIPTON ====== -->
            <div class="openDetailContainer">
                <h3>Description</h4>
                <textarea required id="textareaDetailContainer"></textarea>
            </div>
            <!-- ====== DATE ====== -->
            <div class="openDetailContainer">
                <h3>DUE DATE</h3>
                <input class="input-taskform" required id="dateDetailContainer" type="date">
            </div>
            <!-- ====== URGENCY ====== -->
            <div class="openDetailContainer">
                <h3>URGENCY</h3>
                <div class="list-choice">
                    <div id="urgencyDetailContainer" class="list-choice-title"></div>
                    <div id="taskUrgency" class="list-choice-objects">
                        <label>
                            <input class="taskUrgency input-taskform" value="High" onclick="chooseUrgencyBacklog('High')" type="radio"/>
                            <span>High</span>
                        </label>
                        <label>
                            <input class="taskUrgency input-taskform" value="Medium" onclick="chooseUrgencyBacklog('Medium')" type="radio"/>
                            <span> Medium</span>
                        </label>
                        <label>
                            <input class="taskUrgency input-taskform" value="Low" onclick="chooseUrgencyBacklog('Low')" type="radio"/>
                            <span> Low</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- ====== ASSIGNED TO ====== -->
            <div class="openDetailContainer">
                <h3>Current assigned To</h4>
                <span required id="assignedToDetailContainer"></span><br>
                <span>If you want to change the Account, then please choose one of them below</span>
            </div>
            <!-- ====== ASSIGNED ACCOUNTS ====== -->
            <div class="openDetailContainer">
                    <h3>Assigned Accounts</h3>
                    <div class="taskForm-account">
                        <div class="taskAccount-box" id="workerBacklog-1"
                            onclick="chooseAssignedAccountBacklog(1, 'Leon Groschek', 'leon.groschek12@gmail.com')">
                            <div class="taskAccountImg cursor">
                                <img src="../img/Leon.jpg">
                            </div>
                            <div class="cursor">
                                <span>Leon Groschek</span><br><br>                     
                                <span>Software Developer</span>
                            </div>
                        </div>
                        <div class="taskAccount-box" id="workerBacklog-2"
                            onclick="chooseAssignedAccountBacklog(2, 'Anastasiia Ünal', 'anastasiia.ünal@gmail.com')">
                            <div class="taskAccountImg cursor">
                                <img src="../img/Anastasiia.jpg">
                            </div>
                            <div class="cursor">
                                <span>Anastasiia Ünal</span><br><br>
                                <span>Software Developer</span>
                            </div>
                        </div>
                        <div class="taskAccount-box" id="workerBacklog-3"
                            onclick="chooseAssignedAccountBacklog(3, 'Max Mustermann', 'max.mustermann@gmail.com')">
                            <div class="taskAccountImg cursor">
                                <img src="../img/man.png">
                            </div>
                            <div class="cursor">
                                <span>Max Mustermann</span><br><br>
                                <span>Administrator</span>
                            </div>
                        </div>
                    </div>
            </div>
            <div>
                <button class="editBacklog" onclick="openDetailGetEditContent(${i})">Edit this Task</button>
            </div>
    </div> `;
}
