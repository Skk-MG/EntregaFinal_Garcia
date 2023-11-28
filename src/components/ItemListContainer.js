import { useState, useEffect } from "react";
import { getProductos, getCategoriaProductos } from "../asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getCategoriaProductos : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <h1>{greeting}</h1>
            </div>
            <ItemList productos={productos}/>
        </div>
    )
};

export default ItemListContainer;