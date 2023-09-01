class StoreView 
{
    constructor() 
    {
        this.cartList = document.getElementById('cart');
        this.totalSpan = document.getElementById('total');
    }

    renderCart(cartItems) 
    {
        this.cartList.innerHTML = '';

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Precio: $${item.price}`;
            this.cartList.appendChild(li);
        });
    }

    renderTotal(total) 
    {
        this.totalSpan.textContent = total;
    }
}