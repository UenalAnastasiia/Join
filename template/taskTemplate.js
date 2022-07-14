function generateHTMLTaskAccounts(taskAccount) {
    return  /*html*/ `
        <div class="taskAccount">
            <div class="taskAccountImg">
                <img src="${taskAccount['image']}">
            </div>
            <div class="taskAccountInfo">
                <span>${taskAccount['name']}</span>
                <span>${taskAccount['e-mail']}</span>
            </div>
            <div class="taskAccountJob">
                <span>${taskAccount['job']}</span>
            </div>
        </div>
    `;
}