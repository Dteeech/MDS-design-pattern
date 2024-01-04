// ShoppingCart.js
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item} added to the cart.`);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`${item} removed from the cart.`);
        } else {
            console.log(`${item} not found in the cart.`);
        }
    }

    getItems() {
        return this.items;
    }
}

module.exports = ShoppingCart;
