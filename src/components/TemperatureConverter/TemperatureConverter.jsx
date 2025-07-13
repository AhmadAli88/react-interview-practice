import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c"); // 'c' for Celsius, 'f' for Fahrenheit

  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius =
    scale === "f" ? toCelsius(parseFloat(temperature) || 0).toString() : temperature;
  const fahrenheit =
    scale === "c" ? toFahrenheit(parseFloat(temperature) || 0).toString() : temperature;

  return (
    <div>
      <h2>Temperature Converter</h2>
      <CelsiusInput temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;