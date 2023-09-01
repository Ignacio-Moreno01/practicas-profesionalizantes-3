class StoreModel 
{
   constructor() 
    {
        this.cartItems = [];
    }

    addToCart(product) 
    {
        this.cartItems.push(product);
    }

    getTotal() 
    {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
}