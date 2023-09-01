document.addEventListener('DOMContentLoaded', () => {
    const products = document.getElementById('products');
    const storeModel = new StoreModel();
    const storeView = new StoreView();
    const storeController = new StoreController(storeModel, storeView);

    const images = [
        './img/agua_mineral.png',
        './img/sprite.png',
        './img/actimel.png',
        './img/speed_unlimited.png',
        './img/coca_cola.png'
    ];

    const productList = [
        { id: '1', name: 'Agua Mineral 500cc', price: 468, img: images[0] },
        { id: '2', name: 'Sprite 1.5L', price: 840, img: images[1] },
        { id: '3', name: 'Actimel 95cc', price: 430, img: images[2] },
        { id: '4', name: 'Speed 473cc', price: 495, img: images[3] },
        { id: '5', name: 'Coca-Cola 2.25L', price: 970, img: images[4] }
    ];

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h4>${product.name}</h4>
            <img>${product.img}</img>
            <p>Precio: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        `;
        products.appendChild(productDiv);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) 
    {
        const productId = event.target.getAttribute('data-id');
        const product = getProductById(productId);
        storeController.addToCart(product);
    }

    function getProductById(id) 
    {
        return productList.find(product => product.id === id);
    }

    storeController.init();
});