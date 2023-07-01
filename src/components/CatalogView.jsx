import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

// no depende del componente padre, por lo tanto no recibe parametros 
// Padre de ProductCardView. Hijo de CartView
export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            setProducts(getProducts());
        }, []);

        // construye los recuadros de los productos
    return (
        <>
            <div className="row">
                {products.map(prod => (
                    <div className="col-4 my-2"
                        key={prod.id}>
                        <ProductCardView
                            handler={ handler }
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}