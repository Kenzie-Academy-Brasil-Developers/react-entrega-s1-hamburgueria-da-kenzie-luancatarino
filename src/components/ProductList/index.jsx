import "./index.css";
import Product from "../Product";

function ProductList({ products, handleClick }) {
    return (
        <div className="productList">
            {products.map((product) => {
                return <Product key={product.id} product={product} handleClick={handleClick} />;
            })}
        </div>
    );
}

export default ProductList;
