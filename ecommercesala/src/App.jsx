import './App.css'
import NavBar from './components/NavBar/NavBar'
import Indumentaria from './components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <div>
      
      <NavBar/>

      <h3>Indumentaria</h3>
      <Indumentaria tipe='Pantalon' description='pantalon de jean celeste' />
      <Indumentaria tipe='Remera' description='Remera cuello en v Negra' />
      <Indumentaria tipe='Camisa' description='Camisa celeste manga corta' />
    </div>
  );
}

export default App;