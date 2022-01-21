import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let arr = []

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
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  const arr = ['loading'];

  let countryList = data.map((items) => {
    arr.push(items?.country);
  });

  //       return (
  //           <div className="listCountry" key={items?.country} id="result">
  //         <p>
  //           <Link to={"/data/" + items?.country} style={{ color: "black" }}>
  //              {items?.country}
  //            </Link>
  //         </p>
  //       </div>
  //     );
  // });

  let dict = arr.reduce((a, c) => {
    // c[0] should be the first letter of an entry
    let k = c[0].toLocaleUpperCase();

    // either push to an existing dict entry or create one
    if (a[k]) a[k].push(c);
    else a[k] = [c];

    return a;
  }, {});
    
    // let a = [Object.assign({}, dict.A)];
    // let b = [Object.assign({},dict.B)];
    // let c = [Object.assign({},dict.C)];
    // let d = [Object.assign({},dict.D)];
    // let e = [Object.assign({},dict.E)];
    // let f = [Object.assign({},dict.F)];
    // let g = [Object.assign({},dict.G)];
    // let h = [Object.assign({},dict.H)];
    // let i = [Object.assign({},dict.I)];
    // let j = [Object.assign({},dict.J)];
    // let k = [Object.assign({},dict.K)];
    // let l = [Object.assign({},dict.L)];
    // let m = [Object.assign({},dict.M)];
    // let n = [Object.assign({},dict.N)];
    // let o = [Object.assign({},dict.O)];
    // let p = [Object.assign({},dict.P)];
    // let q = [Object.assign({},dict.Q)];
    // let r = [Object.assign({},dict.R)];
    // let s = [Object.assign({},dict.S)];
    // let t = [Object.assign({},dict.T)];
    // let u = [Object.assign({},dict.U)];
    // let v = [Object.assign({},dict.V)];
    // let w = [Object.assign({},dict.W)];
    // let x = [Object.assign({},dict.X)];
    // let y = [Object.assign({},dict.Y)];
    // let z = [Object.assign({},dict.Z)];

    
  let a = [dict.A];
  let b = [dict.B];
  let c = [dict.C];
  let d = [dict.D];
  let e = [dict.E];
  let f = [dict.F];
  let g = [dict.G];
  let h = [dict.H];
  let i = [dict.I];
  let j = [dict.J];
  let k = [dict.K];
  let l = [dict.L];
  let m = [dict.M];
  let n = [dict.N];
  let o = [dict.O];
  let p = [dict.P];
  let q = [dict.Q];
  let r = [dict.R];
  let s = [dict.S];
  let t = [dict.T];
  let u = [dict.U];
  let v = [dict.V];
  let w = [dict.W];
  let x = [dict.X];
  let y = [dict.Y];
  let z = [dict.Z];

  
  
  
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
    ];
  
console.log(dict)

console.log('a',a[0])

    let list = a?.[0]?.map((items, index) => {
                   return (
                        <div className="listCountry" key={items} id="result">
                      <p>
                        <Link to={"/data/" + items} style={{ color: "black" }}>
                           {items}
                         </Link>
                      </p>
                    </div>
      );
  });
  

  return (
    <div id="countries">
      {list}
    </div>
  );
}

 export default countries
