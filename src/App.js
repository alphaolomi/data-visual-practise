import React,{ useState } from "react";
import Chart from 'react-apexcharts'
// import "./App.css";

function Charts() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      width={500}
      height={320}
    />
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Charts />
      </header>
    </div>
  );
}

export default App;
