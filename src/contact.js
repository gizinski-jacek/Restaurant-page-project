const contactPage = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    main.appendChild(addPara('Phone number: 789 654 123'));
    main.appendChild(addPara('Email: pizzaliano@bestdough.com'));
    main.appendChild(addPara('Address: Via Milano 666'));

    const mapImage = document.createElement('img');
    mapImage.classList.add('mapImage');
    mapImage.src = 'images/map-location.png';
    mapImage.alt = 'Our Location';
    main.appendChild(mapImage);

    return main;
}

const addPara = (text) => {
    const para = document.createElement('p');
    para.textContent = text;

    return para;
}

const loadContactPage = () => {
    const contact = document.getElementById('mainContainer');
    contact.innerHTML = '';
    contact.appendChild(contactPage());
}

export default loadContactPage;