
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Footer from './Footer'
import Error from './Components/Error'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './Components/CartWidgte/CartWidget'

function App() {
  return (
    <> 
      <BrowserRouter> 
       <Navbar/>

       <Routes>
         <Route path= '/' element= {<ItemListContainer greeting={`Bienvenidos a MVG Fotografía`} />} />
         <Route path= '/category/:id' element= {<ItemListContainer  />} />
         <Route path= '/item/:id' element= {<ItemDetailContainer />} />
         <Route path= '/cart' element= {<CartWidget/>} />
         <Route path= '*' element= {<Error/>} />
       </Routes>    
       <Footer/>  
     </BrowserRouter> 
     
     
    </>
  )
}

export default App
