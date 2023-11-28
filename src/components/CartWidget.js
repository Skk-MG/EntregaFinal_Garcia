import cart from './assets/cart.svg';

function Carrito() {

    return (
        <div className='carrito'>
            <img src={cart} alt='cart-widget' />
            <span className='numeroCarrito'>5</span>
        </div>
    )
}

export default Carrito;