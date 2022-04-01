import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    function showProducts() {}

    function handleClick(productId) {}

    useEffect(() => {
        fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res));
        console.log(products);
    }, []);

    return (
        <div className="content">
            <div className="App">
                <Header />
            </div>
            <div className="mainCotent">
                <ProductList products={products} setProducts={setProducts} handleClick={handleClick} />
                <Cart currentSale={currentSale} />
            </div>
        </div>
    );
}

export default App;
