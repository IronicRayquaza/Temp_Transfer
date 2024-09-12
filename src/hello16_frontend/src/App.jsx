import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperatures, setConvertedTemperatures] = useState({
    Celsius: '',
    Fahrenheit: '',
    Kelvin: ''
  });

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const convertTemperature = () => {
    const temp = parseFloat(temperature);
    if (isNaN(temp)) {
      alert('Please enter a valid temperature');
      return;
    }

    let celsius, fahrenheit, kelvin;
    switch (unit) {
      case 'Celsius':
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        break;
      case 'Fahrenheit':
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
        break;
      case 'Kelvin':
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
        break;
      default:
        break;
    }

    setConvertedTemperatures({
      Celsius: celsius.toFixed(2),
      Fahrenheit: fahrenheit.toFixed(2),
      Kelvin: kelvin.toFixed(2)
    });
  };

  return (
    <div className="container">
      <h1 className="title">Temperature Converter</h1>
      <div className="converter">
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
          placeholder="Enter temperature"
          className="input"
        />
        <select value={unit} onChange={handleUnitChange} className="dropdown">
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
        <button onClick={convertTemperature} className="button">Convert</button>
      </div>
      {convertedTemperatures.Celsius && (
        <div className="result">
          <p>Celsius: {convertedTemperatures.Celsius}°C</p>
          <p>Fahrenheit: {convertedTemperatures.Fahrenheit}°F</p>
          <p>Kelvin: {convertedTemperatures.Kelvin}K</p>
        </div>
      )}
    </div>
  );
};

export default App;
