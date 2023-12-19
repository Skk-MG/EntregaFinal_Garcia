import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";


function CartWidget() {

    const { cantidadEnCarrito } = useContext(CartContext)

    return (
        <div>
            <Link className="carrito" to='/cart'>
                <BsCart/>
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget;