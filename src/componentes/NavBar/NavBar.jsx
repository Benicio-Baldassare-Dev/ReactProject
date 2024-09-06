import "../../App.css"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">

        <Link to="/">GamerGear</Link>

      </div>

      <div className="navbar-links">

        <ul>

          <li><NavLink to="/category/Notebooks" >Notebooks</NavLink></li>
          <li><NavLink to="/category/Procesadores" >Procesadores</NavLink></li>
          <li><NavLink to="/category/Mothers" >Mothers</NavLink></li>
          <li><NavLink to="/category/Video">Placas de Video</NavLink></li>
          <li><NavLink to="/category/Almacenamiento">Almacenamiento</NavLink></li>
          <li><NavLink to="/category/Fuentes">Fuentes</NavLink></li>
        </ul>

      </div>

      <div className="cart-nav">
        <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" /></Link>
        <CartWidget />
      </div>

    </nav>
  )
}

