import { useState } from 'react'
import './App.css'
import Portada from './Portada'
import Encabezado from './Encabezado'
import Galeria from './Galeria'
import Footer from './Footer'

function App() {
  return (
    <>
      <Encabezado/>
      <Portada/>
      <Galeria/>
      <Footer/>
    </>
  )
}

export default App
