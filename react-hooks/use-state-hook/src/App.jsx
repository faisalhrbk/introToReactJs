import React from "react";
import { useState } from "react";

const App = () => {
  const [brand, setBrand] = useState("tesla");
  const [model, setModel] = useState("Model S");
  const [year, setYear] = useState("2023");
  const [color, setColor] = useState("red");
  
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };
  
  const headerStyle = {
    color: '#333',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px'
  };
  
  const infoStyle = {
    fontSize: '18px',
    margin: '8px 0',
    color: '#444'
  };
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };
  
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My {brand}</h1>
      <p style={infoStyle}>Model: {model}</p>
      <p style={infoStyle}>Year: {year}</p>
      <p style={infoStyle}>Color: <span style={{color: color}}>{color}</span></p>
      
      <div>
        <button style={buttonStyle} onClick={() => setColor('blue')}>Change Color to Blue</button>
        <button style={buttonStyle} onClick={() => setBrand('Ford')}>Change Brand</button>
        <button style={buttonStyle} onClick={() => setModel('Mustang')}>Change Model</button>
        <button style={buttonStyle} onClick={() => setYear('2024')}>Change Year</button>
      </div>
    </div>
  );
};

export default App;
