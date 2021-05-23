import * as menu from './menu'
import loadHomePage from './home'
import loadContactPage from './contact'



const createHeader = () => {
    const head = document.createElement('div');
    head.id = 'header';

    const header1 = document.createElement('h1');
    header1.textContent = 'Pizzaliano';

    const header2 = document.createElement('h2');
    header2.setAttribute('style', 'white-space: pre;');
    header2.textContent = 'The Best Place \nFor Your Pizza Needs';

    head.appendChild(header1);
    head.appendChild(header2);

    return head;
};

const createNavBar = () => {
    const navBar = document.createElement('div');
    navBar.id = 'navBar';

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('type', 'button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        loadHomePage();
    })

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';

    const foodsContainer = document.createElement('div');
    foodsContainer.classList.add('foodsContainer');

    const drinks = document.createElement('button');
    drinks.textContent = 'Drinks';
    drinks.addEventListener('click', () => {
        menu.loadDrinksPage();
    })
    
    const pizza = document.createElement('button');
    pizza.textContent = 'Pizza';
    pizza.addEventListener('click', () => {
        menu.loadPizzaPage();
    })

    const desserts = document.createElement('button');
    desserts.textContent = 'Desserts';
    desserts.addEventListener('click', () => {
        menu.loadDessertsPage();
    })

    foodsContainer.appendChild(drinks);
    foodsContainer.appendChild(pizza);
    foodsContainer.appendChild(desserts);
    menuContainer.appendChild(menuBtn);
    menuContainer.appendChild(foodsContainer);

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('type', 'button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        loadContactPage();
    })

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuContainer);
    navBar.appendChild(contactBtn);

    return navBar;
}

const createMainContainer = () => {
    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';
    mainContainer.textContent = '';

    return mainContainer;
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.textContent = 'Footer';

    return footer;
}

const loadSite = (() => {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createMainContainer());
    content.appendChild(createFooter());
    loadHomePage();
})();
