import flacorazon from "./assets/flacorazon.jpg";
import llamasola from "./assets/llamasola.jpg";
import llamacatamarca from "./assets/llamacatamarca.jpg";
import flamencosololindo from "./assets/flamencosololindo.jpg";
import flamencospeleando from "./assets/flamencospeleando.jpg";
import flamencocatasolo from "./assets/flamencocatasolo.jpg";




const Galeria = () => {
    return(
        <div className="container">
            <div className="row m-5 img-fluid">
                <div className="col-lg-4 mb-4 galeria-incio">
                    <a href="#" data-bs-toggle="modal" data-bs-target="modalImage1">
                       <img className="w-100 mb-4 rounded" src= {flacorazon}  alt="" />
                    </a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="modalImage1">
                        <img className="w-100 mb-4 rounded" src= {llamasola}  alt="" />
                    </a>
                    
                </div>
                
                <div className="col-lg-4 mb-4 galeria-incio">
                    <a href="#"  data-bs-toggle="modal" data-bs-target="modalImage1">
                        <img className="w-100 mb-4 rounded" src= {llamacatamarca } alt="" />
                    </a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="modalImage1">
                         <img className="w-100 mb-4 rounded" src= {flamencosololindo}  alt="" />
                    </a>                   
                </div>
                
                <div className="col-lg-4 mb-4 galeria-incio">
                    <a href="#" data-bs-toggle="modal" data-bs-target="modalImage1">
                         <img className="w-100 mb-4 rounded" src= {flamencospeleando} alt="" /> 
                    </a>
                    <a href="#" data-bs-toggle="modal" data-bs-target="modalImage1">
                         <img className="w-100 mb-4 rounded" src= {flamencocatasolo}  alt="" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

//averiguar como hacer modals para que se abra la foto cuando la clickean 


export default Galeria;