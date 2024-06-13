export const listadeProductos = [
    {
        id: 1,
        category: "Accesorios",
        descripcion: "Gorra de algodón color rojo con logo bordado",
        img: '../images/GorraRoja.jpeg',
        name: "gorra bordada",
        price: 10000
    },
{
    id: 2,
    category: "Indumentaria",
    descripcion: "Camisa de algodón manga larga color blanco",
    img: '../images/CamisaBlanca.jpeg',
    name: "camisa manga larga",
    price: 15000
},
{
    id: 3,
    category: "Indumentaria",
    descripcion: "Vestido de verano estampado floral",
    img: '../images/VestidoFloral.jpeg',
    name: "vestido floral",
    price: 30000
},
{
    id: 4,
    category: "Indumentaria",
    descripcion: "Chaqueta de cuero sintético color negro",
    img: '../images/CamperaCuero.jpeg',
    name: "chaqueta de cuero",
    price: 45000
},
{
    id: 6,
    category: "Accesorios",
    descripcion: "Zapatos deportivos para correr color gris",
    img: '../images/ZapatillaDeportiva.jpeg',
    name: "zapatos deportivos",
    price: 25000
}
]

export const getProducts = (idCategory) => {
    
    console.log("idCategory desde Asyncmock" , idCategory)

    const listado = idCategory ? listadeProductos.filter(unProducto => unProducto.category === idCategory) : listadeProductos

    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            listado.length > 0 ?
            resolve(listado)
            :
            reject ("no hay datos")
        }, 500
    )
    })
}

