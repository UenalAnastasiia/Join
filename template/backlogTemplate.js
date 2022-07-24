function generateBacklogAreaHTML(i) {
    return /*html*/ `
              <div class="backlogContainerContent">
                <div class="backlogContent">
                    <div class="assignedTo">
                        <div class="categoryBgColor"></div>
                        <div>
                            <img class="backlogImg" src="../img/1.jpg" alt="">
                        </div>
                        <div class="assignedToProfile">
                            <span id="backlog-title" title="Leon Groschek">${allTasks[i]['assignedAccount']}</span>
                            <span id="copyEmail" onclick="clickToCopy()" title="Click to copy">leon.groschek12@gmail.com</span>
                        </div>
                    </div>
                    <div class="marketing">
                        <span>${allTasks[i]['category']}</span>
                    </div>
                    <div class="details">
                        <button class="detailsBtn" onclick="openDetails()">Details lesen</button>
                    </div>
                    <button class="deleteTaskBtn" onclick="deleteTask(${i})">Delete</button>
                </div>
            </div>`;
}


function openDetailsHTML(details) {
    return /*html*/ `
    <div id="backlogDetailsContainer" class="backlogDetailsContainer d-none">
        <div id="backlogDeatailsInfoBox" class="backlogDeatailsInfoBox">
            <img onclick="closeDetails()" class="backlogBackIcon" src="../img/back.png" alt="">
            <span>${details}</span>
            <div> `;
}