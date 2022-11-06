let products = [
    {id:"1", "slug":"nike-shoe", "name":"nike-shoe", "price":"45.00"},
    {id:"2", "slug":"puma-shoe", "name":"puma-shoe", "price":"95.50"}
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const create = (product) => {
    const id = Number(products[products.length -1].id) + 1 + ""
    const price = products[products.length -1].price + 1
    products.push({ id, price, ...product })
    return products[products.length -1]
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, create, update, remove }