document.addEventListener('DOMContentLoaded', () => {
    const productos = ['Cuaderno', 'Lapicero', 'Mochila', 'Regla'];
    const lista = document.getElementById('productos');

    productos.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = producto;
        lista.appendChild(item);
    });
});
