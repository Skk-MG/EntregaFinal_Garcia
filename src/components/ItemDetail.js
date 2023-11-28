import ItemCount from "./ItemCount";

function ItemDetail( {id, nombre, img, categoria, descripcion, precio, stock } ) {
    
    return (
        <article className="productDetail">
            <header>
                <h2 className='title is-4 has-text-light'> {nombre} </h2>
            </header>

            <div>
                <img className="cardImg" src={img} alt={nombre} />
            </div>

            <section>
                <p className='subtitle is-4 has-text-light'>
                    Categoria: {categoria}
                </p>
                <p className='subtitle is-4 has-text-light'>
                    Descripcion: {descripcion}
                </p>
                <p className='subtitle is-4 has-text-light'>
                    Precio: ${precio}
                </p>
            </section>

            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;