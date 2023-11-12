//componente Encabezado

const Encabezado = () => {
    return(
        <div className="container-fluid my-3">
            <div className="row">
               <div className="col-3 img-fluid"><img src="img/logo2blanco.PNG" alt="logo mvg" width={300}/></div>
               
               <nav className="navbar navbar-expand-lg  col-4 color_menu">
                   <div className="barra container-fluid color_menu">
                      <a className="navbar-brand color_menu" href="#">Inicio</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0 color_menu">
                                <li className="nav-item">
                                  <a className="nav-link color_menu" aria-current="page" href="#">Conoceme</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link color_menu" href="#">Contacto</a>
                                </li>
                                <li className="nav-item dropdown">
                                   <a className="nav-link dropdown-toggle color_menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     Galería
                                    </a>
                                    <ul className="dropdown-menu">
                                       <li><a className="dropdown-item color_menu" href="#">Fauna</a></li>
                                       <li><a className="dropdown-item color_menu" href="#">Paisajes</a></li>
                                       <li><hr className="dropdown-divider color_menu"/></li>
                                       <li><a className="dropdown-item color_menu" href="#">Retratos</a></li>
                                    </ul>
                                </li>
                
                            </ul>
              
                        </div>
                    </div>
                </nav>

                <div className="col-3 d-flex align-items-center text-">
                    <a href="#"><img src="img/carritoblanco.jpg" alt="imágen de carrito" width={60}/></a>
                </div>

                <div className="col-2 d-flex align-items-center text-left text-end">
                    <div className="row">
                       <a href=""><img src="img/instagramlogo.jpg" alt="logo instagram" width={40} /></a>
                       <a href=""><img src="img/maillogo.jpg" alt="mail logo" width={40}/></a>
                       <a href=""><img src="img/whatsapplogo.jpg" alt="mail logo" width={40}/></a>
                    </div>
                   
                    
                </div>
                

            </div>
        </div>     
    )
}

export default Encabezado;

/*
        
        
        //forma normal 
        <div className="col">
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                               <img src="img/logo2blanco.PNG" alt="logo negro" width={300} />
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
                            <a className="nav-link color_menu" href="#">Galería</a>
                        </li>
                    </ul>
                </div>*/