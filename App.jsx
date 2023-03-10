import './App.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import cart from './components/cart'
function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/Categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/Contacto' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<cart/>}/>
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
