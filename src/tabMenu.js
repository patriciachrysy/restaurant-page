function loadTabMenu() {
    let sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    let logo = document.createElement('div');
    logo.className = 'logo';
    sidebar.appendChild(logo);

    let i=0;
    let tabs = ['home', 'menu', 'contact']
    while(i<tabs.length) {
      let button = loadMenuButton(tabs[i]);
      sidebar.appendChild(button);
      i += 1;
    }

    let j = 0;
    let social = document.createElement('div');
    social.className = 'socials';
    let socials = ['facebook', 'twitter', 'instagram'];
    while(j<socials.length) {
        let button = loadSocialButton(socials[j]);
        social.appendChild(button);
        j += 1;
    }
    sidebar.appendChild(social);
    return sidebar
}

function loadMenuButton(name) {
    let button = document.createElement('a');
    button.href = '#';
    button.id = name;
    button.innerHTML = name.toUpperCase();
    return button;
}

function loadSocialButton(name) {
    let button = document.createElement('a');
    button.href = '#';
    let icon = document.createElement('i')
    icon.className = `lab la-${name}`;
    button.appendChild(icon);
    return button
}

export default loadTabMenu();