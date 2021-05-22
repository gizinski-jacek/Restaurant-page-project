const introPage = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const chefImage = document.createElement('img');
    chefImage.classList.add('chef');
    chefImage.src = 'images/chef-image.jpg';
    chefImage.alt = 'Chef';

    main.appendChild(createPara('Best classical pizza in the city'));
    main.appendChild(createPara('Baked with hands full of passion'));
    main.appendChild(createPara('According to a recipe perfected over the years'));
    main.appendChild(createPara('With You and for You since 1925'));
    main.appendChild(chefImage);
    main.appendChild(createPara('Visit our place or order online'));

    return main;
}

const createPara = (text) => {
    const para = document.createElement('p');
    para.textContent = text;

    return para;
}

const loadHomePage = () => {
    const home = document.getElementById('mainContainer');
    home.innerHTML = '';
    home.appendChild(introPage());
}

export default loadHomePage;