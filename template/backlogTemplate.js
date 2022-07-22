function generateBacklogAreaHTML(task) {
    return /*html*/ `
              <div class="backlogContainerContent">
                <div class="backlogContent">
                    <div class="assignedTo">
                        <div class="categoryBgColor"></div>
                        <div>
                            <img class="backlogImg" src="../img/profile.jpg" alt="">
                        </div>
                        <div class="assignedToProfile">
                            <span id="backlog-title" title="Leon Groschek">${task['assignedAccount']}</span>
                            <span id="copyEmail" onclick="clickToCopy()" title="Click to copy">leon.groschek12@gmail.com</span>
                        </div>
                    </div>
                    <div class="marketing">
                        <span>${task['category']}</span>
                    </div>
                    <div class="details">
                        <button class="detailsBtn" onclick="openDetails()">Details lesen</button>
                    </div>
                </div>
            </div>
<!--     <div>
      <h2>title: ${task['title']}</h2>
    </div>
    <div>
      <h2>category: ${task['category']}</h2>
    </div>
    <div>
      <h2>description: ${task['description']}</h2>
    </div>
    <div>
      <h2>date: ${task['date']}</h2>
    </div>
    <div>
      <h2>urgency: ${task['urgency']}</h2>
    </div>
    <div>
      <h2>assignedAccount: ${task['assignedAccount']}</h2>
    </div> -->
    `;
}


function openDetailsHTML(details) {
    return /*html*/ `
    <div id="backlogDetailsContainer" class="backlogDetailsContainer d-none">
        <div id="backlogDeatailsInfoBox" class="backlogDeatailsInfoBox">
            <img onclick="closeDetails()" class="backlogBackIcon" src="../img/back.png" alt="">
            <span>${details}</span>
            <div> `;
}