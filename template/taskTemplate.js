function generateHTMLTaskAccounts(taskAccount) {
    return  /*html*/ `
<!--         <div class="taskAccountsContainer">
            <div class="taskAccountsWindow">
                <div class="close-taskAccounts-box">
                    <img onclick="closeDetails()" class="backlogBackIcon" src="../img/back.png">
                </div>
                <div class="taskAccountsList">
                    <div class="taskAccountMan">
                        <div class="taskAccountManImg">
                            <img src="${taskAccount['image']}">
                        </div>
                        <div class="taskAccountManInfo">
                            <span>${taskAccount['name']}</span>
                            <span>${taskAccount['e-mail']}</span>
                        </div>
                        <div class="taskAccountManJob">
                            <span>${taskAccount['job']}</span>
                        </div>
                    </div>

                    <div class="taskAccountWoman">
                        <div class="taskAccountWomanImg">
                            <img src="../img/Anastasiia.jpg">
                        </div>
                        <div class="taskAccountWomanInfo">
                            <span title="Leon Groschek">Anastasiia Ünal</span>
                            <span title="leon.groschek12@gmail.com">velika908@gmail.com</span>
                        </div>
                        <div class="taskAccountWomanJob">
                            <span>Software Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    `;
}