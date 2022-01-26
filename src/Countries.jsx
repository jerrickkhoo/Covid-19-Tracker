import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let arr = [];

const countries = (props) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [group, setGroup] = useState([]);

  const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
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

  const arr = [];

  let countryList = data.map((items) => {
    arr.push(items?.country);
  });


  let dict = arr.reduce((acc, country) => {
    let firstLetter = country[0];

    if (acc[firstLetter]) acc[firstLetter].push(country);
    else acc[firstLetter] = [country];

    return acc;
  }, {});

  const newArray = [
    [dict.A],
    [dict.B],
    [dict.C],
    [dict.D],
    [dict.E],
    [dict.F],
    [dict.G],
    [dict.H],
    [dict.I],
    [dict.J],
    [dict.K],
    [dict.L],
    [dict.M],
    [dict.N],
    [dict.O],
    [dict.P],
    [dict.Q],
    [dict.R],
    [dict.S],
    [dict.T],
    [dict.U],
    [dict.V],
    [dict.W],
    [dict.X],
    [dict.Y],
    [dict.Z],
  ]


const lists = newArray.map((item)=>{
    let alphabet = (item[0]?.[0].charAt(0))
    return (
        <div className="child">
          <h3 id='alph'>{alphabet}</h3>
        {item?.[0]?.map((item1) => {
          return (
            <span key={item1}>
              <Link
                to={"/data/" + item1}
                style={{ color: "black" }}
                className='link'
              >
                {item1}
              </Link>
            </span>
          );
        })}
      </div>
    );})



  return (
    <div className='country'>

{lists}
 </div>
  );
};

export default countries;
