import "./header.css"
import Logo from "../../assets/nukenzie2.svg"

function Header ({setPage}) {
    return (
        <header className="header">
            <div className="header-container">
                <img src={Logo} />
                <button onClick={() => setPage(false)}  type="button">Início</button>
            </div>
        </header>
    )
}

export default Header