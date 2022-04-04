import "./index.css";

function CartTotal({currentSale, setCurrentSale }) {
    function totalValue() {
        const totalCart = currentSale.map((product) => product.price).reduce((accumulator, current) => accumulator + current);
        return totalCart;
    }

    function removeAll() {
        setCurrentSale([]);
    }

    return (
        <div className="cartProductTotal">
            <div className="cartSeparation"></div>
            <div className="cartTotal">
                <h3>Total</h3>
                <p>R$ {totalValue().toFixed(2)}</p>
            </div>
            <button className="removeAll" onClick={removeAll}>
                Remover Todos
            </button>
        </div>
    );
}

export default CartTotal;
