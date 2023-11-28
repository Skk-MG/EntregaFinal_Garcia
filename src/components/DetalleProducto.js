import ItemCount from "./ItemCount";
import listaProductos from "../data";
import { useParams } from "react-router-dom";

function DetalleProducto() {

    const {productoId} = useParams();

    const producto = listaProductos.find((producto) => producto.id == productoId);   

    const { nombre, img , precio, descripcion, stock} = producto;
    
    return (
        <div className="detailContainer">
            <article className="productDetails">
                <header>
                    <h2 className='title is-4'> {nombre} </h2>
                </header>

                <div className="card-image">
                    <img className="image is-128x128" src={img} alt={nombre}/>
                </div>

                <section className="media-content">
                    <p className='subtitle is-6'>
                        Precio: ${precio}
                    </p>
                    <p className='subtitle is-6'>
                    Descripcion: {descripcion}
                    </p>
                    <p className='subtitle is-6'>
                        Stock disponible: {stock}
                    </p>
                </section>

                <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/>
                </footer>
            </article>
        </div>
    )
}

export default DetalleProducto;