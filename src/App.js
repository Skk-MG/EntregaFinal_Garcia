import "bulma/css/bulma.css";
import './components/styles.css';
import NavBar from "./components/NavBar";
import Carrito from "./components/Carrito";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from "./components/Checkout";
import Inicio from "./components/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext'


function App() {
    
    return (
        <div className="mainBody">
            <CartProvider>
                <BrowserRouter>

                        <NavBar />

                        <Routes>
                            <Route path="/" element={<ItemListContainer />}/>
                            <Route path="/item/:id" element={<ItemDetailContainer />}/>
                            <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
                            <Route path="/cart" element={<Carrito />}/>
                            <Route path="/checkout" element={<Checkout />}/>
                            <Route path="/PreEntrega2_Garcia" element={<Inicio />}/>
                            <Route path="*" element={<h1 className="title is-1">Error 404 Pagina no Encontrada</h1>}/>
                        </Routes>

                </BrowserRouter>
            </CartProvider>
        </div>
    )
}

export default App;