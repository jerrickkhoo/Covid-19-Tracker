import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BarChart from "./BarChart";

const Data = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [h, setH] = useState("");
  const [chart,setChart]=useState('')
  const [timeframe, setTimeframe] = useState('no. of cases for past 30 days')
  const url = `https://corona.lmao.ninja/v2/historical/${params.c}?lastdays=all`;

  const getData = () => {
    setStatus("pending");
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        setStatus("complete");
        setData(info);
        setH(info.timeline.cases);
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  const url2 = `https://corona.lmao.ninja/v2/countries/${params.c}?yesterday=true&strict=true&query`;
  const getData2 = () => {
    setStatus("pending");
    fetch(url2)
      .then((response) => response.json())
      .then((info) => {
        setStatus("complete");
        setData2(info);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getData2();
  }, [url2]);

  if (status === "pending") {
    return "LOADING";
  }

  if (status === "error") {
    return "NO DATA FOUND";
  }

  let keys = Object.keys(h);
  keys.shift();
  //   console.log("k", keys);
  let value = Object.values(h);
  let values = [];
  for (let i = 0; i < value.length; i++) {
    values[i] = value[i] - value[i - 1];
  }
  values.shift();

  let arr = [];
  for (let i = 0; i < keys.length; i++) {
    arr[i] = [keys[i], values[i]];
  }
  arr = arr.reverse();
  // console.log("v", arr);

  let list = arr.map((item) => {
    return (
      <h3>
        {item[0]}: {item[1].toLocaleString()} cases
      </h3>
    );
  });

  const population = parseInt(data2.population);
  const cases = parseInt(data2.cases);
  const deaths = parseInt(data2.deaths);
  const recovered = parseInt(data2.recovered);
  const active = parseInt(data2.active);
  const critical = parseInt(data2.critical);
  const deathPercentage = (deaths/cases*100).toFixed(2)
  const recoveryPercentage = (recovered/cases*100).toFixed(2)
  const activePercentage = ((active / cases) * 100).toFixed(2);
  const casesPercentage = ((cases / population) * 100).toFixed(2);


  function handleChart7 () {
    setChart('8')
    setTimeframe('no. of cases for past 7 days')
  }

  function handleChart30() {
    setChart("31");
    setTimeframe("no. of cases for past 30 days");

  }
  function handleChart1() {
    setChart("366");
    setTimeframe("no. of cases for past year");

  }
  function handleChartAll() {
    setChart("all");    
    setTimeframe("all no. of cases");

  }

  return (
    <>
      <div className="firstDataDiv">
        <div className="dataHeader">
          <div
            style={{ backgroundImage: `url(${data2?.countryInfo?.flag})` }}
            id="flag"
          ></div>
          <h1 id="title">{params.c.toUpperCase()}</h1>
        </div>
        <div className="dataHeader" id="data2">
          <h3>Population: {population.toLocaleString()}</h3>
          <h5 style={{ color: "darkorange" }}>{casesPercentage}% infected</h5>
          <h3>Active cases: {active.toLocaleString()} </h3>
          <h5 style={{ color: "darkorange" }}>
            {activePercentage}% of total cases
          </h5>
        </div>
        <div className="dataHeader" id="data3">
          <h3>Total cases: {cases.toLocaleString()} </h3>
          <h5 style={{ color: "red" }}>
            {" "}
            {critical.toLocaleString()} critical
          </h5>
          <h3>Total deaths: {deaths.toLocaleString()} </h3>
          <h5 style={{ color: "red" }}>{deathPercentage}% of total cases</h5>

          <h3>Total recovered: {recovered.toLocaleString()} </h3>
          <h5 style={{ color: "green" }}>
            {recoveryPercentage}% of total cases
          </h5>
        </div>
      </div>
      <div className="secondDataDiv">
        <div className="dataChild1" style={{ backgroundColor: "white" }}>
          <h3 id="hData">Historical Daily Cases:</h3>
          <h4>{list}</h4>
        </div>
        <div className="dataChild2">
          <h3 style={{ textAlign: "center" }}>Historical Graph</h3>
          <button onClick={handleChart7} className="chartButton">
            7d
          </button>
          <button onClick={handleChart30} className="chartButton">
            30d
          </button>
          <button onClick={handleChart1} className="chartButton">
            1y
          </button>
          <button onClick={handleChartAll} className="chartButton">
            All
          </button>
          <BarChart params={params} chart={chart} timeframe={timeframe} />
        </div>
      </div>
    </>
  );
};

export default Data;
