import "./index.css";

function Cart(currentSale) {
    return (
        <div className="cart">
            <div className="cartTitleBackground">
                <h2>Carrinho de Compras</h2>
            </div>
            <div className="emptyCart">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
            </div>
        </div>
    );
}

export default Cart;

