import React, { useEffect, useState } from "react";
import { getProducts } from "./services/productService"
import { CatalogView } from "./components/CatalogView";
import { CartView } from "./components/CartView";


// obtener valores
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; // convierte un objeto String en un objeto


export const CartApp = () => {

    const [ cartItems , setCartItems ] = useState(initialCartItems);

    const handlerAddProductCard = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if(hasItem){
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])
            cartItems.map((i) => {
                if (i.product.id === product.id) {
                    i.quantity = i.quantity + 1;
                }
                return i;
            })
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }


    return (
        <>
            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={ handlerAddProductCard } />

                { cartItems.quantity?.length <= 0  || 
                    (
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
                }
                
            </div>

        </>

    )
}