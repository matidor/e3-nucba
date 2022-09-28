const pizzas = /*JSON.parse(localStorage.getItem('pizzas')) ||*/ [
    {
        id: 1,
        nombre: "Muzza de Cancha",
        precio: 890,
        imagen: "./img/pizza-muzza.jpg",
        ingredientes: ["Muzarela", "Oregano", "Tomate"]
    },

    {
        id: 2,
        nombre: "La Mauro Zeta",
        precio: 1290,
        imagen: "./img/pizza-cebolla.jpg",
        ingredientes: ["Muzarela", "Cebolla", "Oregano"]
    },

    {
        id: 3,
        nombre: "pizza Napo con Ajo",
        precio: 1440,
        imagen: "./img/pizza-napo.jpg",
        ingredientes: ["Muzarella", "Tomate en Rodajas", "Ajo", "Aceitunas"]
    },

    {
        id: 4,
        nombre: "pizza 4 Quesos",
        precio: 1690,
        imagen: "./img/pizza-4-quesos.jpg",
        ingredientes: ["Muzarella", "Roquefort", "Provolone", "Fontina", "Aceitunas"]
    },

    {
        id: 5,
        nombre: "pizza 420 ",
        precio: 1420,
        imagen: "./img/pizza-420.jpg",
        ingredientes: ["Muza", "Cebolla Morada", " Calabresa", "Roquefort"]
    },

    {
        id: 6,
        nombre: "pizza Don vito",
        precio: 1380,
        imagen: "./img/pizza-don-vito.jpg",
        ingredientes: ["Doble Muzza", "Cornicione Relleno", "Calabresa"]
    },
];

const saveLocalStorage = pizzasList => {
    localStorage.setItem('pizzas', JSON.stringify(pizzasList));
};


const addForm = document.querySelector('#add-form');
const btnSend = document.querySelector('.btn-send');
const inputId = document.querySelector('.input-id');
const resultRender = document.querySelector('.container-result');


const addResult = e => {
    e.preventDefault();
    const valueInput = inputId.value.trim();
    inputId.value = '';

    if (!valueInput.length) return alert('ingresa un ID del 1 al 6 y eleji tu pizza');
    if (valueInput == 0) {
        alert("el numero debe ser entre 1 y 6");
        return;
    }

    if (Math.sign(valueInput) === -1) {
        alert("el numero debe ser entre 1 y 6");
        return;
    }

    if (valueInput <= pizzas.length) {
        const search = pizzas.find((pizza) => pizza.id == valueInput)

        resultRender.innerHTML = ` <div class="card">
                                        <div class="card-detail">
                                            <div class="img" style="background-image: url('${search.imagen}');"></div>
                                            <div class="description">
                                                <div class="list-pizza">
                                                <h2 class="title">${search.nombre}</h2>
                                                    <h4>Ingredientes:</h4>
                                                    <p>${search.ingredientes.join(" , ")}</p>
                                                </div>
                                                <div class="price">$ ${search.precio}</div>
                                </div>
                                        </div>
                                        </div>`;
        return;
    } else {
        resultRender.innerHTML = `
                                    <div class="card-error">
                                        <div class="img" style="background-image: url('./img/pizza-error.jpg');"></div>
                                        <small>El ID ingresado no existe</small>
                                    </div>
                                    `;
        return;
    }

}
const init = () => {
    addForm.addEventListener('submit', addResult);
    saveLocalStorage(pizzas)
};

init();