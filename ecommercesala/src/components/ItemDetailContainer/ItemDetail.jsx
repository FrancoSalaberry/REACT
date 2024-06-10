import './ItemDetail.css'

const ItemDetail = ({ id, category, description, img, name, price}) => {
    return(
        <div className='contenedorCardp'>
            <div className="Tipo">{category}</div>
            <img className="ImagenCard" src={img} alt={name} />
            <div className="Descripcion">{name}</div>
            <div className='Price'>{price}</div>
            <button className="botonCard">Ver Detalle</button>
        </div>
    )
}
export default ItemDetail