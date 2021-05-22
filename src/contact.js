const showContact = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    main.appendChild(createPara('Phone number: 789 654 123'));
    main.appendChild(createPara('Email: pizzaliano@bestdough.com'));
    main.appendChild(createPara('Address: Via Milano 666'));

    const map = document.createElement('img');
    map.classList.add('map');
    map.src = 'images/map-location.png';
    map.alt = 'Our Location';
    main.appendChild(map);

    return main;
}

const createPara = (text) => {
    const para = document.createElement('p');
    para.textContent = text;

    return para;
}

const loadContactPage = () => {
    const contact = document.getElementById('mainContainer');
    contact.innerHTML = '';
    contact.appendChild(showContact());
}

export default loadContactPage;