import React from "react";
import Map from "./Map";
import Chart from "./BarChart";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  const confirmed = parseInt(props.global.TotalConfirmed);
  const deaths = parseInt(props.global.TotalDeaths);
  const date = props.date.slice(0, 10);

  const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
  const getData = () => {
    setStatus("pending");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStatus("complete");
        setData(data);
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
    return "NO DATA FOUND";
  }
  
  const highestConfirmed = data
  console.log(data)
  highestConfirmed?.sort((a, b) => b?.cases - a?.cases);
  const top5C = highestConfirmed.slice(0, 10);
  console.log(highestConfirmed);
  let topConfirmed = top5C.map((item)=>{
      return(
        <h3>
          {item?.country}: {item?.cases.toLocaleString()} cases
        </h3>
      )})
      
      let recoveredPercentage = []
      for(let i = 0; i<data.length; i++){
        recoveredPercentage[i] = {'country': data?.[i]?.country,'percentage':parseInt((data?.[i]?.recovered/data?.[i]?.cases)*100).toFixed(2)}
      }
      // console.log(recoveredPercentage[0]?.country)
  

  const highestRecovered = recoveredPercentage.sort(function(a, b){return b.percentage - a.percentage;});
  const top5R = highestRecovered.slice(0, 10);
  console.log(highestRecovered);
  let topRecovered = top5R.map((item) => {
    return (
      <h3>
        {item?.country}: {item?.percentage}%
      </h3>
    );
  });

   let deathPercentage = []
      for(let i = 0; i<data.length; i++){
        deathPercentage[i] = {'country': data?.[i]?.country,'percentage':parseInt((data?.[i]?.deaths/data?.[i]?.cases)*100).toFixed(2)}
      }
      // console.log(recoveredPercentage[0]?.country)
  

  const highestDeaths = deathPercentage.sort(function(a, b){return b.percentage - a.percentage;});
  const top5D = highestDeaths.slice(0, 10);
  // console.log(highestDeaths);
  let topDeaths = top5D.map((item) => {
    return (
      <h3>
        {item?.country}: {item?.percentage}%
      </h3>
    );
  });

  return (
    <div id="home">
      <h3 className="homepage">Global stats as of {date}</h3>
      <h3 className="homepage">
        Confirmed cases: {confirmed.toLocaleString()}
      </h3>
      <h3 className="homepage">Death count: {deaths.toLocaleString()}</h3>
      <div id="home2">
        <div id="homeChild">
          <h3>Top 10 Countries with highest cases: </h3>
          <h4>{topConfirmed}</h4>
        </div>
        <div id="homeChild">
          <h3>Top 10 Countries with highest recovery rate: </h3>
          <h4 style={{ color: "green" }}>{topRecovered}</h4>
        </div>
        <div id="homeChild">
          <h3>Top 10 Countries with highest death rate: </h3>
          <h4 style={{ color: "red" }}>{topDeaths}</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
