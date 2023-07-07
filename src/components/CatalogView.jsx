import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

// no depende del componente padre, por lo tanto no recibe parametros 
// Padre de ProductCardView. Hijo de CartView
export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    // rta json getProducts de productService
    const findAll = async() => {
        const prods = await getProducts();
        setProducts(prods);
        setIsLoading(false);
    }

    useEffect(
        () => {
            findAll();  
        }, []);

        // construye los recuadros de los productos
    return (
        <>
            {
                isLoading && <div className="alert alert-info">Cargando...</div>
            }
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