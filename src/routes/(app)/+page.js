export async function load({fetch}) {
	let res = await fetch(`https://dummyjson.com/products?limit=20&skip=0`)

    return {
        res: await res.json()
    }
}