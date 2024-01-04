// app.js
const readlineSync = require('readline-sync');
const ShoppingCartSingleton = require('./ShoppingCartSingleton');

function main() {
    const cartInstance = new ShoppingCartSingleton().getInstance();

    while (true) {
        console.log('\n1. Add Item');
        console.log('2. Remove Item');
        console.log('3. View Cart');
        console.log('4. Exit');

        const choice = readlineSync.question('Enter your choice: ');

        switch (choice) {
            case '1':
                const itemToAdd = readlineSync.question('Enter the item to add: ');
                cartInstance.addItem(itemToAdd);
                break;
            case '2':
                const itemToRemove = readlineSync.question('Enter the item to remove: ');
                cartInstance.removeItem(itemToRemove);
                break;
            case '3':
                console.log('Items in the Cart:', cartInstance.getItems());
                break;
            case '4':
                console.log('Exiting the program.');
                process.exit(0);
            default:
                console.log('Invalid choice. Please enter a valid option.');
        }
    }
}

main();
