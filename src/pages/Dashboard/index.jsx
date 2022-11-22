import "./dash.css"
import Header from "../../components/Header"
import Form from "../../components/Form"
import List from "../../components/List"
import TotalMoney from "../../components/TotalMoney"
import NoCardF from "../../components/NoCard"

function Dashboard ({setPage, listTransactions, setListTransactions, addValue, removeValue, valuesFilter}) {
    function Expenses () {
        const filter = valuesFilter.filter((value) => value.type === "Despesa")
        setListTransactions(filter)
    }

    function Entrys () {
        const filter = valuesFilter.filter((value) => value.type === "Entrada")
        setListTransactions(filter)
    }

    function All () {
        setListTransactions(valuesFilter)
    }

    return (
        <>
            <Header setPage={setPage}/>
                <div className="div-container">
                    <div className="div-container-left">
                        <Form listTransactions={listTransactions} 
                            setListTransactions={setListTransactions}
                            addValue={addValue}
                            />
                        <div>
                            {listTransactions.length && valuesFilter.length > 1 ? 
                            <TotalMoney listTransactions={listTransactions} valuesFilter={valuesFilter}/> 
                            : ""}
                        </div>
                    </div>
                    <div className="container-div-right">
                        <div className="div-container-right">
                            <h2>Resumo financeiro</h2>
                            <div className="buttons">
                                <button onClick={All}>Todos</button>
                                <button onClick={Entrys}>Entradas</button>
                                <button onClick={Expenses}>Despesas</button>
                            </div>
                        </div>
                        <div className="ul-list-entrys-and-expenses">
                            {listTransactions.length && valuesFilter.length > 1 ? "" : <NoCardF/>}
                            <List listTransactions={listTransactions} 
                            setListTransactions={setListTransactions}
                            removeValue={removeValue}
                            valuesFilter={valuesFilter}
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Dashboard