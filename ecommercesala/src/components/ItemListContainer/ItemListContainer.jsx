
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/asyncmock'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const {idCategory} = useParams ()



useEffect (()=> {
    getProducts(idCategory)
    .then(res => setProductos(res))
    .catch(err => console.error(err))
}, [idCategory])

return (
    <>
        <h1>{idCategory ? <>Categoria:{idCategory}</> : <>Pagina Principal</>}</h1>
        
        {productos ? <ItemList productos={productos} /> : <div> cargando...</div>}
    </>
)
}

export default ItemListContainer

