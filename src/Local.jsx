import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BarChart from "./BarChart";

const Local = () => {
const [status, setStatus] = useState("");
const [data, setData] = useState("");
const [data2, setData2] = useState("");


const url = `https://corona.lmao.ninja/v2/countries/Singapore?yesterday=true&strict=true&query`;

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

// const url2 = `https://corona.lmao.ninja/v2/historical/${params.c}?lastdays=all`;
// const getData2 = () => {
//   setStatus("pending");
//   fetch(url2)
//     .then((response) => response.json())
//     .then((info) => {
//       setStatus("complete");
//       setData2(info);
//     })
//     .catch((error) => {
//       setStatus("error");
//       console.error("Error:", error);
//     });
// };

// useEffect(() => {
//   getData2();
// }, [url2]);

// if (status === "pending") {
//   return "LOADING";
// }

// if (status === "error") {
//   return "ERROR";
// }

 const population = parseInt(data.population);
 const cases = parseInt(data.cases);
 const deaths = parseInt(data.deaths);
 const recovered = parseInt(data.recovered);
 const active = parseInt(data.active);
 const critical = parseInt(data.critical);

  return (
    <>
      <div id='local'>
          <h3>Population: {population.toLocaleString()}</h3>
          <h3>Total cases: {cases.toLocaleString()} </h3>
          <h3>Total deaths: {deaths.toLocaleString()} </h3>
          <h3>Total recovered: {recovered.toLocaleString()} </h3>
          <h3>Active cases: {active.toLocaleString()} </h3>
          <h3>Critical cases: {critical.toLocaleString()} </h3>
        </div>    
        </>
  );
};

export default Local;
