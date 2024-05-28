
import './ItemListContainer.css'

const Indumentaria = ({tipe, description}) => {
    return(
        <div className='contenedorIndu'>
            <p className="Tipo">{tipe}</p>
            <p className="Descripcion">descripcion: {description}</p>
        </div>
    )
}




export default Indumentaria
