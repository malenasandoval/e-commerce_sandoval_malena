class Producto {
    constructor(titulo, detalle, precio, stock, img) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

const producto = new Producto("Auto Mini Cooper", "El mítico MINI 3 puertas, todo un icono rebosante de rebeldía, lleva más de sesenta años alejándose de lo convencional. Su dinámica silueta y los faros elípticos marca de la casa crean una fantástica impresión.",
    12.000, 3, "https://imgd.aeplcdn.com/1056x594/n/tucmvta_1511583.jpg?q=80");


let main = document.querySelector('main');

main.innerHTML = `
    <div class="card">
        <img src="${producto.img}" alt="${producto.titulo}">
        <div class="card-body">
            <h1>${producto.titulo}</h1>
            <p>${producto.detalle}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock} unidades disponibles</p>
            <a href="./index.html" class="btn btn-primary">Comprar</a>
        </div>
    </div>
`;
