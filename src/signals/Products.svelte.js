class Products {
    _products = []
    _searched = []
    _filter = 'rating'
    products_list = $state([])

    set search_product(identifier) {
        this._searched.length = 0

        if (identifier.trim() !== '') {

            this._products.forEach((product) => {
                if (product.title.toLowerCase().includes(identifier.toLowerCase())) {
                    this._searched.push(product)
                }
            })

        }

        if (identifier.trim() === '' || identifier === undefined || identifier === null) {
            this.products_list.length = 0
            this.products_list = [...this._products]
        } else {
            this.products_list = [...this._searched]
        }
    }

    set add_products(products) {    
        const flag = [...this._products]
        this._products.length = 0
        this._products = [...flag, ...products]
        this.products_list = [...this._products]
    }

    set filter_products(filter) {
        this._filter = filter

        const flag = []
        flag.push(...this._products)

        const operation = (filter === 'az' || filter === 'lower_price') ? '>' : '<'

        const type =
            (filter === 'az' || filter === 'za')
                ? 'name' :
                (filter === "lower_price" || filter === "biggest_price")
                    ? 'price' :
                    (filter === 'discount')
                        ? 'discount'
                        : 'rating'

        flag.sort((x, y) => {
            const a = x[type]
            const b = y[type]

            if (operation === '>') {
                return a === b ? 0 : a > b ? 1 : -1
            } else {
                return a === b ? 0 : a < b ? 1 : -1
            }
        })
    }
}

export const products = new Products() 