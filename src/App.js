import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import BTrabajo from './components/BTrabajo';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BEmpleado from './components/BEmpleado';
import Detalle from './components/Detalle';
import Login from './components/Login';
import PosLogin from './components/PosLogin';
import Registro from './components/Registro';
import Portal from './components/Portal';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>

        <Route path='/' element={<Inicio/>} />
        <Route path='/Trabajo' element={<BTrabajo/>} />
        <Route path='/Empleado' element={<BEmpleado/>} />
        <Route path='/Detalle' element={<Detalle/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/PosLogin' element={<PosLogin/>} />
        <Route path='/Registrarse' element={<Registro/>} />
        <Route path='/Portal' element={<Portal/>} />

      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
