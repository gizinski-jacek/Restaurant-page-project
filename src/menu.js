const showMenu = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    
}

const loadMenuPage = () => {
    const menu = document.getElementById('mainContainer');
    menu.innerHTML = '';
    menu.appendChild(showMenu());
}

export default loadMenuPage;