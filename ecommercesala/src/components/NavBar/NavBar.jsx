import './NavBar.css';
import Carrito from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <div className='contenedorNavbar'>
        <Link to={'/'}>
        <img className='imgnavbar' src="../images/LogoSala.png" alt="" />
        </Link>
        <h1>Sala Clothes</h1>
        <div>
        <ul className="referencias">

        <Link to={'/'}>
        <li>Inicio</li>
        </Link>

        <Link to={'/category/Accesorios'}>
            <li>Accesorios</li>
        </Link>

        <Link to={'/category/Indumentaria'}>
        <li>Indumentaria</li>
        </Link>

        <Link to={'/Contacto'}>
        <li>Contacto</li>
        </Link>

        </ul>
        </div>
        <div className='carrito'> <Carrito/> </div>
    </div>
    );
}

export default NavBar