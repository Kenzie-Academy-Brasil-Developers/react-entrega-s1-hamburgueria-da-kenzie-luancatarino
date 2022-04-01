import "./index.css";

function Product({ key, product, handleClick }) {
    return (
        <div className="productCard">
            <div className="imgBackground">
                <img className="productImg" src={product.img} alt="" />
            </div>
            <div className="productDetails">
                <h3 className="productName">{product.name}</h3>
                <p className="productCategory"> {product.category}</p>
                <p className="productPrice">R$ {product.price.toFixed(2)}</p>
                <button className="btnAdd"
                    onClick={() => {
                        handleClick(key);
                    }}
                >
                    Adicionar
                </button>
            </div>
        </div>
    );
}

export default Product;
