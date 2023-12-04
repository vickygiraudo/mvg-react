import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Portada from './Portada'
import Footer from './Footer'
import ProductCard from './Components/ProductCard'
import Contador from './Components/Contador'
import UserList from './Components/UserList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './Components/CartWidgte/CartWidget'
import Fauna from './Components/Fauna'
import Retratos from './Components/Retratos'
import Paisajes from './Components/Paisajes'
import Error from './Components/Error'

function App() {
  return (
    <>

      
      <BrowserRouter> 
       <Navbar/>

       <Routes>
         <Route path= '/' element= {<ItemListContainer greeting={`Bienvenidos a MVG Fotografía`} />} />
         <Route path= '/paisajes' element= {<Paisajes/>} />
         <Route path= '/retratos' element= {<Retratos/>} />
         <Route path= '/fauna' element= {<Fauna />} />
         <Route path= '/cart' element= {<CartWidget />} />
         <Route path= '*' element= {<Error/>} />
       </Routes>
     </BrowserRouter>
      
      <UserList/>
      
      <Portada/>
      <Contador/>
      <ProductCard title={"Foto 1"} price={2000} img={""}>
        <p> Aprovechá esta oferta limitada </p>
        <button> Comprar </button>        
      </ProductCard>

      
      <Footer/>
    </>
  )
}

export default App
