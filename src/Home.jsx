import React from 'react'
import Map from './Map'
import Chart from './BarChart';

const Home = (props) => {

  const confirmed = parseInt(props.global.TotalConfirmed);
  const deaths = parseInt(props.global.TotalDeaths);
  const date = props.date.slice(0, 10);


    return (
      <div id="home">
        <h3 className="homepage">Global stats as of {date}</h3>
        <h3 className="homepage">
          Confirmed cases: {confirmed.toLocaleString()}
        </h3>
        <h3 className='homepage'>Death count: {deaths.toLocaleString()}</h3>
      </div>
    );
}

export default Home
