function generateHTMLassignedAccounts(taskAccount) {
    return  /*html*/ `
        <div id="taskAssignedAccount" class="taskAccount">
            <input onchange="taskAccountCheckboxAlert(this)" class="cursor" type="checkbox" name="taskAccount" value="taskAccount" id="taskAccount"> 
            <label for="taskAccount">
                <div class="taskAccountImg margin-50 cursor">
                    <img src="${taskAccount['image']}">
                </div>
                    <div class="taskAccountInfo margin-50 cursor">
                        <span>${taskAccount['name']}</span>
                        <span>${taskAccount['e-mail']}</span>
                    </div>
                    <div class="taskAccountJob cursor">
                        <span>${taskAccount['job']}</span>
                    </div>
            </label>
        </div>
    `;
}