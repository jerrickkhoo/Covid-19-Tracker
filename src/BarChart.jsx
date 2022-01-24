import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);



const BarChart = (props) => {
const [data, setData] = useState("");
const [status, setStatus] = useState("");


  const params = props.params

  const url = `https://corona.lmao.ninja/v2/historical/${params.c}?lastdays=31`;

  const getData = () => {
    setStatus("pending");
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        setStatus("complete");
        setData(info.timeline.cases);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  let keys = Object.keys(data);
  keys.shift()
//   console.log("k", keys);
  let value = Object.values(data);
  let values = []
  for(let i=0;i<value.length;i++){
    values[i]=value[i]-value[i-1]
  }
  values.shift()
  // console.log("v", values);

  return (
  <div>
      <Bar
        data={{
        labels: keys,
        datasets:[
            {
                label: '# of cases for past 30 days',
                data: values,
                backgroundColor:'teal'
            }
        ]
        }}
        height={300}
        width={500}
        options={{
            maintainAspectRatio:false,
        }}
    id='bar'/> 
  </div>
  )
};

export default BarChart;
