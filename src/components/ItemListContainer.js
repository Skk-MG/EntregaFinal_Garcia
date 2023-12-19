import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [nombre, setNombre] = useState("Productos");

    const categoria = useParams().categoria;

    useEffect(() => {

        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
            })
            .catch(error => {
                console.log(error);
            })
    }, [categoria])

    return (
        <div>
            <ItemList productos={productos} nombre={nombre}/>
        </div>
    )
};

export default ItemListContainer;