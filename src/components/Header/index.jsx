import "./index.css";
import { ReactComponent as Logo } from "../../imgs/burguer-kenzie.svg";

function Header({showProducts, valueInput, setValueInput}) {
    return (
        <div className="headerBackground">
            <header className="header">
                <div className="headerContent">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="searchField"
                            onChange={(event) => setValueInput(event.target.value)}
                            placeholder="Digitar Pesquisa"
                        />
                        <button
                            type="submit"
                            className="btnSearch"
                            onClick={(event) => {
                                event.preventDefault();
                                console.log(valueInput)
                                showProducts(valueInput);
                            }}
                        >
                            Pesquisar
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
