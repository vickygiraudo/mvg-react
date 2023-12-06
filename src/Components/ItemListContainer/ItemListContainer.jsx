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
        <div className='container'>
          <div className="row">

            <ItemList item= {item} />

          </div>
        </div>

    </div>
  )
}

export default ItemListContainer