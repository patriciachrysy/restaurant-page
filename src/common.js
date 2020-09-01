function loadTitle(text) {
    let title = document.createElement('h1')
    title.innerHTML = text;
    return  title;
}

function loadYellowBar() {
    let div = document.createElement('div')
    div.className = 'underline';
    return div;
}

export { loadTitle, loadYellowBar};