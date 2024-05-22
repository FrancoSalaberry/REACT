import './App.css'
import MenuSala from './components/menu/menu'
import Indumentaria from './components/indumentaria/indumentaria'


function App() {
  return (
    <div>
      <MenuSala/>
      <h3>Indumentaria</h3>
      <Indumentaria tipe='Pantalon' description='pantalon de jean celeste' />
      <Indumentaria tipe='Remera' description='Remera cuello en v Negra' />
      <Indumentaria tipe='Camisa' description='Camisa celeste manga corta' />
    </div>
  );
}

export default App;