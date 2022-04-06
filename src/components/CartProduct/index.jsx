import "./index.css";

function CartProduct({ product, currentSale, setCurrentSale }) {
    function removeProduct() {
        const productRemoved = currentSale.filter((item) => item.id !== product.id);
        setCurrentSale(productRemoved);
    }

    return (
        <>
            <div className="cartProduct">
                <div className="cartProductImg">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="cartProductDetails">
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                </div>
                <p className="cartProductPrice">R$ {product.price.toFixed(2)}</p>
                <button className="removeCartProduct" onClick={removeProduct}>
                    Remover
                </button>
            </div>
        </>
    );
}

export default CartProduct;
