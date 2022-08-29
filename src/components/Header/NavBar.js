import CartWitget from "./CartWidget"

const NavBar = () => {
    return (
        <header className="Heder">
          <nav>
          <img src="logo.jpg" className="ImgInicioLogo" alt="Prueba"/>
            <div>
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
            </div>
            <div>
              <CartWitget/>
            </div>
          </nav>
        </header> 
    )
}

export default NavBar

