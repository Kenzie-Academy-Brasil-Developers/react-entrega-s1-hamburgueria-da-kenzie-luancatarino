import "./index.css";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal"

function Cart({currentSale, setCurrentSale}) {

    console.log(currentSale)
    return (
        <div className="cart">
            <div className="cartTitleBackground">
                <h2>Carrinho de Compras</h2>
            </div>
            {currentSale.length > 0 ? (
                
                currentSale.map((productCart) => {
                    return <CartProduct product={productCart} key={productCart.id} currentSale={currentSale} setCurrentSale={setCurrentSale} />
                })
                
                
            ) : (
                <div className="emptyCart">
                    <h3>Sua sacola está vazia</h3>
                    <p>Adicione itens</p>
                </div>
            )}
            {currentSale.length > 0 &&
                <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale}/>}
            
        </div>
    );
}

export default Cart;
