import CartWitget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header className="Heder">
          <nav>
            <div style={{backgroundColor: 'white'}}>
              <Link to='/'><img src="logo.jpg" className="ImgInicioLogo" alt="Logo"/></Link>
              <Link to="/category/productos" className="Li" style={{color: '#212E53'}}>Productos </Link>
              <Link to="/item/detalle" className="Li" style={{color: '#212E53'}}>Detalle </Link>
              <Link to="/" className="Li" style={{color: '#212E53'}}>Contacto </Link>
{/*           <ul className="Li" style={{color: '#212E53'}} ><a href="https://www.instagram.com/kustomburger/"> Nosotros</a></ul>
              <ul className="Li" style={{color: '#212E53'}} ><a href="https://www.instagram.com/kustomburger/"> Productos</a></ul>
              <ul className="Li" style={{color: '#212E53'}} ><a href="http://localhost:3000/category/:id"> Detalle</a></ul>
              <ul className="Li" style={{color: '#212E53'}} ><a href="https://www.instagram.com/kustomburger/"> Contacto</a></ul> */}
            
              <CartWitget/>

            </div>
            {/* <div>
              <ul className="Li">
                <li><a style={{color: 'white'}} href="https://www.instagram.com/kustomburger/"> Nosotros</a></li>
                <li><a style={{color: 'white'}} href="https://www.instagram.com/kustomburger/"> Productos</a></li>
                <li><a style={{color: 'white'}} href="https://www.instagram.com/kustomburger/">Información</a>
                     <ul>
                        <li><a style={{color: '#212E53'}} href="https://www.instagram.com/kustomburger/">Ubicación</a></li>
                        <li><a style={{color: '#212E53'}} href="https://www.instagram.com/kustomburger/">Horario</a></li>
                    </ul> 
                </li> 
                <li><a style={{color: 'white'}} href="https://www.instagram.com/kustomburger/"> Contacto</a></li>
               </ul>
            </div> */}
          </nav>
        </header> 
    )
}

export default NavBar

