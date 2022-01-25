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
    return "ERROR";
  }

  let highestConfirmed = data;
  highestConfirmed?.sort((a, b) => b?.cases - a?.cases);
  const top5C = highestConfirmed.slice(0, 5);
  console.log(top5C);
  let topConfirmed = top5C.map((item)=>{
    return(
    <h3>
      {item?.country}: {item?.cases.toLocaleString()} cases
    </h3>
  )})

  let highestRecovered = data;
  highestRecovered?.sort((a, b) => b?.cases - a?.cases);
  const top5R = highestRecovered.slice(0, 5);
  console.log(top5R);
  let topRecovered = top5R.map((item) => {
    return (
      <h3>
        {item?.country}: {item?.recovered.toLocaleString()} cases
      </h3>
    );
  });

   let highestDeath = data;
   highestDeath?.sort((a, b) => b?.cases - a?.cases);
   const top5D = highestDeath.slice(0, 5);
   console.log(top5R);
   let topDeath = top5D.map((item) => {
     return (
       <h3>
         {item?.country}: {item?.deaths.toLocaleString()} cases
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
          <h3>Top 5 Countries with highest cases: </h3>
          <h3>{topConfirmed}</h3>
        </div>
        <div id="homeChild">
          <h3>Top 5 Countries with highest recovery: </h3>
          <h3>
            {topRecovered}
          </h3>
        </div>
        <div id="homeChild">
          <h3>Top 5 Countries with highest deaths: </h3>
          <h3>
            {topDeath}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
