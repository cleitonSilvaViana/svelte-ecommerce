export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent
    const { id } = params

    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const product = await res.json()
    const { category } = product

    const getProducts = await fetch(`https://dummyjson.com/products/category/${category}`)

    return {
        product,
        products: getProducts.json()
    }
}