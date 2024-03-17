import Navbar from './components/layout/Navbar';
import BottomNavigation from './components/layout/BottomNavigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Detalle from './components/pages/Detalle';
import PosLogin from './components/pages/PosLogin';
import Registro from './components/pages/Registro';
import Home from './components/layout/Home';
import Postear from './components/pages/subcomponents/Postear';
import { AuthProvider } from './context/AuthContext';
import Feed from './components/pages/Feed';
import Perfil from './components/pages/subcomponents/Perfil';
import EditarPerfil from './components/pages/subcomponents/EditarPerfil';

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar/>
          
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/Detalle' element={<Detalle/>} />
            <Route path='/PosLogin' element={<PosLogin/>} />
            <Route path='/Registrarse' element={<Registro/>} />
            <Route path='/Postear' element={<Postear/>} />
            <Route path='/Feed' element={<Feed/>} />
            <Route path='/Perfil' element={<Perfil/>} />
            <Route path='/EditarPerfil' element={<EditarPerfil/>} />

          </Routes>
          {/* <div className='min-h-16 bg-base-300'/> */}

          <BottomNavigation/>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
