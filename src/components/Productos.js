import { Link } from "react-router-dom";
import listaProductos from "../data";

function Productos() {
    
    return (
        <div className="mainContainer">
            <div className="productContainer">
                {listaProductos.map((producto) => {
                    return (
                        <article key={producto.id} className="productDetails">
                            <header>
                                <h2 className='title is-4'> {producto.nombre} </h2>
                            </header>

                            <div className="card-image">
                                <img className="image is-128x128" src={producto.img} alt={producto.nombre}/>
                            </div>

                            <section className="media-content">
                                <p className='subtitle is-6'>
                                    Precio: ${producto.precio}
                                </p>
                                <p className='subtitle is-6'>
                                    Stock disponible: {producto.stock}
                                </p>
                            </section>

                            <footer>
                                <Link to={`/productos/${producto.id}`} className="button is-black">Ver Detalle</Link>
                            </footer>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;