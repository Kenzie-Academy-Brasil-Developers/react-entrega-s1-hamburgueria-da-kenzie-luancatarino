import "./index.css";
import { ReactComponent as Logo } from "../../imgs/burguer-kenzie.svg";

function Header() {
    return (
        <div className="headerBackground">
            <header className="header">
                <div className="headerContent">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div>
                        <input type="text" className="searchField" placeholder="Digitar Pesquisa" />
                        <button className="btnSearch">Pesquisar</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
