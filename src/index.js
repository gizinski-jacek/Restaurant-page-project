import * as menu from './menu'
import loadHomePage from './home'
import loadContactPage from './contact'



const createHeader = () => {
    const main = document.createElement('div');
    main.classList.add('header');

    const header1 = document.createElement('h1');
    header1.textContent = 'Pizzaliano';

    const header2 = document.createElement('h2');
    header2.setAttribute('style', 'white-space: pre;');
    header2.textContent = 'The Best Place \nFor Your Pizza Needs';

    main.appendChild(header1);
    main.appendChild(header2);

    return main;
};

const createNavBar = () => {
    const navBar = document.createElement('div');
    navBar.id = 'navBar';

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('homeBtn');
    homeBtn.setAttribute('type', 'button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        loadHomePage();
    })

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    menuBtn.textContent = 'Menu';

    const dropdownContainer = document.createElement('div');
    dropdownContainer.id = 'dropCont';
    dropdownContainer.classList.add('dropCont');

    const pizza = document.createElement('button');
    pizza.classList.add('pizza');
    pizza.textContent = 'Pizza';
    pizza.addEventListener('click', () => {
        menu.pizzaMenu();
    })

    const drinks = document.createElement('button');
    drinks.classList.add('drinks');
    drinks.textContent = 'Drinks';
    drinks.addEventListener('click', () => {
        menu.drinksMenu();
    })

    const empty = document.createElement('button');
    empty.classList.add('emptyMenu');
    empty.textContent = 'Empty';
    empty.addEventListener('click', () => {
        menu.emptyMenu();
    })

    dropdownContainer.appendChild(pizza);
    dropdownContainer.appendChild(drinks);
    dropdownContainer.appendChild(empty);
    menuContainer.appendChild(menuBtn);
    menuContainer.appendChild(dropdownContainer);

    homeBtn.addEventListener('click', () => {
        loadHomePage();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn');
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

const createContainer = () => {
    const container = document.createElement('div');
    container.id = 'mainContainer';
    container.textContent = '';

    return container;
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer')
    footer.textContent = 'Footer';

    return footer;
}

const loadSite = (() => {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createNavBar());
    content.appendChild(createContainer());
    content.appendChild(createFooter());
    loadHomePage();
})();