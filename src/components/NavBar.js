
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-4'>
      <div >
      <NavLink 
        to="/Home"
        className="mr-4">
        <img src="logo.svg" alt="" style={{ width: '100px',}}/>
      </NavLink>
      </div>
      <div>
      <NavLink 
        to="/Cadastrar"
        className="mr-4">
        Cadastrar
      </NavLink>
      <NavLink 
        to="/Login"
        className="mr-4">
        Entrar
      </NavLink>
      </div>
    </nav>
  )
}

export default NavBar