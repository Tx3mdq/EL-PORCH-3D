import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './paginas/Home';
import SobreNosotros from './paginas/SobreNosotros';
import NavBar from './componentes/navegacion/NavBar';
import ItemDetailContainer from './componentes/Containers/ItemDetailContainer';
import Contacto from './paginas/Contacto';
import Product from './paginas/Product';
import Footer from './componentes/navegacion/Footer';
import {CartProvider} from './Context/CartContex';
import CartView from './componentes/CartView/CartView';
import {useState, useEffect} from 'react';
import ClockLoader from "react-spinners/ClockLoader";



function App() {
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  

  return (
    <>
    
  {
    
      loading ? ( <div className='clock'><ClockLoader color="black" size={100} speedMultiplier={1} loading={loading}/></div>)
      :
    (
    <BrowserRouter>
    <CartProvider>
      <NavBar />   
      <Routes>   
          <Route path="/" element={<Home /> } />
          <Route path="Product" element={<Product /> } />
          <Route path="SobreNosotros" element={<SobreNosotros /> } />
          <Route path="Contacto" element={<Contacto/>} />     
          <Route path="detail/:id" element={<ItemDetailContainer /> } />
          <Route path='categoryId/:categoryName' element={<Product /> } />
          <Route path='CartView' element={< CartView />} />
      </Routes>
      <Footer />
      </CartProvider>
      </BrowserRouter>
    )
  }
  </>
  );
}

export default App;



