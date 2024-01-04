// ShoppingCartSingleton.js
const ShoppingCart = require('./ShoppingCart');

class ShoppingCartSingleton {
    constructor() {
        if (!ShoppingCartSingleton.instance) {
            ShoppingCartSingleton.instance = new ShoppingCart();
        }
    }

    getInstance() {
        return ShoppingCartSingleton.instance;
    }
}

module.exports = ShoppingCartSingleton;
