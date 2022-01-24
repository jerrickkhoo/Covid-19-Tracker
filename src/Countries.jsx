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
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  const arr = [];

  let countryList = data.map((items) => {
    arr.push(items?.country);
  });

  let dict = arr.reduce((a, c) => {
    // c[0] should be the first letter of an entry
    let k = c[0].toLocaleUpperCase();

    // either push to an existing dict entry or create one
    if (a[k]) a[k].push(c);
    else a[k] = [c];

    return a;
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
  ];

  // console.log(dict)

  console.log("a", newArray);

  const listA = newArray?.[0]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listB = newArray?.[1]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listC = newArray?.[2]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listD = newArray?.[3]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listE = newArray?.[4]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listF = newArray?.[5]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listG = newArray?.[6]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listH = newArray?.[7]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listI = newArray?.[8]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listJ = newArray?.[9]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listK = newArray?.[10]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listL = newArray?.[11]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listM = newArray?.[12]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listN = newArray?.[13]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listO = newArray?.[14]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listP = newArray?.[15]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listQ = newArray?.[16]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listR = newArray?.[17]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listS = newArray?.[18]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listT = newArray?.[19]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listU = newArray?.[20]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listV = newArray?.[21]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listW = newArray?.[22]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listX = newArray?.[23]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listY = newArray?.[24]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  const listZ = newArray?.[25]?.[0]?.map((items) => {
    return (
      <div key={items} id="country">
        <p>
          <Link to={"/data/" + items} style={{ color: "black" }}>
            {items}
          </Link>
        </p>
      </div>
    );
  });

  return (
    <div className='country'>
      <div>
        <h2 id="alpha">A</h2>
        <div id="countries">{listA}</div>
      </div>
      <div>
        <h2 id="alpha">B</h2>
        <div id="countries"> {listB}</div>
      </div>
      <div>
        <h2 id="alpha">C</h2>
        <div id="countries"> {listC}</div>
      </div>
      <div>
        <h2 id="alpha">D</h2>
        <div id="countries"> {listD}</div>
      </div>
      <div>
        <h2 id="alpha">E</h2>
        <div id="countries"> {listE}</div>
      </div>
      <div>
        <h2 id="alpha">F</h2>
        <div id="countries"> {listF}</div>
      </div>
      <div>
        <h2 id="alpha">G</h2>
        <div id="countries"> {listG}</div>
      </div>
      <div>
        <h2 id="alpha">H</h2>
        <div id="countries"> {listH}</div>
      </div>
      <div>
        <h2 id="alpha">I</h2>
        <div id="countries"> {listI}</div>
      </div>
      <div>
        <h2 id="alpha">J</h2>
        <div id="countries"> {listJ}</div>
      </div>
      <div>
        <h2 id="alpha">K</h2>
        <div id="countries"> {listK}</div>
      </div>
      <div>
        <h2 id="alpha">L</h2>
        <div id="countries"> {listL}</div>
      </div>
      <div>
        <h2 id="alpha">M</h2>
        <div id="countries"> {listM}</div>
      </div>
      <div>
        <h2 id="alpha">N</h2>
        <div id="countries"> {listN}</div>
      </div>
      <div>
        <h2 id="alpha">O</h2>
        <div id="countries"> {listO}</div>
      </div>
      <div>
        <h2 id="alpha">P</h2>
        <div id="countries"> {listP}</div>
      </div>
      <div>
        <h2 id="alpha">Q</h2>
        <div id="countries"> {listQ}</div>
      </div>
      <div>
        <h2 id="alpha">R</h2>
        <div id="countries"> {listR}</div>
      </div>
      <div>
        <h2 id="alpha">S</h2>
        <div id="countries"> {listS}</div>
      </div>
      <div>
        <h2 id="alpha">T</h2>
        <div id="countries"> {listT}</div>
      </div>
      <div>
        <h2 id="alpha">U</h2>
        <div id="countries"> {listU}</div>
      </div>
      <div>
        <h2 id="alpha">V</h2>
        <div id="countries"> {listV}</div>
      </div>
      <div>
        <h2 id="alpha">W</h2>
        <div id="countries"> {listW}</div>
      </div>
      <div>
        <h2 id="alpha">X</h2>
        <div id="countries"> {listX}</div>
      </div>
      <div>
        <h2 id="alpha">Y</h2>
        <div id="countries"> {listY}</div>
      </div>
      <div>
        <h2 id="alpha">Z</h2>
        <div id="countries"> {listZ}</div>
      </div>
    </div>
  );
};

export default countries;
