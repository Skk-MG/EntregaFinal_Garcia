import "bulma/css/bulma.css";
import './components/styles.css';
import NavBar from "./components/NavBar";
import Productos from "./components/Productos";
import DetalleProducto from "./components/DetalleProducto";
import CategoriaProductos from "./components/CategoriaProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Productos/>}/>
                    <Route path='productos' element={<Productos/>}/>
                    <Route path='productos/:productoId' element={<DetalleProducto />}/>
                    <Route path='productos/:categoriaId' element={<CategoriaProductos />}/>
                    <Route path='*' element={<h1>404</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;