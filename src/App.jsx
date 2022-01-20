import { useState, useEffect } from "react";
import "./App.css";
import Map from "./Map";
import Countries from "./Countries";
import Home from './Home'
import Data from './Data'
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  const [country, setCountry] = useState([]);
  const [global, setGlobal] = useState("");
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')

  const getData = () => {
    setStatus('pending')
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        // console.log('api',data)
        setStatus("complete");
        setCountry(data.Countries);
        setGlobal(data.Global);
        setDate(data.Global.Date)
        // console.log(country);
      })
    .catch((error) => {
      setStatus("error");
      console.error("Error:", error);
    });
  };

  useEffect(() => {
    getData();
  }, []);

   if (status === "pending") {
     return "LOADING";
   }

   if (status === "error") {
     return "ERROR";
   }


  return (
    <div id='home'>
      <nav>
        <Link to="/">

          <h1>Covid 19</h1>
        </Link>

        <Link to="/Countries">Countries</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home global={global} date={date} />} />
          <Route path="/Countries" element={<Countries country={country} />} />
          <Route path="/data/:c" element={<Data country={country}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
