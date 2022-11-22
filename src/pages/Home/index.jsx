import "./index.css"
import Logo from "../../assets/nukenzie1.svg"
import LogoHome from "../../assets/illustration.svg"


function Home ({setPage}) {
    return (
        <div className="container">
            <div className="div-home">
                <img src={Logo} />
                <p>Centralize o controle das suas finanças</p>
                <span>de forma rápida e segura</span>
                <button onClick={() => setPage(true)} type="button">Iniciar</button>
            </div>
            <div className="div-img">
                <img src={LogoHome} />
            </div>
        </div>
    )
}

export default Home