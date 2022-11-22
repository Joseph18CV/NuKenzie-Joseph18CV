import "./total.css"

function TotalMoney ({valuesFilter}) {
    
    const totalPrice = valuesFilter.reduce((acc, value) => {
        return (acc + (value.type === "Entrada" ? parseInt(value.value) : parseInt(value.value) * -1))
    }, 0)
    
    return (
        <div className="div-container-total">
            <div className="total-value">
                <h2>Valor total:</h2>
                <span>R${totalPrice}</span>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )   
}

export default TotalMoney