import { useState } from "react"

const ItemCount = () => {
    const [ItemCount, setItemCount] = useState (1)

    const suma = () => {
        setContador(ItemCount + 1)
    }
    const resta = () => {
        if (ItemCount > 1)setItemCount(ItemCount - 1)
    }
    return (
        <div className="contenedor">
            <p>{ItemCount}</p>
            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
            <button>Agregar Carrito</button>
            <img className="Imgcarrito" src="../images/Carrito.png" alt="" />
        </div>
        
    )
}

export default ItemCount