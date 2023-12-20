import { Link } from "react-router-dom";


const Item = ( {producto} ) => {
    
    return (
        <div className="producto">
            
            <img src={producto.img} alt={producto.nombre}/>
            
            <div className="descripcionProducto">
                <div className="containerNombre">
                    <h2 className="nombreProducto"> {producto.nombre} </h2>
                </div>
                <p className="detallesProducto"><span className="detalleExtra">Precio:</span> ${producto.precio}</p>
                <p className="detallesProducto"><span className="detalleExtra">Stock disponible:</span> {producto.stock}</p>
                <p className="detallesProducto"><span className="detalleExtra">Categoria:</span> {producto.categoria}</p>

            </div>

            <div className="containerBoton">
                <Link className="verMas" to={`/item/${producto.id}`}>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item;