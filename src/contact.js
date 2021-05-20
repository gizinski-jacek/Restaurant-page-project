const showContact = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    main.appendChild(createPara('Phone number: 789 654 123'));
    main.appendChild(createPara('Email: 789 654 123'));
    // main.appendChild(createPara('Address: '));

    // const map = document.createElement('img');
    // map.src = ;
    // map.alt = Location;
    // main.appendChild(map);

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