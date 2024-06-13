import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Contacto } from './components/Contacto/Contacto'
import {Indumentaria} from './components/Indumentaria/indumentaria'
import {Accesorios} from './components/Accesorios/Accesorios'


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/accesorios' element={<Accesorios />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/indumentaria' element={<Indumentaria />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;