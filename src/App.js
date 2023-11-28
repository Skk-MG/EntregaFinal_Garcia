import "bulma/css/bulma.css";
import './components/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="/categoria/:categoryId" element={<ItemListContainer />}/>
                    <Route path="/item/:itemId" element={ <ItemDetailContainer />}/>
                    <Route path="*" element={<h1 className="title is-1">Error 404 Pagina no Encontrada</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;