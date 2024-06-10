import './ItemList.css'
import ItemDetail from '../ItemDetailContainer/ItemDetail'
import React from 'react'

const ItemList= ({ productos }) => {
    return(
        <div className='contenedorIndu'>
            {productos.map ((p) =>
            <ItemDetail 
                key= {p.id}
                id={p.id}
                category= {p.category}
                description={p.description}
                img={p.img}
                name={p.name}
                price={p.price}
                stock={p.stock} />)}   
        </div>
    )
}
export default ItemList;