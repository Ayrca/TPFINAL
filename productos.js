

let productos = [
    ["arroz", 1000, 30, "./Imagenes/arroz.jpg"],
    ["fideos", 800, 30, "./Imagenes/fideos.jfif"],
    ["aceite", 1100, 30, "./Imagenes/aceite.webp"],
    ["jugo", 350, 30, "./Imagenes/jugo.webp"],
    ["sal", 700, 30, "./Imagenes/sal.jfif"],
    ["desodorante", 1300, 30, "./Imagenes/desodorante.webp"],
    ["shampoo", 1900, 30, "./Imagenes/shampoo.jpg"],
    ["talco", 1500, 30, "./Imagenes/talco.jfif"],
    ["galletitas", 750, 30, "./Imagenes/biscochitos.jfif"],
    ["leche", 999, 30, "./Imagenes/leche.webp"],
    ["yogurt", 1200, 30, "./Imagenes/yogurt.jpg"],
    ["manteca", 1350, 30, "./Imagenes/manteca.jfif"],
];
const msjTexto = document.getElementById("mensaje");

const respuestaClick = function (Event) {
    Event.preventDefault();
    msjTexto.innerHTML = "";

    const inputs = document.querySelectorAll("input");
    let total = 0;
    inputs.forEach((input) => {

        let cantAcomprar = input.value;
        const producto = productos[input.id];
        const nombreProducto = producto[0];
        const precio = producto[1];
        let stock = producto[2];

        if (stock < cantAcomprar) {
            msjTexto.innerHTML += `Stock insuficiente de ${nombreProducto}<br>`;

        } else {
            total += cantAcomprar * precio;

            let stockSpan = document.getElementById(`stock-${input.id}`);
            stockSpan.innerHTML = stock - cantAcomprar;
            producto[2] = stock - cantAcomprar;

        }

    });
    /*si msjTexto= vacio no se excedio el stock de ningun producto*/

    if (msjTexto.innerHTML === "") {
        msjTexto.innerHTML += `TOTAL ${total}<br>`;
    }
};

const container = document.getElementById("contenedor-productos");

const colorearInput = (id) => {
    const input = document.getElementById(id);
    input.addEventListener("keyup", function (e) {
        let stockActual = productos[id][2]
        let cantAcomprar = input.value;

        if (stockActual < cantAcomprar) {
            input.classList.add("error");
        }
        else {
            input.classList.remove("error")
        }

    });
};
const lista = document.getElementById("lista");
productos.forEach((producto, indice) => {


    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add("contenedor-producto");

    contenedorProducto.innerHTML = `
  <img src="${producto[3]}" alt="arroz" width="100%" height="160px"> </img>
  <h1 class="tituloProducto">${producto[0]}</h1>
    <p >Precio : $<span style="font-weight: bold;">${producto[1]}<span></p>
    <p name="stock">Stock : <span style="font-weight: bold;" id="stock-${indice}">${producto[2]}<span></p>
    <input placeholder="Ingrese un numero" type="number" name="inpCantCompra" id="${indice}" />
  `;

    container.appendChild(contenedorProducto);

    colorearInput(indice);
});

const inputs = document.getElementsByTagName("input");

const inputs2 = document.querySelector("input");

let btn = document.getElementById("btn");
btn.addEventListener("click", respuestaClick);
const buttons = document.querySelectorAll("button");

