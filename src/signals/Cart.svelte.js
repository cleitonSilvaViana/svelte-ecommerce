class Cart {
    products_in_cart = $state([])
    subtotal = $state(0)
    total = $state(0)
    discount = $state(0)

    search_product(id) {
        return this.products_in_cart.findIndex(product => product.id === id)
    }

    set add_product(product) {
        const indice = this.search_product(product.id)

        if (indice === -1) {
            const { id, price, discountPercentage, title, } = product
            this.products_in_cart = [...this.products_in_cart, { id, price, discountPercentage, title, quantity: 1 }]
            
            this.update_datas
        } else {
            console.log('Produto já existente no carrinho de compras')
        }

    }

    set remove_product(id) {
        const indice = this.search_product(id)

        if (indice !== -1) {
            this.products_in_cart.splice(indice, 1)
            this.products_in_cart = [...this.products_in_cart]
        }

        this.update_datas
    }

    set increment_quantity(id) {
        const indice = this.search_product(id)
        this.products_in_cart[indice].quantity++
        this.update_datas
    }

    set decrement_quantity(id) {
        const indice = this.search_product(id)

        if(this.products_in_cart[indice].quantity > 1) {
            this.products_in_cart[indice].quantity--
        } else {
            this.remove_product = id
        }

        this.update_datas
    }

    get update_datas() {
        this.subtotal = 0
        this.total = 0
        this.discount = 0

        this.products_in_cart.forEach(product => {
            console.log(product)

            const discount = (product.discountPercentage / 100 * product.price) * product.quantity
            const price = product.price * product.quantity

            this.subtotal += price
            this.discount += discount
            this.total +=  price - discount
        });
    }
}

export const cart = new Cart()
