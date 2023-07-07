
// Esta funcion realiza una solicitud HTTP a una API Rest para obtener una lista de productos.
export const getProducts = async() => {

    // consumir una api rest
    const response = await fetch('http://localhost:8080/products'); // respuesta

    const products = await response.json();

    return products;
}

export const calculateTotal = (items) => {
    return items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}