let categorias = [
    {txt: "Inicio", href: "index.html"},
    {txt: "Productos", href: "producto.html"},
    {txt: "Contacto", href: "#"}
];

const header = document.querySelector("header");

let menu = []

for (let categoria of categorias) {
    menu.push( `<a class="nav-item" href=${categoria.href}>${categoria.txt}</a>`)
}

header.innerHTML = menu.join().replaceAll(",", "");
