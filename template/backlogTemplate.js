function generateBacklogAreaHTML(i) {
  return /*html*/ `
              <div class="backlogContainerContent">
                <div class="backlogContent">
                    <div class="assignedTo">
                        <div class="categoryBgColor"></div>
                        <div>
                            <img class="backlogImg" src="../img/profile.jpg" alt="">
                        </div>
                        <div class="assignedToProfile">
                            <span id="backlog-title" title="Leon Groschek">${allTasks[i]["assignedAccount"]}</span>
                            <span id="copyEmail" onclick="clickToCopy()" title="Click to copy">leon.groschek12@gmail.com</span>
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

function openDetailsHTML() {
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
                                    <input class="taskCategory" value="Software Development" id="category-1"
                                        onclick="chooseCategory(1, 'Software Development')" type="radio" />
                                    <span>Software Development</span>
                                </label>
                                <label>
                                    <input class="taskCategory input-taskform" value="Marketing" id="category-2"
                                        onclick="chooseCategory(2, 'Marketing')" type="radio" />
                                    <span>Marketing</span>
                                </label>
                                <label>
                                    <input class="taskCategory input-taskform" value="Product" id="category-3"
                                        onclick="chooseCategory(3, 'Product')" type="radio" />
                                    <span>Product</span>
                                </label>
                                <label>
                                    <input class="taskCategory input-taskform" value="Sale" id="category-4"
                                        onclick="chooseCategory(4, 'Sale')" type="radio" />
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
                                <input class="taskUrgency input-taskform" value="High" id="urgency-1"
                                    onclick="chooseUrgency(1, 'High')" type="radio" />
                                <span>High</span>
                            </label>
                            <label>
                                <input class="taskUrgency input-taskform" value="Medium" id="urgency-2"
                                    onclick="chooseUrgency(2, 'Medium')" type="radio" />
                                <span> Medium</span>
                            </label>
                            <label>
                                <input class="taskUrgency input-taskform" value="Low" id="urgency-3"
                                    onclick="chooseUrgency(3, 'Low')" type="radio" />
                                <span> Low</span>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- ====== ASSIGNED ACCOUNT ====== -->
                <div class="openDetailContainer">
                        <h3>ASSIGNED TO</h3>
                        <div class="taskForm-account">
                            <div class="taskAccount-box" id="worker-1"
                                onclick="chooseAssignedAccount(1, 'Leon Groschek')">
                                <div class="taskAccountImg cursor">
                                    <img src="../img/profile.jpg">
                                </div>
                                <div class="cursor">
                                    <span>Leon Groschek</span>
                                    <br>
                                    <br>
                                    <span>Software Developer</span>
                                </div>
                            </div>

                            <div class="taskAccount-box" id="worker-2"
                                onclick="chooseAssignedAccount(2, 'Anastasiia Ünal')">
                                <div class="taskAccountImg cursor">
                                    <img src="../img/Anastasiia.jpg">
                                </div>
                                <div class="cursor">
                                    <span>Anastasiia Ünal</span>
                                    <br>
                                    <br>
                                    <span>Software Developer</span>
                                </div>
                            </div>

                            <div class="taskAccount-box" id="worker-3"
                                onclick="chooseAssignedAccount(3, 'Max Mustermann')">
                                <div class="taskAccountImg cursor">
                                    <img src="../img/man.png">
                                </div>
                                <div class="cursor">
                                    <span>Max Mustermann</span>
                                    <br>
                                    <br>
                                    <span>Administrator</span>
                                </div>
                            </div>
                        </div>
            </div>
        </div> `;
}
