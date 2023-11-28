import { useState, useEffect } from "react";
import { getIdProductos } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getIdProductos(itemId)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="detailContainer" >
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer;