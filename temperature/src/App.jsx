import { useState, useEffect } from 'react';
import { Button } from './components/Button'
import { useTemperature } from './hooks/useTemperature';

import './App.css';


function App() {

  const [temperature, setTemperature] = useState(0)

  function decreaseTemperature() {
    setTemperature(temperature - 1)
  }

  function increaseTemperature() {
    setTemperature(temperature + 1)
  }

  useEffect(() => {
    useTemperature(temperature)
  }, [temperature])

  return (
    <div className="main-container">
     <h1>Temperature</h1>
     <main>
      <h2>{temperature}°C</h2>
      <div className="button-container">
        <Button handleClick={decreaseTemperature}>-</Button>
        <Button handleClick={increaseTemperature}>+</Button>
      </div>
     </main>
    </div>
  )
}

export default App
