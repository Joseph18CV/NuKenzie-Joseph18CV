import NoCard from "../../assets/NoCard.svg"
import "./nocard.css"

function NoCardF () {
    return (
        <div className="div-no-card">
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={NoCard}/>
        </div>
    )
}

export default NoCardF