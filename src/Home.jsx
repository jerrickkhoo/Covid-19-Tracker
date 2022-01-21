import React from 'react'
import Map from './Map'
import Chart from './BarChart';

const Home = (props) => {

  const confirmed = parseInt(props.global.TotalConfirmed);
  const deaths = parseInt(props.global.TotalDeaths);
  const date2 = props.date.slice(0, 10);


    return (
      <div id='home'>
        <h3>Global stats as of {date2}</h3>
        <h3>Confirmed cases: {confirmed}</h3>
        <h3>Death count: {deaths}</h3>
        <Map />
      </div>
    );
}

export default Home
