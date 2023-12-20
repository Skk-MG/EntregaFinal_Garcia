import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";


const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

    return (
        <div>
            <div className="itemCount">
                <button onClick={handleRestar}><FaMinus /></button>
                <h4 className="cantidadItem"> {cantidad} </h4>
                <button onClick={handleSumar}><FaPlus /></button>
            </div>
            <div>
                <button className="agregarAlCarrito" onClick={handleAgregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;