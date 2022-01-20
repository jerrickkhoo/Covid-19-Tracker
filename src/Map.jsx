import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";
import {useState, useEffect} from 'react'


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
  const [country, setCountry] = useState([]);


const getCountry = () => {
  let url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
     const n = data
     setCountry(n)
    })
    
};

useEffect(() => {
  getCountry();
}, []);

// let countryLocation = ()=> {
// for(let i = 0; i < country.length; i++){
  // console.log(country[i].name?.common)


  // let countryLocation = country.map(item=>{

let markers = []
for(let i =0; i<country.length; i++){
markers.push(
  { markerOffset: -15,
   name: country[i]?.name?.common,
   coordinates: [country[i]?.latlng[1], country[i]?.latlng[0]] }
// );
// markers.push({name:country[i]?.name?.common})
// markers.push({coordiates: [country[i]?.latlng[1],country[i]?.latlng[0]] });
)

}

// console.log(markers)

const countryName = document.getElementById('countryName')
function toggle() {
  if (countryName.style.display !== "none") {
    countryName.style.display = "none";
  } else {
    countryName.style.display = "block";
  }
}

  return (
    <div id="map">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="darkgrey" />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker coordinates={coordinates} fill="#777">
            <text textAnchor="middle" fill="#F53" fontSize='8px'>
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
  


  return (      
      <div></div>
    );

  }



export default Map
