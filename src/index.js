import Home from './home';
import Menu from './menu';
import TabMenu from './tabMenu';
import Contact from './contact';


const content = document.getElementById('content');
content.appendChild(TabMenu);
content.appendChild(Home);

function switchTab(page) {
  content.innerHTML = '';
  content.appendChild(TabMenu);
  content.appendChild(page);
}

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', () => {
  switchTab(Home);
});

const menuTab = document.getElementById('menu');
menuTab.addEventListener('click', () => {
  switchTab(Menu);
});

const contactTab = document.getElementById('contact');
contactTab.addEventListener('click', () => {
  switchTab(Contact);
});
