import "./index.css";
import Product from "../Product";

function ProductList({ handleClick, filteredProducts }) {
    console.log(filteredProducts);
    return (
        <div className="productList">
            {filteredProducts.length > 0 && 
            filteredProducts.map((product) => {
                return <Product key={product.id} product={product} handleClick={handleClick} />
            })}
        </div>
        );
}

export default ProductList;
