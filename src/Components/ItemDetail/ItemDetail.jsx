

const ItemDetail = ({item} ) => {
  

  return (
    <div className='row'>
        <div className="col-md-4 iifset-md-4 detailfoto">
          <img src= {item.img} className='img-fluid text-center' alt=" {item.nombre} " />
          <h3> {item.nombre} </h3>
          <p>$ {item.precio} </p>
          
        </div>
    </div>
  )
}

export default ItemDetail