//1

let productsList = {
    items: [{
        product: "bread", quantity: 1, isPurchased: true, price: 40, sum: 80,
    }, {
        product: "egg", quantity: 18, isPurchased: false, price: 4, sum: 72,
    }, {
        product: "cheese", quantity: 2, isPurchased: false, price: 62, sum: 124,
    }, {
        product: "juice", quantity: 5, isPurchased: true, price: 8, sum: 40,
    }, {
        product: "water", quantity: 2, isPurchased: true, price: 12, sum: 24,
    },],

    getProductIndex(name) {
        return this.items.findIndex((product) => product.product === name);
    },

    purchase(name) {
        let productIndex = this.getProductIndex(name);

        if (!Number.isInteger(productIndex)) {
            return;
        }

        this.items[productIndex].isPurchased = true;
    },

    getPurchased(state = true) {
        return this.items.filter((product) => product.isPurchased === Boolean(state));
    },

    removeProduct(name) {
        let productIndex = this.getProductIndex(name);

        this.items = this.items.filter((element, index) => index !== productIndex);
    },

    addProduct(name, price = 0) {
        const productIndex = this.getProductIndex(name);

        if (productIndex >= 0) {
            let product = this.items[productIndex];
            let quantity = product.quantity + 1;

            this.items[productIndex] = {...product, quantity, sum: product.price * quantity};
        } else {
            this.items.push({
                product: name, price, quantity: 1, sum: price, isPurchased: false,
            })
        }
    },

    getTotalPrice() {
        return this.items.reduce((sum, currentValue) => {
            return currentValue.sum + sum;
        }, 0);
    },

    getTotalNotPurchasedPrice() {
        return this.items.reduce((sum, product) => {
            return product.isPurchased ? sum : product.sum + sum;
        }, 0);
    },

    sortProducts(fromCheapest = false) {

        this.items.sort((firstProduct, secondProduct) => {
            if (firstProduct.sum > secondProduct.sum) {
                return fromCheapest ? 1 : -1;
            }

            if (firstProduct.sum < secondProduct.sum) {
                return fromCheapest ? -1 : 1;
            }

            return 0;
        });

        return this.items;
    }
}

productsList.addProduct('bread');
productsList.addProduct('bread');
productsList.addProduct('bread');
productsList.addProduct('burger', 10);
productsList.addProduct('burger', 10);
productsList.addProduct('burger', 10);
productsList.addProduct('burger', 10);
productsList.addProduct('burger', 10);
productsList.addProduct('burger', 10);

console.log(productsList.getTotalNotPurchasedPrice());
console.log(productsList.sortProducts(false));
console.log(productsList.sortProducts(true));

//

// productsList.removeProduct('egg');
// productsList.removeProduct('bread');
// console.log(productsList.items);
// console.log(productsList.getPurchased());
// console.log(productsList.getPurchased(false));
//
// productsList.purchase('egg');
//
// console.log(productsList.getPurchased());
// console.log(productsList.getPurchased(false));

