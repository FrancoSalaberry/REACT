import './NavBar.css';
import Carrito from './CartWidget';

function NavBar() {
    return (
    <div className='contenedorNavbar'>
        <img className='imgnavbar' src="../images/LogoSala.png" alt="" />
        <h1>Sala Clothes</h1>
        <div>
        <ul className="referencias">
        <li><a href="">Inicio</a></li>
        <li><a href="">Accesorios</a></li>
        <li><a href="">Indumentaria</a></li>
        <li><a href="">Contacto</a></li>
        </ul>
        </div>
        <div className='carrito'> <Carrito/> </div>
    </div>
    );
}

export default NavBar