import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log(error);
            })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra!❤️</h1>
                <p className='pedido'>Tu ID de pedido es: <span>{pedidoId}</span></p>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            
            <div className='containerBotonesEnviar'>
                <button className="enviar" type="submit">Comprar</button>
                <Link to="/" className="cancelar">Cancelar</Link>
            </div>

        </form>
    </div>
  )
}

export default Checkout;