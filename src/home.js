import  { loadTitle, loadYellowBar} from './common';

function displayHome() {

    let mainContent = document.createElement('div')
    mainContent.className = 'main-content';

    let welcome = document.createElement('section')
    welcome.className = 'welcome';
    let title = document.createElement('h1')
    title.innerHTML = `Welcome to <span>The Delish</span>,<br> we bring the best of Africa in your meals.`;
    welcome.appendChild(title);
    mainContent.appendChild(welcome);

    let cuisine = document.createElement('section')
    cuisine.className = 'cuisine';
    let cuisines = [
        {name: 'The best ingredients', icon: 'fish'},
        {name: 'The best cooks', icon: 'concierge-bell'},
        {name: 'A breathtaking entviroment', icon: 'cocktail'}
    ];
    cuisines.forEach(element => {
        let res = loadCuisines(element.name, element.icon);
        cuisine.appendChild(res);
    });
    mainContent.appendChild(cuisine);

    let dishes = document.createElement('section')
    dishes.className = 'dishes';
    dishes.appendChild(loadTitle('Get the real spicy and original african taste that will make you travel'));
    dishes.appendChild(loadYellowBar());
    let rowOne = document.createElement('div')
    rowOne.className = 'first-row';
    rowOne.appendChild(loadDishes('Nigerian spicy soups', 'nigeria'));
    rowOne.appendChild(loadDishes('Camerounian fresh seafood', 'cameroun'));
    dishes.appendChild(rowOne);
    let rowTwo = document.createElement('div')
    rowTwo.className = 'second-row';
    rowTwo.appendChild(loadDishes('Kenyan king barbecue', 'kenya'));
    rowTwo.appendChild(loadDishes('African Fufu feast', 'fufu'));
    dishes.appendChild(rowTwo);
    mainContent.appendChild(dishes);

    let book = document.createElement('section')
    book.className = 'booking';
    book.appendChild(loadTitle('Wanna give a try? Book your table today!'));
    book.appendChild(loadYellowBar());
    let row = document.createElement('div')
    row.className = 'first-row';
    let link = document.createElement('a')
    link.innerHTML = 'Book a table';
    row.appendChild(link);
    book.appendChild(row);
    mainContent.appendChild(book);

    return mainContent;

}

function loadCuisines(text, iconName) {
    let div = document.createElement('div');

    let link = document.createElement('a');
    link.href = '#';
    let icon = document.createElement('i')
    icon.className = `las la-${iconName}`;
    link.appendChild(icon);
    div.appendChild(link);

    let title = document.createElement('h2');
    title.innerHTML = text;
    div.appendChild(title);

    return div;
}

function loadDishes(text, country) {
    let div = document.createElement('div')
    div.className = country;
    let title = document.createElement('h2')
    title.innerHTML = text;
    div.appendChild(title);
    return div;
}

export default displayHome();