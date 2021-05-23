const welcomePage = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const chefImage = document.createElement('img');
    chefImage.classList.add('chefImage');
    chefImage.src = 'images/chef-image.jpg';
    chefImage.alt = 'Chef';

    main.appendChild(addPara('Best classical pizza in the city'));
    main.appendChild(addPara('Baked with hands full of passion'));
    main.appendChild(addPara('According to a recipe perfected over the years'));
    main.appendChild(addPara('With You and for You since 1925'));
    main.appendChild(chefImage);
    main.appendChild(addPara('Visit our place or order online'));

    return main;
}

const addPara = (text) => {
    const para = document.createElement('p');
    para.textContent = text;

    return para;
}

const loadHomePage = () => {
    const home = document.getElementById('mainContainer');
    home.innerHTML = '';
    home.appendChild(welcomePage());
}

export default loadHomePage;