function loadTitle(text) {
  const title = document.createElement('h1');
  title.innerHTML = text;
  return title;
}

function loadYellowBar() {
  const div = document.createElement('div');
  div.className = 'underline';
  return div;
}

export { loadTitle, loadYellowBar };