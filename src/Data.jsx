import React from 'react'
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'



const Data = (props) => {
const params = useParams();
  const [status, setStatus] = useState("");
  const [data, setData]=useState([])

const url = `https://api.covid19api.com/live/country/${params.c}/status/confirmed`

const getData = () => {
  setStatus("pending");
  fetch(url)
    .then((response) => response.json())
    .then((info) => {
      setStatus("complete");
      setData(info);
    })
    .catch((error) => {
      setStatus("error");
      console.error("Error:", error);
    });
};

useEffect(() => {
  getData();
}, [url]);

if (status === "pending") {
  return "LOADING";
}

if (status === "error") {
  return "ERROR";
}

const dataList = data.slice().reverse()
let dataList2 = dataList.map((items) => {
  return (
    <div key={items.ID}>
        
      <p>
        Date: {items.Date.slice(0,10)}
        <br />
        Total Confirmed: {items?.Confirmed}

      </p>
    </div>
  );
}); 






    return (
      <div>
        <h1 id='dataHeader'>{params.c}</h1>
        <h2>Total confirmed: </h2>
        {dataList2}
      </div>
    );
}

export default Data
