import Card from "./Card"
import "./ul.css"

function List ({listTransactions, removeValue, valuesFilter}) {
    return (
        <ul className="ul-cards">
            {listTransactions.map((transactions, index) => (
                <Card key={index} transactions={transactions} removeValue={removeValue} valuesFilter={valuesFilter}/>
            ))}
        </ul>
    )
}

export default List