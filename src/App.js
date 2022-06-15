import "./App.css";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [valueInput, setValueInput] = useState("");

    useEffect(() => {
        fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
                setFilteredProducts(res);
            });
    }, []);

    function showProducts(valueInput) {
        const allResearchedProducts = products.filter(
            (product) =>
                product.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .includes(
                        valueInput
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                    ) ||
                product.category
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .includes(
                        valueInput
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                    )
        );

        valueInput.length === 0 ? setFilteredProducts(products) : setFilteredProducts(allResearchedProducts);
    }

    function handleClick(productId) {
        const productCart = products.find((product) => productId === product.id);
        currentSale.includes(productCart)
            ? alert("Você já adicionou esse item no carrinho!")
            : setCurrentSale([...currentSale, productCart]);
    }

    return (
        <div className="content">
            <div className="App">
                <Header
                    showProducts={showProducts}
                    valueInput={valueInput}
                    setValueInput={setValueInput}
                    filteredProducts={filteredProducts}
                />
            </div>
            <div className="mainCotent">
                <ProductList
                    products={products}
                    setProducts={setProducts}
                    filteredProducts={filteredProducts}
                    handleClick={handleClick}
                />
                <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
            </div>
        </div>
    );
}

export default App;
