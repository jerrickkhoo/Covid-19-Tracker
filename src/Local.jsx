import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const Local = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [chart, setChart] = useState("");
  const [timeframe, setTimeframe] = useState("No. Of Cases For Past 30 Days");

  const url = `https://corona.lmao.ninja/v2/countries/Singapore?yesterday=true&strict=true&query`;

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

  const url2 =
    "https://data.gov.sg/api/action/datastore_search?resource_id=9ec89dc0-cb6b-4604-aaff-382d5e850206&limit=30";
  const getData2 = () => {
    setStatus("pending");
    fetch(url2)
      .then((response) => response.json())
      .then((info) => {
        setStatus("complete");
        setData2(info);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getData2();
  }, [url2]);

  const population = parseInt(data.population);
  const cases = parseInt(data.cases);
  const deaths = parseInt(data.deaths);
  const recovered = parseInt(data.recovered);
  const active = parseInt(data.active);
  const critical = parseInt(data.critical);
  const deathPercentage = ((deaths / cases) * 100).toFixed(2);
  const recoveryPercentage = ((recovered / cases) * 100).toFixed(2);
  const activePercentage = ((active / cases) * 100).toFixed(2);
  const casesPercentage = ((cases / population) * 100).toFixed(2);

  const ageGroup = [];
  let ageGroupKey = data2?.result?.records.map((items) => {
    ageGroup.push(items?.age);
  });

  const completedFull = [];
  let completedFullKey = data2?.result?.records.map((items) => {
    completedFull.push(items?.completed_full_regimen);
  });

  const unvaccinated = [];
  let unvaccinatedKey = data2?.result?.records.map((items) => {
    unvaccinated.push(items?.unvaccinated);
  });

  const atLeastOneDose = [];
  let atLeastOneDoseKey = data2?.result?.records.map((items) => {
    atLeastOneDose.push(items?.at_least_one_dose);
  });

  const url3 = `https://corona.lmao.ninja/v2/historical/Singapore?lastdays=${chart}`;

  const getData3 = () => {
    setStatus("pending");
    fetch(url3)
      .then((response) => response.json())
      .then((info) => {
        setStatus("complete");
        setData3(info.timeline.cases);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getData3();
  }, [url3]);

  let keys = Object.keys(data3);
  keys.shift();
  let value = Object.values(data3);
  let values = [];
  for (let i = 0; i < value.length; i++) {
    values[i] = value[i] - value[i - 1];
  }
  values.shift();

  if (status === "pending") {
    return "LOADING";
  }

  if (status === "error") {
    return "NO DATA FOUND";
  }

  function handleChart7() {
    setChart("8");
    setTimeframe("No. Of Cases For Past 7 Days");
  }

  function handleChart30() {
    setChart("31");
    setTimeframe("No. Of Cases For Past 30 Days");
  }
  function handleChart1() {
    setChart("366");
    setTimeframe("No. Of Cases for Past Year");
  }
  function handleChartAll() {
    setChart("all");
    setTimeframe("All No. Of Cases");
  }

  return (
    <>
      <div id="localHeader">
        <h1 id="singapore" class="stats3">
          Singapore
        </h1>
        <div class="stats3">
          <h3>Population: {population.toLocaleString()}</h3>
          <h5 style={{ color: "darkorange" }}>{casesPercentage}% infected</h5>
          <h3>Active cases: {active.toLocaleString()} </h3>
          <h5 style={{ color: "darkorange" }}>
            {activePercentage}% of total cases
          </h5>
        </div>
        <div class="stats3">
          <h3>Total cases: {cases.toLocaleString()} </h3>
          <h5 style={{ color: "red" }}>{critical} critical</h5>
          <h3>Total deaths: {deaths.toLocaleString()} </h3>
          <h5 style={{ color: "red" }}>{deathPercentage}% of total cases</h5>
          <h3>Total recovered: {recovered.toLocaleString()} </h3>
          <h5 style={{ color: "green" }}>
            {recoveryPercentage}% of total cases
          </h5>
        </div>
      </div>
      <div id="local">
        <div id="stats1">
          <h2>Vaccination status according to age group in %</h2>
          <Bar
            data={{
              labels: ageGroup,
              datasets: [
                {
                  label: "Completed Full",
                  data: completedFull,
                  backgroundColor: "teal",
                },
                {
                  label: "Unvaccinated",
                  data: unvaccinated,
                  backgroundColor: "red",
                },
                {
                  label: "At least one dose",
                  data: atLeastOneDose,
                  backgroundColor: "orange",
                },
              ],
            }}
            height={300}
            width={500}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
        <div id="stats2" style={{ textAlign: "left" }}>
          <h3 style={{ textAlign: "center" }}>Historical Graph</h3>
          <button onClick={handleChart7} className="chartButton">
            7d
          </button>
          <button onClick={handleChart30} className="chartButton">
            30d
          </button>
          <button onClick={handleChart1} className="chartButton">
            1y
          </button>
          <button onClick={handleChartAll} className="chartButton">
            All
          </button>
          <Bar
            data={{
              labels: keys,
              datasets: [
                {
                  label: `${timeframe}`,
                  data: values,
                  backgroundColor: "teal",
                },
              ],
            }}
            height={300}
            width={500}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Local;
