import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext'


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const  [cantidad, setCantidad] = useState(1);
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    return (
        <div className="container">
            <div className="detalleProducto">

                <img src={item.img} alt={item.nombre} />

                <div>         
                    <h2 className="titulo"> {item.nombre} </h2>
                    <p className="descripcion"><span className="detalleExtra">Descripcion:</span> {item.descripcion}</p>
                    <p className="categoria">Categoria: {item.categoria} </p>
                    <p className="precio"><span className="detalleExtra">Precio:</span> ${item.precio}</p>
                  
                    <ItemCount
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>

            </div>
        </div>
    )
}

export default ItemDetail;