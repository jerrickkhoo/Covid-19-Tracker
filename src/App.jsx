import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [global, setGlobal] = useState('')

  const getData = () => {
    fetch ('https://api.covid19api.com/summary')
    .then((response)=>response.json())
    .then((data)=>{
      const n = data.Global
      setGlobal(n)
    }
    )
  }

useEffect(()=>{
  getData();
},[]
)

  return (
    <div className="App">
      <h1>Covid-19 Data</h1>
      <div>Global:</div>
      <div>Confirmed: {global?.NewConfirmed}</div>
    </div>
  );
}

export default App
