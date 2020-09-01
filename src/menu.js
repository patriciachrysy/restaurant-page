import { loadTitle, loadYellowBar } from './common';

function listDishes(dish) {
  const inDiv = document.createElement('div');
  const image = document.createElement('img');
  image.src = dish.url;
  inDiv.appendChild(image);
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML = dish.name;
  inDiv.appendChild(footer);
  return inDiv;
}

function loadDailyMenu() {
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';

  const title = document.createElement('h1');
  title.className = 'menu-header';
  const date = new Date();
  const options = {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
  };
  title.innerHTML = `${date.toLocaleDateString('en-US', options)} menu:`;
  mainContent.appendChild(title);

  const dailyMenu = document.createElement('section');
  dailyMenu.className = 'daily-menu';

  const dishesGroup = [
    {
      categ: 'Entree',
      dishes: [
        { url: './images/salad.jpg', name: 'Fresh cucumber salad' },
        { url: './images/abacha.jpg', name: 'Nigerian Abacha salad' },
        { url: './images/potato.jpg', name: 'South African Patato salad' },
      ],
    },
    {
      categ: 'Main dish',
      dishes: [
        { url: './images/okro.jpg', name: 'Ghanaian Okro Soup' },
        { url: './images/achu.jpg', name: 'Cameroonain royal achu' },
        { url: './images/nyama.jpg', name: 'Nyama Choma(Kenya)' },
        { url: './images/koki.jpeg', name: 'Koki beans cake' },
        { url: './images/ogbono.jpg', name: 'Nigerian Ogbono soup' },
        { url: './images/jolof.jpeg', name: 'Classic Jollof' },
      ],
    },
    {
      categ: 'Dessert',
      dishes: [
        { url: './images/puf.jpg', name: 'Banana Puf-Puf' },
        { url: './images/cake.jpg', name: 'Pinaple cake' },
        { url: './images/kossam.jpg', name: 'Dakere(homade fresh yogurt)' },
      ],
    },
    {
      categ: 'Drinks',
      dishes: [
        { url: './images/bissap.jpg', name: 'Bissap' },
        { url: './images/baobab.jpg', name: 'Baobab Juice' },
        { url: './images/corosol.jpeg', name: 'Soursop Juice' },
      ],
    },
  ];

  dishesGroup.forEach(element => {
    const div = document.createElement('div');
    div.className = 'title';
    div.appendChild(loadTitle(element.categ));
    div.appendChild(loadYellowBar());
    dailyMenu.appendChild(div);
    const menuDishes = document.createElement('div');
    menuDishes.className = 'menu-dishes';
    element.dishes.forEach(dish => {
      menuDishes.appendChild(listDishes(dish));
    });
    dailyMenu.appendChild(menuDishes);
  });

  mainContent.appendChild(dailyMenu);

  return mainContent;
}


export default loadDailyMenu();