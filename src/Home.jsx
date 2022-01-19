import React from 'react'

const Home = (props) => {

  const confirmed = parseInt(props.global.TotalConfirmed);
  const deaths = parseInt(props.global.TotalDeaths);
  const date2 = props.date.slice(0, 10);


    return (
      <div>
        <h3>Global stats as of {date2}</h3>
        <h3>Confirmed cases: {confirmed}</h3>
        <h3>Death count: {deaths}</h3>
      </div>
    );
}

export default Home
