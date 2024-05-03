
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink 
        to="/">
        Início
      </NavLink>
      <NavLink 
        to="/Register">
        Cadastrar
      </NavLink>
      <NavLink 
        to="/Login">
        Entrar
      </NavLink>
    </nav>
  )
}

export default NavBar