import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/Main/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/Main/Contacto'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Header/Carrito'
import Checkout from './components/Header/Checkout'
import Hero from './components/Main/Hero'




const App = () => {


  return (

    <div className="grid">
      <CartProvider>
        <BrowserRouter>

          <header className="header">
            <Navbar />
          </header>

          <main className="main">
                        
            <Routes>
              
              <Route
                path="/"
                element={
                  <>
                    <Hero /> {/* Se muestra solo en la página principal */}
                    <ItemListContainer />
                  </>
                }
              />

            
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />

            </Routes>
          </main>

          <footer className="footer">
            <Footer />
          </footer>

        </BrowserRouter>
      </CartProvider>
    </div>

  )
}

export default App



