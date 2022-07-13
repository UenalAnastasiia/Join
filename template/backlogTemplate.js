function openDetailsHTML(details) {
    return /*html*/ `
    <div id="backlogDetailsContainer" class="backlogDetailsContainer d-none">
        <div id="backlogDeatailsInfoBox" class="backlogDeatailsInfoBox">
            <img onclick="closeDetails()" class="backlogBackIcon" src="../img/back.png" alt="">
            <span>${details}</span>
        </div>
    </div> `;
}