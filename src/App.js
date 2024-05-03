
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js'
import Home from './Pages/Home/Home.js'
import NavBar from './components/NavBar.js';


const App = () => {
  return (
    <div className="text-3xl font-bitter font-normal   text-center ">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;
