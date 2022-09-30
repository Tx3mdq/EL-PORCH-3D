import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './paginas/Home';
import NavBar from './componentes/navegacion/NavBar';
import ItemDetailContainer from './componentes/Containers/ItemDetailContainer';
import Contacto from './paginas/Contacto';
import Product from './paginas/Product';
import Footer from './componentes/navegacion/Footer';
import {CartProvider} from './Context/CartContex';
import CartView from './componentes/CartView/CartView';




function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
    <CartProvider>
      <NavBar />   
      <Routes>   
          <Route path="/" element={<Home /> } />
          <Route path="Product" element={<Product /> } />
          <Route path="SobreNosotros" element={<div>Sobre Nosotros</div> } />
          <Route path="Contacto" element={<Contacto/>} />     
          <Route path="detail/:id" element={<ItemDetailContainer /> } />
          <Route path='categoryId/:categoryName' element={<Product /> } />
          <Route path='CartView' element={< CartView />} />
      </Routes>
      <Footer />
      </CartProvider>
      </BrowserRouter>
    </div>
  </>
  );
}

export default App;



