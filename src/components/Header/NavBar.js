import React from "react"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header className="Heder">
          <nav>
            <div style={{backgroundColor: 'white'}}>
              <Link to='/'><img src="logo.jpg" className="ImgInicioLogo" alt="Logo"/></Link>
              <Link to="/" className="Li" style={{color: '#212E53'}}>Productos </Link>
              <Link to="/category/hamburguesas" className="Li" style={{color: '#212E53'}}>Hamburguesas </Link>
              <Link to="/category/papas" className="Li" style={{color: '#212E53'}}>Papas </Link>
              <Link to="/Cart"><CartWidget /></Link>
            </div>
          </nav>
        </header> 
    )
}

export default NavBar

