import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import { valueData } from './data/data';

function App() {

  const [page, setPage] = useState(false)

  const [listTransactions, setListTransactions] = useState(valueData)
  const [valuesFilter, setValuesFilter] = useState([])

  function addValue(valueData) {
    setListTransactions([...listTransactions, valueData])
    setValuesFilter([...listTransactions, valueData])
  }

  function removeValue(id) {
    const newList = listTransactions.filter((transaction => transaction.id !== id))
    const secondList = valuesFilter.filter((value => value.id !== id))
    setListTransactions(newList)
    setValuesFilter(secondList)
  }

  return (
    <div className="App">
      {
        page ? <Dashboard setPage={setPage}
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
        addValue={addValue}
        removeValue={removeValue}
        valuesFilter={valuesFilter}
        /> : <Home setPage={setPage} />
      }
    </div>
  );
}

export default App;
