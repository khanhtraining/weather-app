import React from '@babel/template'
import Chart from './scenes/Chart/Chart'
import Upper from './scenes/_Upper/Upper'
import './styles/App.scss'

const App = () => {
  return (
    <div className="layout__container">
      <Upper />
      <div className="layout__container-chart">
        <div className="layout__container-chart--title">
          <span className="blue-title">Tide</span>
          <span className="orange-title">Sunrise & Sunset</span>
        </div>
        <Chart />
      </div>
    </div>
  )
}

export default App
