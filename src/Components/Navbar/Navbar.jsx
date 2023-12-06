
import CartWidget from '../CartWidgte/CartWidget'

const Navbar = () => {

  return (
    <div className="container-fluid my-3">
      <div className="row">
         <div className="col-4 img-fluid"><img src="img/logo2blanco.PNG" alt="logo mvg" width={300}/></div>
           
         <nav className="navbar navbar-expand-lg  col-6 color_menu">
            <div className="barra container-fluid color_menu">
                <a className="navbar-brand color_menu" href="/">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 color_menu">
                    <li className="nav-item">
                      <a className="nav-link color_menu" aria-current="page" href="/category/fauna">Fauna</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link color_menu" href="/category/paisajes">Paisajes</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link color_menu" href="/category/retratos">Retratos</a>
                    </li>
                  </ul>
          
                </div>
                <div className="d-flex align-items-center text-">
                  <a href="/cart"> <CartWidget/> </a>
                </div>

            </div>
          </nav>
        
        <div className="col-2 d-flex align-items-center text-left text-end">
            <div className="row">
              <a href="/instagram"><img src="img/instagramlogo.jpg" alt="logo instagram" width={40} /></a>
              <a href="/mail"><img src="img/maillogo.jpg" alt="mail logo" width={40}/></a>
              <a href="/whatsapp"><img src="img/whatsapplogo.jpg" alt="whats app logo" width={40}/></a>
            </div>
               
                
        </div>
            

      </div>
      
    </div>

    
  )
}

export default Navbar
