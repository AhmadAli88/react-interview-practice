import React from 'react'

const FahrenheitInput = ({ temperature, onTemperatureChange }) => (
  <div>
    <label>Fahrenheit: </label>
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
    />
  </div>
);

export default FahrenheitInput