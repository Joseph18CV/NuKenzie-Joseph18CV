import "./card.css"
import Trash from "../../../assets/trash.svg"
import { DivEntrys, DivExpenses } from "../../Div/index.jsx"

function Card ({transactions, removeValue}) {
    if(transactions.id > 0){
        return (
            <li className="card">
                {transactions.type === "Entrada" ? <DivEntrys/> : <DivExpenses/>}
                <div className="div-h3">
                    <h3>{transactions.description}</h3>
                    <div className="div-type-and-button">
                        <span>R$ {transactions.value}</span>
                        <img src={Trash} onClick={() => removeValue(transactions.id)}/>
                    </div>
                </div>
                <div className="div-type">
                    <p>{transactions.type}</p>
                </div>
            </li>
        )
    }   
}

export default Card