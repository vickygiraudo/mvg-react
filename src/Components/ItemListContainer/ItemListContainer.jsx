import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import arrayProductos from '../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

  const [item, setItem] = useState ([]);
  const {id} = useParams ();

  useEffect (()=>{
    const fetchData = async ()=> {
      try {
        const data = await new Promise ((resolve)=>{
          setTimeout(()=>{
            resolve (id ? arrayProductos.filter (item=> item.categoria === id) : arrayProductos)
          }, 1500)
        });
        setItem(data)
      } catch (error){
        console.log (`Error`, error); 
      }
    };
    fetchData();

  }, [id])
  
  return (
    <div>
        <h2 className="saludo"> {greeting} </h2>
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade img-fluid ">
            <div className="carousel-inner ">
                
                <div className="carousel-item">
                  <img src="img/flamencosenca.jpg" className="d-block w-100 img-fluid" alt="Flamencos en Catamarca"/>
                </div>
                <div className="carousel-item active">
                  <img src="img/ososenca.jpg" className="d-block w-100 img-fluid" alt="Osa con su cría en Yellowstone"/>
                </div>
                <div className="carousel-item">
                  <img src="img/paisajeenca.jpg" className="d-block w-100 img-fluid" alt="Foto paisaje Catamarca"/>
                </div>
                <div className="carousel-item">
                    <img src="img/flavolandoenca.jpg" className="d-block w-100 img-fluid" alt="Flamencos volando en Catamarca"/>
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
        
        <div className='container'>
          <div className="row">

            <ItemList item= {item} />

          </div>
        </div>

    </div>
  )
}

export default ItemListContainer