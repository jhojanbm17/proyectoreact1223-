
import './App.css';
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import Navbar from'./componentes/Navbar';
import Inicio from './paginas/inicio';
import Gaseosas from './paginas/Gaseosas';
import JugosNaturales from './paginas/JugosNaturales';
import pulpa from './paginas/pulpa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/Gaseosas' element={<Gaseosas/>}/>
          <Route path='/JugosNaturales' element={<JugosNaturales/>}/>
          <Route path='/pulpa'element={<pulpa/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
