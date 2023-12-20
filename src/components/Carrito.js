import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { BsCart } from "react-icons/bs";


function Carrito() {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="mainTitle">Carrito<BsCart/></h1>

            <div className="containerTitulosCarrito">
                <h4>Item</h4>
                <h4>Precio Individual</h4>
                <h4>Cantidad</h4>
                <h4>Precio Total</h4>
            </div>

            {
                carrito.map((prod) => (
                    <div key={prod.id} className="containerCarrito">
                        <h3 className="detallesItemCarrito oscuro">{prod.nombre}</h3>
                        <p className="detallesItemCarrito claro">${prod.precio}</p>
                        <p className="detallesItemCarrito oscuro">{prod.cantidad}</p>
                        <p className="detallesItemCarrito claro">${prod.precio * prod.cantidad}</p>
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2 className="detallesItemCarrito total">Precio Total: ${precioTotal()}</h2>
                    <div className="containerBotones">
                        <button className="botonCarrito" onClick={handleVaciar}>Vaciar</button>
                        <Link className="botonCarrito checkout" to="/checkout">Finalizar compra</Link>
                    </div>
                </> :
                <h2 className="carritoVacio">El carrito esta vacio ¯\_(ツ)_/¯</h2>
            }

        </div>
    )
}

export default Carrito;