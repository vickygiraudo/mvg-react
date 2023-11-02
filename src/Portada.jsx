const Portada = () => {
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade img-fluid ">
            <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img src="img/osayositocopia.jpg" className="d-block w-100 img-fluid" alt="Osa con su cria en Yellowstone"/>
                </div>
                <div className="carousel-item">
                  <img src="img/flamencosenca.jpg" className="d-block w-100 img-fluid" alt="Flamencos en lago en Catamarca"/>
                </div>
                <div className="carousel-item">
                  <img src="img/paisajeenca.jpg" className="d-block w-100 img-fluid" alt="Flamencos en Mar Chuquita"/>
                </div>
                <div className="carousel-item">
                    <img src="img/flavolandoenca.jpg" className="d-block w-100 img-fluid" alt="Foto paisaje Catamarca"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> 
    )
}

export default Portada;