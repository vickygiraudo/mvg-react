
import { Link } from 'react-router-dom'


const Item = ({item} ) => {
  return (

    <Link to={'/item/' + item.id} className='text-decoration-none'>
        <div className='container'>
            <div className="fotoscard card border border-0 img-fluid">
                <img src= {item.img}  className='card-img-top' alt= { item.nombre } />
                <div className="card-body text-center">
                    <p  className='parrafocard' children ='card-text'> {item.nombre} </p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Item
