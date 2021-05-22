const menu = document.getElementById('mainContainer');

const pizzaMenu = () => {
    const main = document.createElement('div');
    main.classList.add('main', 'mainPizza');
    pizzaList.forEach((pizza) => {
        const item = document.createElement('div');
        item.classList.add('item');
        
        const img = document.createElement('img');
        img.src = pizza.image;
        const name = document.createElement('p');
        name.textContent = pizza.name;
        name.classList.add('name');
        const topping = document.createElement('p');
        topping.textContent = 'Toppings: ' + pizza.toppings;

        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(topping);
        main.appendChild(item);
    })
    return main;
}

const drinksMenu = () => {
    const main = document.createElement('div');
    main.classList.add('main', 'mainDrinks');
    drinksList.forEach((drink) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const img = document.createElement('img');
        img.src = drink.image;
        const name = document.createElement('p');
        name.textContent = drink.name;
        name.classList.add('name');
        
        item.appendChild(img);
        item.appendChild(name);
        main.appendChild(item);
    })
    return main;
}

const dessertsMenu = () => {
    const main = document.createElement('div');
    main.classList.add('main', 'mainDesserts');
    dessertsList.forEach((dessert) => {
        const item = document.createElement('div');
        item.classList.add('item');

        const img = document.createElement('img');
        img.src = dessert.image;
        const name = document.createElement('p');
        name.textContent = dessert.name;
        name.classList.add('name');
        
        item.appendChild(img);
        item.appendChild(name);
        main.appendChild(item);
    })
    return main;
}

const pizzaList = [];
const drinksList = [];
const dessertsList = [];

class Pizza {
    constructor(name, toppings, image) {
        this.name = name;
        this.toppings = toppings;
        this.image = image;
        pizzaList.push(this);
    }
}

class Drink {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        drinksList.push(this);
    }
}

class Dessert {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        dessertsList.push(this);
    }
}

const margherita = new Pizza('Margherita', 'tomato sauce, mozzarella, basil', 'images/pizza/margherita.png');
const pepperoni = new Pizza('Pepperoni', 'tomato sauce, mozzarella pepperoni, ', 'images/pizza/pepperoni.png');
const prosciutto = new Pizza('Prosciutto', 'tomato sauce, mozzarella, prosciutto, rocket/arugula', 'images/pizza/prosciutto.png');
const diablo = new Pizza('Diablo', 'tomato sauce, mozzarella, parma ham, chilli pepper', 'images/pizza/diablo.png');
const marinara = new Pizza('Marinara', 'tomato sauce, oregano and garlic', 'images/pizza/marinara.png');
const quattroFormaggi = new Pizza('Quattro Formaggi', 'mozzarella, parmesan, provolone, blue cheese', 'images/pizza/quattro-formaggi.png');

const espresso = new Drink('Espresso', 'images/drinks/espresso.png');
const cappuccino = new Drink('Cappuccino', 'images/drinks/cappuccino.png');
const caffeLatte = new Drink('Caffe\' Latte', 'images/drinks/caffe-latte.png');
const americano = new Drink('Americano', 'images/drinks/americano.png');
const longBlack = new Drink('Long Black', 'images/drinks/long-black.png');

const mudPie = new Dessert('Mocha Mud Pie', 'images/desserts/mud-pie.png');
const rockslide = new Dessert('Rockslide Pie', 'images/desserts/rockslide.png');
const oreo = new Dessert('Oreo Madness', 'images/desserts/oreo.png');
const skyPie = new Dessert('Pie-In-The-Sky', 'images/desserts/sky-pie.png');

const loadPizzaPage = () => {
    const menu = document.getElementById('mainContainer');
    menu.innerHTML = '';
    menu.appendChild(pizzaMenu());
}

const loadDrinksPage = () => {
    const menu = document.getElementById('mainContainer');
    menu.innerHTML = '';
    menu.appendChild(drinksMenu());
}

const loadDessertsPage = () => {
    const menu = document.getElementById('mainContainer');
    menu.innerHTML = '';
    menu.appendChild(dessertsMenu());
}

export {
    loadPizzaPage,
    loadDrinksPage,
    loadDessertsPage,
}