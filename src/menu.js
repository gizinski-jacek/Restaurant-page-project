// const showMenu = () => {
//     const main = document.createElement('div');
//     main.classList.add('main');
// }

const menu = document.getElementById('mainContainer');

const pizzaMenu = () => {
    const main = document.createElement('div');
        pizzaList.forEach((pizza) => {
            
        })
    return main;
}

const drinksMenu = () => {
    const main = document.createElement('div');
        drinksList.forEach((drink) => {

        })
    return main;
}

const emptyMenu = () => {
    const main = document.createElement('div');
        emptyList.forEach((empty) => {

        })
    return main;
}

const pizzaList = [];
const drinksList = [];
const emptyList = [];

class newPizza {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class newDrink {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class newEmpty {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

// const loadMenuPage = () => {
//     const menu = document.getElementById('mainContainer');
//     menu.innerHTML = '';
//     menu.appendChild(showMenu());
// }

export {
    pizzaMenu,
    drinksMenu,
    emptyMenu,
}