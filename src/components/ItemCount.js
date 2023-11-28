import { useState } from "react";

function ItemCount( {stock, initial, onAdd} ) {
    const [quantity, setQuantity] = useState(initial)

    function increment() {
        if (quantity < stock) {
            setQuantity( quantity + 1 )
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity( quantity - 1 )
        }
    }

    return (
        <div className="itemCount">
            <div className="botones">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="itemNumero"> {quantity} </h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;