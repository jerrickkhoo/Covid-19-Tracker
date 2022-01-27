import React from 'react';
import { useState, useEffect } from "react";


const HistoricalData = (props) => {

const params = props.params
const chart = props.chart
const url = `https://corona.lmao.ninja/v2/historical/${params.c}?lastdays=${chart}`;


const [data, setData] = useState("");
const [status, setStatus] = useState("");
const [h, setH] = useState("");


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

;

return (
<div>
{list}
</div>
)
}

export default HistoricalData;
