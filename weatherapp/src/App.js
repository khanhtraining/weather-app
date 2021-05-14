import React from "react";
import "./styles/App1.scss";
import { Header } from './components/Header/Header';
import { Status } from './components/Status/Status';
import { Params } from './components/Params/Params';
import { Chart } from './components/Chart/Chart';
function App() {
  return (
    <div className="layout__container">
      <div className="layout__container-upper">
        <Header />
        <Status />
        <Params />
      </div>
      
      <div className="layout__container-chart">
          <div className="layout__container-chart--title">
                <span className="blue-title">Tide</span>
                <span className="orange-title">Sunrise & Sunset</span>
          </div>
          <Chart/>
          
      </div>
    </div>
  );
}
export default App;