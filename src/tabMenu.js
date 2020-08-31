function loadTabMenu() {
    let sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    let logo = document.createElement('div');
    logo.className = 'logo';
    sidebar.appendChild(logo);

    let i=0;
    let tabs = ['home', 'menu', 'contact']
    while(i<=tabs.length) {
      let button = loadMenuButton(tabs[i]);
      sidebar.appendChild(button);
      i += 1;
    }

    let social = document.createElement('div');
    social.className = 'socials';
    let socials = ['facebook', 'twitter', 'instagram'];
    while(i<=socials.length) {
        let button = loadSocialButton(tabs[i]);
        social.appendChild(button);
        i += 1;
    }
    sidebar.appendChild(social);

    return sidebar
}

function loadMenuButton(name) {
    let button = document.createElement('a');
    button.href = '#';
    button.className = id;
    button.innerHTML = name.toUppercase();
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