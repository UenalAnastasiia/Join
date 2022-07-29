async function loadNavBar() {
    await includeHTML();
}


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


/* 
 * Responsive Menu
 */
function openResponsiveMenu() {
    document.getElementById('menu-links').classList.remove('d-none');
    document.getElementById('resp-header').classList.add('d-none')
    
}

function closeResponsiveMenu() {
    document.getElementById('menu-links').classList.add('d-none');
    document.getElementById('resp-header').classList.remove('d-none') 
}
