document.querySelector('h1').textContent = 'Productos';

const array = [];

const container = document.querySelector('section.container-cards');

for (let i = 1; i <= 4; i++) {
    const card = `
        <div class="card">
          <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}" />
          <div class="card-body">
            <h2 id="title${i}" class="card-title">Producto ${i}</h2>
            <h2 id="precio${i}">$precio</h2>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>  
        </div>
      `;
    array.push(card);
}

container.innerHTML = array.join('');

