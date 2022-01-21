import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BarChart from './BarChart'

const Data = (props) => {
  const params = useParams();
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [h, setH] = useState("");

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
        console.error("Error:", error);
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
    return "ERROR";
  }


  let keys = Object.keys(h);
  keys.shift()
  //   console.log("k", keys);
  let value = Object.values(h);
  let values = [];
  for (let i = 0; i < value.length; i++) {
    values[i] = value[i] - value[i - 1];
  }
  values.shift();
  
  let arr = []
  for (let i = 0; i < keys.length; i++) {
  arr[i] = [keys[i],values[i]]
  }
  arr=arr.reverse()
  // console.log("v", arr);
  

  

  let list = arr.map((item) => {
    return (
      <h3>
        {item[0]}: {item[1]} cases
      </h3>
    );
  });

  return (
    <>
      <div
        style={{ backgroundImage: `url(${data2?.countryInfo?.flag})` }}
        id="flag"
      ></div>
      <h1 id="title">{params.c.toUpperCase()}</h1>
      <div className="data">
        <div className="dataChild" style={{ backgroundColor: "lightgrey" }}>
          <h3 id="hData">Historical Data Total Cumulative:</h3>
          <h4>{list}</h4>
        </div>
        <div className="dataChild" id="data2">
          <h3>Population: {data2.population}</h3>
          <h3>Total cases: {data2.cases} </h3>
          <h3>Total deaths: {data2.deaths} </h3>
          <h3>Total recovered: {data2.recovered} </h3>
        </div>
        <BarChart params={params} />
      </div>
    </>
  );

  //   const dataList = data.slice().reverse();
  //   let dataListReverse = dataList.map((items) => {
  //     return (
  //       <>
  //         <p>
  //           Date: {items.Date.slice(0, 10)}
  //           <br />
  //           Total Confirmed: {items?.Confirmed}
  //           <br />
  //           Province: {items?.Province}
  //         </p>
  //       </>
  //     );
  //   });

  // const dataList2 = data2.slice().reverse()
  // let dataList2Reverse = dataList2.map((items) => {
  //   return (
  //     <>
  //       <p>
  //         Date: {items?.Date.slice(0, 10)}
  //         <br />
  //         Total Confirmed: {items?.Confirmed}
  //       </p>
  //     </>
  //   );
  // });

  // let header = params.c.toUpperCase()

  //   return (
  //     <>
  //       <h1 id="dataHeader">{header}</h1>
  //       <div class="data">
  //         <div class="dataChild">
  //           <h2>Cases by provinces: </h2>
  //           <div>{dataListReverse}</div>
  //         </div>
  //         <div>
  //           <h3 class="dataChild" id="data2">
  //             Total Cases: {data2?.cases}
  //             <br />
  //             Cases Today: {data2?.todayCases}
  //             <br />
  //             Deaths Today: {data2?.todayDeaths}
  //           </h3>
  //           <div></div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
};;
export default Data;
