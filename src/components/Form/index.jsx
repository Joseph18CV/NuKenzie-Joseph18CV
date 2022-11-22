import { useState } from "react"
import { valueData } from "../../data/data"
import "./form.css"    

function Form ({listTransactions, addValue}) {
 
    const [formData, setFormData] = useState({
        id: valueData.length + 1,
        description: "",
        type: "",
        value: "",
    })

    function dontUpdatePage (event) {
        if(formData.description !== "" && formData.type !== "" && formData.value !== ""){

            event.preventDefault()
            addValue(formData)
            setFormData({
                id: formData.id + 1,
                description: "",
                type: "",
                value: "",
            })
        }else{
            event.preventDefault() 
        }
    }
    return (
        <form onSubmit={dontUpdatePage}>
            <label htmlFor="description">Descrição</label>
            <input type="text" 
            placeholder="Digite aqui sua descrição" 
            id="description" 
            autoComplete="off"
            onChange={(event) => setFormData({...formData, description: event.target.value})}
            value={formData.description}
            ></input>
            <span>Ex: Compra de roupas</span>
            <div className="inputs">
                <div className="div-input-number">
                    <label htmlFor="number">Valor</label>
                    <input type="number" 
                    placeholder="1                           R$" 
                    id="number"
                    onChange={(event) => setFormData({...formData, value: event.target.value})}
                    value={formData.value}
                    ></input>
                </div>
                <div className="div-select">
                    <label htmlFor="type">Tipo de valor</label>
                    <select value={formData.type} onChange={(event) => {if(event.target.value !== "Tipo do valor") setFormData({...formData, type: event.target.value})}}>
                        <option>Tipo do valor</option>
                        <option>Entrada</option>
                        <option>Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit" id="button-insert-value">Inserir valor</button>
        </form>
    )
}

export default Form