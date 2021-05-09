import React from "react";
import "./styles/App.scss";
import { Header } from './components/Header/Header';
import { Status } from './components/Status/Status';
import { Params } from './components/Params/Params';
import { Chart } from './components/Chart/Chart';
import { Water } from './components/Water/Water';
function App() {
  return (
    <div className="layout__container">
      <div className="layout__container-upper">
        <Header />
        <Status />
        <Params />
      </div>
      
      <div className="layout__container-chart">
          <Water/>
      </div>

    </div>
  );
}
export default App;