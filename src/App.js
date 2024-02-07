import Navbar from './components/layout/Navbar';
import BottomNavigation from './components/layout/BottomNavigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Detalle from './components/pages/Detalle';
import Login from './components/pages/Login';
import PosLogin from './components/pages/PosLogin';
import Registro from './components/pages/Registro';
import Portal from './components/pages/Portal';
import { getUsuarios, db } from './firebaseConfiguracion';
import Selector from './components/pages/Selector';
import Home from './components/layout/Home';

function App() {
  getUsuarios(db)
  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/Detalle' element={<Detalle/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/PosLogin' element={<PosLogin/>} />
          <Route path='/Registrarse' element={<Registro/>} />
          <Route path='/Portal' element={<Portal/>} />
          <Route path='/Selector' element={<Selector/>} />

        </Routes>

        <BottomNavigation/>
      </Router>
    </>
  );
}

export default App;
