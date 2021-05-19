import loadHomePage from './home'
import loadMenuPage from './menu'
import loadContactPage from './contact'

const createHeader = () => {
    const header1 = document.createElement('h1');
    header1.classList.add('header');
    header1.textContent = 'Pizzaliano';

    const header2 = document.createElement('h2');
    header2.textContent = 'The Best Place For Your Pizza Needs';
    header1.appendChild(header2);

    return header1;
};

const createNavBar = () => {
    const navBar = document.createElement('div');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('homeBtn');
    homeBtn.setAttribute('type', 'button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        loadHomePage();
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menuBtn');
    menuBtn.setAttribute('type', 'button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        loadMenuPage();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contactBtn');
    contactBtn.setAttribute('type', 'button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        loadContactPage();
    })

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
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
