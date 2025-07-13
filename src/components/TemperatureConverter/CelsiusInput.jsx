import React, { useState } from "react";

// Child component: Input for Celsius
const CelsiusInput = ({ temperature, onTemperatureChange }) => (
  <div>
    <label>Celsius: </label>
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
    />
  </div>
);
export default CelsiusInput;