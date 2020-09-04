function loadMenuButton(name) {
  const button = document.createElement('a');
  button.href = '#';
  button.id = name;
  button.innerHTML = name.toUpperCase();
  return button;
}

function loadSocialButton(name) {
  const button = document.createElement('a');
  button.href = '#';
  const icon = document.createElement('i');
  icon.className = `lab la-${name}`;
  button.appendChild(icon);
  return button;
}

function loadTabMenu() {
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';

  const logo = document.createElement('div');
  logo.className = 'logo';
  sidebar.appendChild(logo);

  let i = 0;
  const tabs = ['home', 'menu', 'contact'];
  while (i < tabs.length) {
    const button = loadMenuButton(tabs[i]);
    sidebar.appendChild(button);
    i += 1;
  }

  let j = 0;
  const social = document.createElement('div');
  social.className = 'socials';
  const socials = ['facebook', 'twitter', 'instagram'];
  while (j < socials.length) {
    const button = loadSocialButton(socials[j]);
    social.appendChild(button);
    j += 1;
  }
  sidebar.appendChild(social);
  return sidebar;
}


export default loadTabMenu();