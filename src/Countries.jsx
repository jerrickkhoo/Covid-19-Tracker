import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let arr = []

const countries = (props) => {
    const [data,setData]=useState([])
    const [status,setStatus]=useState('')
    const [group, setGroup]=useState([])

    const url = 'https://corona.lmao.ninja/v2/countries?yesterday&sort'
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

  const arr = []
  
  let countryList = data.map((items) => {
      arr.push(items?.country)
      return (
          <div className="listCountry" key={items?.country} id="result">
        <p>
          <Link to={"/data/" + items?.country} style={{ color: "black" }}>
            {items?.country}
          </Link>
        </p>
      </div>
    );
});

console.log(arr)
return (
    <div id='countries'>
           {countryList}
        </div>
    )
}

 export default countries
