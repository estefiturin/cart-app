import { useNavigate } from "react-router-dom";

//contenido del componente padre CatalogView

export const ProductCardView = ({ handler, id, name, description, price}) => {

    const navigate = useNavigate();

    const onAddProduct = (product) => { // recibo el objeto si destructurar
        console.log(product);
        handler(product); // se emite al componente padre original(CartApp)
        navigate('/cart');
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-primary"
                    onClick={ () => onAddProduct({ id, name, description, price }) }
                    >Agregar</button>
                </div>
            </div>

        </>
    )
}
