import { useState } from "react"
import './CartWidget.css'

const Carrito = () => {
    const [contador, setContador] = useState (1)

    const suma = () => {
        setContador(contador + 1)
    }
    const resta = () => {
        if (contador > 1)setContador(contador - 1)
    }
    return (
        <div className="contenedor">
            <p>{contador}</p>
            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
            <img className="Imgcarrito" src="../images/Carrito.png" alt="" />
        </div>
        
    )
}

export default Carrito