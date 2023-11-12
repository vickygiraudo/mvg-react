import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Portada from './Portada'
import Galeria from './Galeria'
import Footer from './Footer'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={`Bienvenidos a MVG Fotografía`} />
      <Portada/>
      <Galeria/>
      <Footer/>
    </>
  )
}

export default App
