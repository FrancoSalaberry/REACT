
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const listadeProductos = [
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
        category: "Camisas",
        descripcion: "Camisa de algodón manga larga color blanco",
        img: '../images/CamisaBlanca.jpeg',
        name: "camisa manga larga",
        price: 15000
    },
    {
        id: 3,
        category: "Vestidos",
        descripcion: "Vestido de verano estampado floral",
        img: '../images/VestidoFloral.jpeg',
        name: "vestido floral",
        price: 30000
    },
    {
        id: 4,
        category: "Chaquetas",
        descripcion: "Chaqueta de cuero sintético color negro",
        img: '../images/CamperaCuero.jpeg',
        name: "chaqueta de cuero",
        price: 45000
    },
    {
        id: 6,
        category: "Zapatos",
        descripcion: "Zapatos deportivos para correr color gris",
        img: '../images/ZapatillaDeportiva.jpeg',
        name: "zapatos deportivos",
        price: 25000
    }
]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            listadeProductos.length > 0 ?
            resolve(listadeProductos)
            :
            reject ("no hay datos")
        }, 2000
    )
    })
}
useEffect (()=> {
    getProducts()
    .then(res => setProductos(res))
    .catch(err => console.error(err))
}, [])

return (
    <>
        {productos ? <ItemList productos={productos} /> : <div> cargando...</div>}
    </>
)
}

export default ItemListContainer

