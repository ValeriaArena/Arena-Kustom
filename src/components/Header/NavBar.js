const NavBar = () => {
    return (
        <header className="Nav">
          <nav style={{fontWeight: 500,}}>
            <ul >
                <li ><a  href="https://www.instagram.com/kustomburger/"> Nosotros</a></li>
                <li><a href="https://www.instagram.com/kustomburger/"> Productos</a></li>
                <li ><a  href="https://www.instagram.com/kustomburger/">información</a>
                                <ul>
                                    <li><a href="https://www.instagram.com/kustomburger/">Ubicación</a></li>
                                    <li><a href="https://www.instagram.com/kustomburger/">Horario</a></li>
                                </ul> 
                            </li> 
                <li><a href="https://www.instagram.com/kustomburger/"> Contacto</a></li>
            </ul>
          </nav>
        </header> 
    )
}

export default NavBar

