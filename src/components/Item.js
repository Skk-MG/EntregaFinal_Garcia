import { Link } from "react-router-dom";

function Item( {id, nombre, img, precio, stock} ) {
    
    return (
        <article className="productDetail">
            <header>
                <h2 className='title is-4 has-text-light'> {nombre} </h2>
            </header>

            <div>
                <img className="cardImg" src={img} alt={nombre}/>
            </div>

            <section className="media-content">
                <p className='subtitle is-4 has-text-light'>
                    Precio: ${precio}
                </p>
                <p className='subtitle is-4 has-text-light'>
                    Stock disponible: {stock}
                </p>
            </section>

            <footer>
                <Link to={`/item/${id}`} className="button">Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item;