//componente Encabezado

const Encabezado = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                               <img src="img/logo-uno-blanco.PNG" alt="logo negro" width={48} />
                            </a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link color_menu" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color_menu" href="#">Contactos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color_menu" href="#">Conoceme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color_menu" href="#">Galeria</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>     
    )
}

export default Encabezado;