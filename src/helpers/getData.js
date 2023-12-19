import asyncMock from "../data/asyncMock.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(asyncMock);
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = asyncMock.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}