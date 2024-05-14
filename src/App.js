import { BrowserRouter , Routes, Route } from 'react-router-dom'
//components
import NavBar from './components/NavBar.js';

// Pages
import Login from './Pages/Login/Login.js';
import Cadastrar from './Pages/Register/Cadastrar.js'
import Home from './Pages/Home/Home.js'
import Clientes from './Pages/Clientes/Clientes.js';

const App = () => {
  return (
    <div className="text-3xl font-bitter font-normal   text-center ">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>
          <Route path='/' element={<Clientes/>}/>
          <Route path='*' element={<Cadastrar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;
