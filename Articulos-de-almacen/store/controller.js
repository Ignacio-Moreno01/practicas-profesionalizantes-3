class StoreController 
{
    constructor(model, view) 
    {
        this.model = model;
        this.view = view;
    }

    init() 
    {
        this.view.renderTotal(this.model.getTotal());
    }

    addToCart(product) 
    {
        this.model.addToCart(product);
        this.view.renderCart(this.model.cartItems);
        this.view.renderTotal(this.model.getTotal());
    }
}