import React from 'react';
import {useState,useEffect} from 'react'
import CompareBarChart1 from './CompareBarChart1';
import CompareBarChart2 from './CompareBarChart2';

const Compare = () => {
const [status, setStatus] = useState("");
const [data, setData] = useState("");
const [search1, setSearch1] = useState('')
const [search2, setSearch2] = useState("");
const [chart1, setChart1] = useState("");
const [chart2, setChart2] = useState("");
const [timeframe1, setTimeframe1] = useState("No. Of Cases For Past 30 Days");
const [timeframe2, setTimeframe2] = useState("No. Of Cases For Past 30 Days");




 const url = `https://corona.lmao.ninja/v2/countries/${search1},${search2}?yesterday`;
 const getData = () => {
   setStatus("pending");
   fetch(url)
     .then((response) => response.json())
     .then((info) => {
       setStatus("complete");
       setData(info);
    //    setSearch1('')
    //    setSearch2('')
     })
     .catch((error) => {
       setStatus("error");
     });
 };

 useEffect(() => {
   getData();
 }, []);

 if (status === "pending") {
   return "LOADING";
 }

 if (status === "error") {
   return "NO DATA FOUND";
 }

 function searchText1(e) {
    setSearch1(e.target.value);
 }

 function searchText2(e) {
   setSearch2(e.target.value);
 }

 function handleClick () {
     getData()
 }


 function handle1Chart7() {
   setChart1("8");
   setTimeframe1("No. Of Cases For Past 7 Days");
 }

 function handle1Chart30() {
   setChart1("31");
    setTimeframe1("No. Of Cases For Past 30 Days");

 }
 function handle1Chart1() {
   setChart1("366");
    setTimeframe1("No. Of Cases for Past Year");

 }
 function handle1ChartAll() {
   setChart1("all");
    setTimeframe1("All No. Of Cases");

 }

 function handle2Chart7() {
   setChart2("8");
    setTimeframe2("No. Of Cases For Past 7 Days");

 }

 function handle2Chart30() {
   setChart2("31");
    setTimeframe2("No. Of Cases For Past 30 Days");

 }
 function handle2Chart1() {
   setChart2("366");
    setTimeframe2("No. Of Cases for Past Year");

 }
 function handle2ChartAll() {
   setChart2("all");
    setTimeframe2("All No. Of Cases");

 }

  return (
    <>
      <div id="searches">
        <div className="search">
          <input
            type="text"
            placeholder="Country 1"
            onChange={searchText1}
            value={search1}
          />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Country 2"
            onChange={searchText2}
            value={search2}
          />
        </div>
      </div>
      <div id="button">
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="compareC">
        <div id="c1" className="half">
          <h3 id="c1name">{data[0]?.country}</h3>
          <div
            style={{ backgroundImage: `url(${data[0]?.countryInfo?.flag})` }}
            id="flag1"
          ></div>
          <h3>Population: {data[0]?.population.toLocaleString()}</h3>
          <h3>Total cases: {data[0]?.cases.toLocaleString()} </h3>
          <h3>Total deaths: {data[0]?.deaths.toLocaleString()} </h3>
          <h3>Total recovered: {data[0]?.recovered.toLocaleString()} </h3>
          <h3>
            1 case per {data[0]?.oneCasePerPeople.toLocaleString()} people
          </h3>
          <button onClick={handle1Chart7} className="chartButton">
            7d
          </button>
          <button onClick={handle1Chart30} className="chartButton">
            30d
          </button>
          <button onClick={handle1Chart1} className="chartButton">
            1y
          </button>
          <button onClick={handle1ChartAll} className="chartButton">
            All
          </button>
          <CompareBarChart1 country={data[0]?.country} chart={chart1} timeframe={timeframe1}/>
        </div>
        <div id="c2" className="half">
          <h3 id="c2name">{data[1]?.country}</h3>
          <div
            style={{ backgroundImage: `url(${data[1]?.countryInfo?.flag})` }}
            id="flag2"
          ></div>
          <h3>Population: {data[1]?.population.toLocaleString()}</h3>
          <h3>Total cases: {data[1]?.cases.toLocaleString()} </h3>
          <h3>Total deaths: {data[1]?.deaths.toLocaleString()} </h3>
          <h3>Total recovered: {data[1]?.recovered.toLocaleString()} </h3>
          <h3>
            1 case per {data[1]?.oneCasePerPeople.toLocaleString()} people
          </h3>
          <button onClick={handle2Chart7} className="chartButton">
            7d
          </button>
          <button onClick={handle2Chart30} className="chartButton">
            30d
          </button>
          <button onClick={handle2Chart1} className="chartButton">
            1y
          </button>
          <button onClick={handle2ChartAll} className="chartButton">
            All
          </button>
          <CompareBarChart2 country={data[1]?.country} chart={chart2} timeframe={timeframe2}/>
        </div>
      </div>
    </>
  );
};

export default Compare;
